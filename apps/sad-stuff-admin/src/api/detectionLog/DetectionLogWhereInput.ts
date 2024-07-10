import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DetectedMusicWhereUniqueInput } from "../detectedMusic/DetectedMusicWhereUniqueInput";

export type DetectionLogWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  detectedMusic?: DetectedMusicWhereUniqueInput;
};
