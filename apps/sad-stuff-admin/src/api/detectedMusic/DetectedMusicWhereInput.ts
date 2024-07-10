import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DetectionLogListRelationFilter } from "../detectionLog/DetectionLogListRelationFilter";

export type DetectedMusicWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  artist?: StringNullableFilter;
  duration?: IntNullableFilter;
  detectionLogs?: DetectionLogListRelationFilter;
};
