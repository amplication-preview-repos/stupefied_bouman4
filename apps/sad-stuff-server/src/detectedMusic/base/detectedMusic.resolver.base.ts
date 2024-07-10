/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DetectedMusic } from "./DetectedMusic";
import { DetectedMusicCountArgs } from "./DetectedMusicCountArgs";
import { DetectedMusicFindManyArgs } from "./DetectedMusicFindManyArgs";
import { DetectedMusicFindUniqueArgs } from "./DetectedMusicFindUniqueArgs";
import { CreateDetectedMusicArgs } from "./CreateDetectedMusicArgs";
import { UpdateDetectedMusicArgs } from "./UpdateDetectedMusicArgs";
import { DeleteDetectedMusicArgs } from "./DeleteDetectedMusicArgs";
import { DetectionLogFindManyArgs } from "../../detectionLog/base/DetectionLogFindManyArgs";
import { DetectionLog } from "../../detectionLog/base/DetectionLog";
import { DetectedMusicService } from "../detectedMusic.service";
@graphql.Resolver(() => DetectedMusic)
export class DetectedMusicResolverBase {
  constructor(protected readonly service: DetectedMusicService) {}

  async _detectedMusicsMeta(
    @graphql.Args() args: DetectedMusicCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DetectedMusic])
  async detectedMusics(
    @graphql.Args() args: DetectedMusicFindManyArgs
  ): Promise<DetectedMusic[]> {
    return this.service.detectedMusics(args);
  }

  @graphql.Query(() => DetectedMusic, { nullable: true })
  async detectedMusic(
    @graphql.Args() args: DetectedMusicFindUniqueArgs
  ): Promise<DetectedMusic | null> {
    const result = await this.service.detectedMusic(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DetectedMusic)
  async createDetectedMusic(
    @graphql.Args() args: CreateDetectedMusicArgs
  ): Promise<DetectedMusic> {
    return await this.service.createDetectedMusic({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DetectedMusic)
  async updateDetectedMusic(
    @graphql.Args() args: UpdateDetectedMusicArgs
  ): Promise<DetectedMusic | null> {
    try {
      return await this.service.updateDetectedMusic({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DetectedMusic)
  async deleteDetectedMusic(
    @graphql.Args() args: DeleteDetectedMusicArgs
  ): Promise<DetectedMusic | null> {
    try {
      return await this.service.deleteDetectedMusic(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [DetectionLog], { name: "detectionLogs" })
  async findDetectionLogs(
    @graphql.Parent() parent: DetectedMusic,
    @graphql.Args() args: DetectionLogFindManyArgs
  ): Promise<DetectionLog[]> {
    const results = await this.service.findDetectionLogs(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}