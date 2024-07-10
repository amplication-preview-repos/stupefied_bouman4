import { DetectionLog as TDetectionLog } from "../api/detectionLog/DetectionLog";

export const DETECTIONLOG_TITLE_FIELD = "id";

export const DetectionLogTitle = (record: TDetectionLog): string => {
  return record.id?.toString() || String(record.id);
};
