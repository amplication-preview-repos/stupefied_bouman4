import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AudioSampleUpdateInput = {
  filePath?: string | null;
  user?: UserWhereUniqueInput | null;
};
