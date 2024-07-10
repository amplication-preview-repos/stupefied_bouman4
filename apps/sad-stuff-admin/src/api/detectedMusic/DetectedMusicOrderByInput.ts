import { SortOrder } from "../../util/SortOrder";

export type DetectedMusicOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  artist?: SortOrder;
  duration?: SortOrder;
};
