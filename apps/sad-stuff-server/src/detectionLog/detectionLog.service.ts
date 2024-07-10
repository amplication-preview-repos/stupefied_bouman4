import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DetectionLogServiceBase } from "./base/detectionLog.service.base";

@Injectable()
export class DetectionLogService extends DetectionLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
