import { Module } from "@nestjs/common";
import { DetectedMusicModuleBase } from "./base/detectedMusic.module.base";
import { DetectedMusicService } from "./detectedMusic.service";
import { DetectedMusicController } from "./detectedMusic.controller";
import { DetectedMusicResolver } from "./detectedMusic.resolver";

@Module({
  imports: [DetectedMusicModuleBase],
  controllers: [DetectedMusicController],
  providers: [DetectedMusicService, DetectedMusicResolver],
  exports: [DetectedMusicService],
})
export class DetectedMusicModule {}
