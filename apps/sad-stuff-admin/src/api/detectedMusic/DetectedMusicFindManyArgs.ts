import { DetectedMusicWhereInput } from "./DetectedMusicWhereInput";
import { DetectedMusicOrderByInput } from "./DetectedMusicOrderByInput";

export type DetectedMusicFindManyArgs = {
  where?: DetectedMusicWhereInput;
  orderBy?: Array<DetectedMusicOrderByInput>;
  skip?: number;
  take?: number;
};
