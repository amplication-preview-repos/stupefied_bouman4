import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DetectedMusicService } from "./detectedMusic.service";
import { DetectedMusicControllerBase } from "./base/detectedMusic.controller.base";

@swagger.ApiTags("detectedMusics")
@common.Controller("detectedMusics")
export class DetectedMusicController extends DetectedMusicControllerBase {
  constructor(protected readonly service: DetectedMusicService) {
    super(service);
  }
}
