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
import { DetectionLogWhereUniqueInput } from "./DetectionLogWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DetectionLogUpdateInput } from "./DetectionLogUpdateInput";

@ArgsType()
class UpdateDetectionLogArgs {
  @ApiProperty({
    required: true,
    type: () => DetectionLogWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DetectionLogWhereUniqueInput)
  @Field(() => DetectionLogWhereUniqueInput, { nullable: false })
  where!: DetectionLogWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DetectionLogUpdateInput,
  })
  @ValidateNested()
  @Type(() => DetectionLogUpdateInput)
  @Field(() => DetectionLogUpdateInput, { nullable: false })
  data!: DetectionLogUpdateInput;
}

export { UpdateDetectionLogArgs as UpdateDetectionLogArgs };