import { AudioSampleWhereInput } from "./AudioSampleWhereInput";
import { AudioSampleOrderByInput } from "./AudioSampleOrderByInput";

export type AudioSampleFindManyArgs = {
  where?: AudioSampleWhereInput;
  orderBy?: Array<AudioSampleOrderByInput>;
  skip?: number;
  take?: number;
};
