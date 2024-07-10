import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DetectionLogListRelationFilter } from "../detectionLog/DetectionLogListRelationFilter";
import { AudioSampleListRelationFilter } from "../audioSample/AudioSampleListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  detectionLogs?: DetectionLogListRelationFilter;
  audioSamples?: AudioSampleListRelationFilter;
};
