import { InputJsonValue } from "../../types";
import { DetectionLogUpdateManyWithoutUsersInput } from "./DetectionLogUpdateManyWithoutUsersInput";
import { AudioSampleUpdateManyWithoutUsersInput } from "./AudioSampleUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  detectionLogs?: DetectionLogUpdateManyWithoutUsersInput;
  audioSamples?: AudioSampleUpdateManyWithoutUsersInput;
};
