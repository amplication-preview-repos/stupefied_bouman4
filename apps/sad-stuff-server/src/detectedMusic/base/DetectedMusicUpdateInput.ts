/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsInt,
  Min,
  Max,
  ValidateNested,
} from "class-validator";
import { DetectionLogUpdateManyWithoutDetectedMusicsInput } from "./DetectionLogUpdateManyWithoutDetectedMusicsInput";
import { Type } from "class-transformer";

@InputType()
class DetectedMusicUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  artist?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  duration?: number | null;

  @ApiProperty({
    required: false,
    type: () => DetectionLogUpdateManyWithoutDetectedMusicsInput,
  })
  @ValidateNested()
  @Type(() => DetectionLogUpdateManyWithoutDetectedMusicsInput)
  @IsOptional()
  @Field(() => DetectionLogUpdateManyWithoutDetectedMusicsInput, {
    nullable: true,
  })
  detectionLogs?: DetectionLogUpdateManyWithoutDetectedMusicsInput;
}

export { DetectedMusicUpdateInput as DetectedMusicUpdateInput };