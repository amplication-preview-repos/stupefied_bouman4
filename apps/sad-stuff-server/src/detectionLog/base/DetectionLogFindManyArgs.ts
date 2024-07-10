/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DetectionLogWhereInput } from "./DetectionLogWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DetectionLogOrderByInput } from "./DetectionLogOrderByInput";

@ArgsType()
class DetectionLogFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DetectionLogWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DetectionLogWhereInput, { nullable: true })
  @Type(() => DetectionLogWhereInput)
  where?: DetectionLogWhereInput;

  @ApiProperty({
    required: false,
    type: [DetectionLogOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DetectionLogOrderByInput], { nullable: true })
  @Type(() => DetectionLogOrderByInput)
  orderBy?: Array<DetectionLogOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DetectionLogFindManyArgs as DetectionLogFindManyArgs };