import { DetectionLogCreateNestedManyWithoutDetectedMusicsInput } from "./DetectionLogCreateNestedManyWithoutDetectedMusicsInput";

export type DetectedMusicCreateInput = {
  title?: string | null;
  artist?: string | null;
  duration?: number | null;
  detectionLogs?: DetectionLogCreateNestedManyWithoutDetectedMusicsInput;
};
