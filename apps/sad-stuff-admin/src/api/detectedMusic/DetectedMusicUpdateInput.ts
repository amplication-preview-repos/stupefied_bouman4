import { DetectionLogUpdateManyWithoutDetectedMusicsInput } from "./DetectionLogUpdateManyWithoutDetectedMusicsInput";

export type DetectedMusicUpdateInput = {
  title?: string | null;
  artist?: string | null;
  duration?: number | null;
  detectionLogs?: DetectionLogUpdateManyWithoutDetectedMusicsInput;
};
