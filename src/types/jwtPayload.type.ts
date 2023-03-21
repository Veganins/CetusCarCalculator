import { ROLE } from "@Prisma/client";

export type JwtPayload = {
    userId: number;
    roles: string;
    refreshTokenExpirationDate: Date;
    sessionExpirationDate: Date;
};
