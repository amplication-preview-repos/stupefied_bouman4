import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DetectedMusicWhereUniqueInput } from "../detectedMusic/DetectedMusicWhereUniqueInput";

export type DetectionLogCreateInput = {
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
  detectedMusic?: DetectedMusicWhereUniqueInput | null;
};
