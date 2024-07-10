import { SortOrder } from "../../util/SortOrder";

export type DetectionLogOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  timestamp?: SortOrder;
  userId?: SortOrder;
  detectedMusicId?: SortOrder;
};
