import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AudioSampleService } from "./audioSample.service";
import { AudioSampleControllerBase } from "./base/audioSample.controller.base";

@swagger.ApiTags("audioSamples")
@common.Controller("audioSamples")
export class AudioSampleController extends AudioSampleControllerBase {
  constructor(protected readonly service: AudioSampleService) {
    super(service);
  }
}
