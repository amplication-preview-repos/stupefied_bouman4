import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AudioSampleServiceBase } from "./base/audioSample.service.base";

@Injectable()
export class AudioSampleService extends AudioSampleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
