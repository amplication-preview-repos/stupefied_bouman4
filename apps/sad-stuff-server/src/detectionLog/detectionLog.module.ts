import { Module } from "@nestjs/common";
import { DetectionLogModuleBase } from "./base/detectionLog.module.base";
import { DetectionLogService } from "./detectionLog.service";
import { DetectionLogController } from "./detectionLog.controller";
import { DetectionLogResolver } from "./detectionLog.resolver";

@Module({
  imports: [DetectionLogModuleBase],
  controllers: [DetectionLogController],
  providers: [DetectionLogService, DetectionLogResolver],
  exports: [DetectionLogService],
})
export class DetectionLogModule {}
