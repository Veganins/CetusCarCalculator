import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";
import { IS_PUBLIC_KEY } from "../decorator/public.decorator";

@Injectable()
export class AtGuard extends AuthGuard("jwt") {
    constructor(private reflector: Reflector) {
        super();
    }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) return true;

        const request = context.switchToHttp().getRequest();
        const isSetBarrierToken = request.headers?.authorization !== undefined;
        if (!isSetBarrierToken)
            throw new UnauthorizedException(
                `You don't pass authorization token (probably you don't log in)`
            );

        return super.canActivate(context);
    }
}
