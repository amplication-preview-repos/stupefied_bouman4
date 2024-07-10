import { User } from "../user/User";

export type AudioSample = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  filePath: string | null;
  user?: User | null;
};
