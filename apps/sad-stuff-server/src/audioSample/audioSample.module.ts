import { Module } from "@nestjs/common";
import { AudioSampleModuleBase } from "./base/audioSample.module.base";
import { AudioSampleService } from "./audioSample.service";
import { AudioSampleController } from "./audioSample.controller";
import { AudioSampleResolver } from "./audioSample.resolver";

@Module({
  imports: [AudioSampleModuleBase],
  controllers: [AudioSampleController],
  providers: [AudioSampleService, AudioSampleResolver],
  exports: [AudioSampleService],
})
export class AudioSampleModule {}
