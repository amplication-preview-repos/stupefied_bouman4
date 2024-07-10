import { SortOrder } from "../../util/SortOrder";

export type AudioSampleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  filePath?: SortOrder;
  userId?: SortOrder;
};
