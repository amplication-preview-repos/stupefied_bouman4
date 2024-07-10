import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AudioSampleCreateInput = {
  filePath?: string | null;
  user?: UserWhereUniqueInput | null;
};
