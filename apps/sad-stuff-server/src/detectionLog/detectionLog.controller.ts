import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DetectionLogService } from "./detectionLog.service";
import { DetectionLogControllerBase } from "./base/detectionLog.controller.base";

@swagger.ApiTags("detectionLogs")
@common.Controller("detectionLogs")
export class DetectionLogController extends DetectionLogControllerBase {
  constructor(protected readonly service: DetectionLogService) {
    super(service);
  }
}
