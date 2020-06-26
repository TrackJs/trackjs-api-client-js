interface Response<P, T> {
  data: P[];
  metadata: T;
}

interface ResponseMetadata {
  startDate: string;
  page: number;
  size: number;
}

interface DetailedResponseMetadata extends ResponseMetadata {
  hasMore: boolean;
  trackJsUrl: string;
}

interface CountByKey {
  key: string;
  count: number;
}

interface ErrorMetadata {
  key: string;
  value: string;
}

interface AdditionalErrorInfo {
  userCount: number;
  trackJsUrl: string;
}

interface Error {
  message: string;
  timestamp: string;
  url: string;
  id: string;
  browserName: string;
  browserVersion: string;
  entry: string;
  line: number;
  column: number;
  file: string;
  userId: string;
  sessionId: string;
  trackJsUrl: string;
  stackTrace?: string[];
  metadata: ErrorMetadata[];
}

interface ErrorsMetadata extends DetailedResponseMetadata {
  endDate: string;
  totalCount: number;
}

export type ErrorsResponse = Response<Error, ErrorsMetadata>;

interface PeriodError extends CountByKey {
  userCount: number;
  trackJsUrl: string;
}

type ErrorsByPeriodResponse = Response<PeriodError, DetailedResponseMetadata>;

export type ErrorsByDayResponse = ErrorsByPeriodResponse;
export type ErrorsByHourResponse = ErrorsByPeriodResponse;

interface ErrorByMessage extends CountByKey, AdditionalErrorInfo {
  firstSeen: string;
  lastSeen: string;
}

export type ErrorsByMessageResponse = Response<
  ErrorByMessage,
  DetailedResponseMetadata
>;

interface ErrorByUrl extends CountByKey, AdditionalErrorInfo {}

export type ErrorsByUrlResponse = Response<
  ErrorByUrl,
  DetailedResponseMetadata
>;

interface PageViewsByDayMetadata extends ResponseMetadata {
  totalCount: number;
  hasMore: boolean;
}

export type PageViewsByDayResponse = Response<
  CountByKey,
  PageViewsByDayMetadata
>;
