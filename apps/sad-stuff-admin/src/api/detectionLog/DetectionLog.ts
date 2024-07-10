import { User } from "../user/User";
import { DetectedMusic } from "../detectedMusic/DetectedMusic";

export type DetectionLog = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  timestamp: Date | null;
  user?: User | null;
  detectedMusic?: DetectedMusic | null;
};
