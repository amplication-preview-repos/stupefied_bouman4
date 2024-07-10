import * as graphql from "@nestjs/graphql";
import { AudioSampleResolverBase } from "./base/audioSample.resolver.base";
import { AudioSample } from "./base/AudioSample";
import { AudioSampleService } from "./audioSample.service";

@graphql.Resolver(() => AudioSample)
export class AudioSampleResolver extends AudioSampleResolverBase {
  constructor(protected readonly service: AudioSampleService) {
    super(service);
  }
}
