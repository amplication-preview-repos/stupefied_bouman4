import { DetectionLogWhereInput } from "./DetectionLogWhereInput";
import { DetectionLogOrderByInput } from "./DetectionLogOrderByInput";

export type DetectionLogFindManyArgs = {
  where?: DetectionLogWhereInput;
  orderBy?: Array<DetectionLogOrderByInput>;
  skip?: number;
  take?: number;
};
