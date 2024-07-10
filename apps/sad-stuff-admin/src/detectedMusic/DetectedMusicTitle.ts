import { DetectedMusic as TDetectedMusic } from "../api/detectedMusic/DetectedMusic";

export const DETECTEDMUSIC_TITLE_FIELD = "title";

export const DetectedMusicTitle = (record: TDetectedMusic): string => {
  return record.title?.toString() || String(record.id);
};
