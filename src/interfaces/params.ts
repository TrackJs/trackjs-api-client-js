enum Sort {
  COUNT_ASC = 'count|asc',
  COUNT_DESC = 'count|desc',
  DATE_ASC = 'date|asc',
  DATE_DESC = 'date|desc',
  USER_COUNT_ASC = 'usercount|asc',
  USER_COUNT_DESC = 'usercount|desc',
}

interface Params {
  application?: string;
  endDate?: string;
  startDate?: string;
  page?: number;
  size?: number;
}

interface SortableParams extends Params {
  sort?: Sort;
}

export interface ErrorsParams extends Params {
  query?: string;
  includeStack?: boolean;
}

export { Params as PageViewsByDayParams };
export { SortableParams as ErrorsByDayParams };
export { SortableParams as ErrorsByHourParams };
export { SortableParams as ErrorsByMessageParams };
export { SortableParams as ErrorsByUrlParams };
