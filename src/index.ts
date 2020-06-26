import axios, { AxiosInstance } from 'axios';
import {
  ErrorsByDayParams,
  ErrorsByDayResponse,
  ErrorsByHourParams,
  ErrorsByHourResponse,
  ErrorsByMessageParams,
  ErrorsByMessageResponse,
  ErrorsByUrlParams,
  ErrorsByUrlResponse,
  ErrorsParams,
  ErrorsResponse,
  PageViewsByDayResponse,
} from './interfaces';

export * from './interfaces';

export class Client {
  /**
   * TrackJS Data API version.
   */
  public readonly version: string = 'v1';

  /**
   * Axios HTTP client instance used by this client.
   */
  private axios: AxiosInstance;

  constructor(apiKey: string, customerId: string) {
    this.axios = axios.create({
      baseURL: `https://api.trackjs.com/${customerId}/${this.version}/`,
      headers: {
        Authorization: apiKey,
      },
    });
  }

  /**
   * This endpoint returns a list of individual errors, sorted by date descending.
   * https://docs.trackjs.com/data-api/errors/
   *
   * @param params Accepted parameters
   */
  public async getErrors(params: ErrorsParams): Promise<ErrorsResponse> {
    return await this.axios.get('/errors', { params }).then(({ data }) => data);
  }

  /**
   * This endpoint returns the Error count by Day, sorted by date descending.
   * https://docs.trackjs.com/data-api/errors-by-day/
   *
   * @param params Accepted parameters
   */
  public async getErrorsByDay(
    params: ErrorsByDayParams
  ): Promise<ErrorsByDayResponse> {
    return await this.axios
      .get('/errors/daily', { params })
      .then(({ data }) => data);
  }

  /**
   * This endpoint returns the Error count by Hour, sorted by date descending.
   * https://docs.trackjs.com/data-api/errors-by-hour/
   *
   * @param params Accepted parameters
   */
  public async getErrorsByHour(
    params: ErrorsByHourParams
  ): Promise<ErrorsByHourResponse> {
    return await this.axios
      .get('/errors/hourly', { params })
      .then(({ data }) => data);
  }

  /**
   * This endpoint returns the count of Error count by Message, sorted by count descending.
   * https://docs.trackjs.com/data-api/errors-by-message/
   *
   * @param params Accepted parameters
   */
  public async getErrorsByMessage(
    params: ErrorsByMessageParams
  ): Promise<ErrorsByMessageResponse> {
    return await this.axios
      .get('/errors/messages', { params })
      .then(({ data }) => data);
  }

  /**
   * This endpoint returns the count of Error count by URL, sorted by count descending.
   * https://docs.trackjs.com/data-api/errors-by-url/
   *
   * @param params Accepted parameters
   */
  public async getErrorsByUrl(
    params: ErrorsByUrlParams
  ): Promise<ErrorsByUrlResponse> {
    return await this.axios
      .get('/errors/urls', { params })
      .then(({ data }) => data);
  }

  /**
   * TrackJS records the number of times the Agent loads on your site as Page Views.
   * This endpoint returns the page view counts per day, sorted by date descending.
   * https://docs.trackjs.com/data-api/errors-by-url/
   *
   * @param params Accepted parameters
   */
  public async getPageViewsByDay(
    params: ErrorsByUrlParams
  ): Promise<PageViewsByDayResponse> {
    return await this.axios
      .get('/hits/daily', { params })
      .then(({ data }) => data);
  }
}
