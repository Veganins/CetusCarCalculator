import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

@Expose()
export class SignInUserEntity {
    @Expose()
    @ApiProperty()
    accessToken: string;
    @ApiHideProperty()
    private static readonly _type = "SignInUserEntity";
    constructor(data: Omit<SignInUserEntity, "_type">) {
        Object.assign(this, data);
    }
}
