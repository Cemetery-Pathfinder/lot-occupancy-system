import type { Request, Response } from 'express';
export default function handler(request: Request<unknown, unknown, {
    lotOccupantTypeId: string;
    moveToEnd: '0' | '1';
}>, response: Response): Promise<void>;
