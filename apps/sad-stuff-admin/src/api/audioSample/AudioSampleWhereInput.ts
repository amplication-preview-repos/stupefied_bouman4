import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AudioSampleWhereInput = {
  id?: StringFilter;
  filePath?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
