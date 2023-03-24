import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";

@Exclude()
export class AccessTokenEntity {
    @Expose()
    @ApiProperty()
    accessToken: string;

    @ApiHideProperty()
    private static readonly _type = "AccessTokenEntity";

    constructor(data: Omit<AccessTokenEntity, "_type">) {
        Object.assign(this, data);
    }
}
