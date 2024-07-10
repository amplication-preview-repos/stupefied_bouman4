import * as graphql from "@nestjs/graphql";
import { DetectedMusicResolverBase } from "./base/detectedMusic.resolver.base";
import { DetectedMusic } from "./base/DetectedMusic";
import { DetectedMusicService } from "./detectedMusic.service";

@graphql.Resolver(() => DetectedMusic)
export class DetectedMusicResolver extends DetectedMusicResolverBase {
  constructor(protected readonly service: DetectedMusicService) {
    super(service);
  }
}
