import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";

@Exclude()
export class MessageEntity {
    @Expose()
    @ApiProperty()
    message: string;

    @ApiHideProperty()
    private static readonly _type = "MessageEntity";

    constructor(data: Omit<MessageEntity, "_type">) {
        Object.assign(this, data);
    }
}
