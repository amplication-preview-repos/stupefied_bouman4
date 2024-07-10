import { InputJsonValue } from "../../types";
import { DetectionLogCreateNestedManyWithoutUsersInput } from "./DetectionLogCreateNestedManyWithoutUsersInput";
import { AudioSampleCreateNestedManyWithoutUsersInput } from "./AudioSampleCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  detectionLogs?: DetectionLogCreateNestedManyWithoutUsersInput;
  audioSamples?: AudioSampleCreateNestedManyWithoutUsersInput;
};
