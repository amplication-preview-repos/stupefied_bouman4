import { AudioSample as TAudioSample } from "../api/audioSample/AudioSample";

export const AUDIOSAMPLE_TITLE_FIELD = "filePath";

export const AudioSampleTitle = (record: TAudioSample): string => {
  return record.filePath?.toString() || String(record.id);
};
