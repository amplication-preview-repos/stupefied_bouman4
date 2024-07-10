import * as graphql from "@nestjs/graphql";
import { DetectionLogResolverBase } from "./base/detectionLog.resolver.base";
import { DetectionLog } from "./base/DetectionLog";
import { DetectionLogService } from "./detectionLog.service";

@graphql.Resolver(() => DetectionLog)
export class DetectionLogResolver extends DetectionLogResolverBase {
  constructor(protected readonly service: DetectionLogService) {
    super(service);
  }
}
