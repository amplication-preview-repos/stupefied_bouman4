import { JsonValue } from "type-fest";
import { DetectionLog } from "../detectionLog/DetectionLog";
import { AudioSample } from "../audioSample/AudioSample";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  detectionLogs?: Array<DetectionLog>;
  audioSamples?: Array<AudioSample>;
};
