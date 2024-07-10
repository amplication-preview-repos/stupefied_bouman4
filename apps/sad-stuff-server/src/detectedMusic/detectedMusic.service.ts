import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DetectedMusicServiceBase } from "./base/detectedMusic.service.base";

@Injectable()
export class DetectedMusicService extends DetectedMusicServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
