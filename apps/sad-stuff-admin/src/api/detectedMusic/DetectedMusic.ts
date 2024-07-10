import { DetectionLog } from "../detectionLog/DetectionLog";

export type DetectedMusic = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  artist: string | null;
  duration: number | null;
  detectionLogs?: Array<DetectionLog>;
};
