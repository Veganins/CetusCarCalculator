import { Expose } from "class-transformer";

@Expose()
export class SignInUserEntity {
    @Expose()
    accessToken: string;
    private static readonly _type = "SignInUserEntity";
    constructor(data: Omit<SignInUserEntity, "_type">) {
        Object.assign(this, data);
    }
}
