<p align="center">
  <a href="https://trackjs.com/" target="_blank" align="center">
    <img src="https://trackjs.com/assets/external/github_readme.svg" width="280">
  </a>
  <br />
</p>

# TrackJS Data API for NodeJS

NodeJS implementation of the Track JS Data API.

## Reference

- [TrackJS Data API Documentation](https://docs.trackjs.com/data-api/)

## Prerequisites

You'll need to get a Track JS API key and a Track JS API Customer ID from
https://my.trackjs.com/Account/Organization.

## Usage

Install the dependency:

```
npm install trackjs-api-client
```

Then in your Node application:

```js
import { Client } from 'trackjs-api-client';

const trackJs = new Client(
  '<insert your apiKey here>',
  '<insert your customerId here>'
);
```

After that you are good to go!

## Available exports

### trackJs.getErrors(params)

API reference: http://docs.trackjs.com/data-api/errors

| Parameter      | type            | Required | Description                                                                                   |
| -------------- | --------------- | -------- | --------------------------------------------------------------------------------------------- |
| `application`  | String          | no       | Filter the results to only the Application key provided.                                      |
| `endDate`      | ISO 8601 String | no       | Filter the results to only return errors before this date. Time precision is within 1 second. |
| `startDate`    | ISO 8601 String | no       | Filter the results to only return errors after this date. Time precision is within 1 second.  |
| `page`         | Number          | no       | The page of data you want returned. By default, the first page of data is returned.           |
| `size`         | Number          | no       | The size of the page of data you want returned.                                               |
| `query`        | Number          | no       | Filter the results to errors that match the supplied query term.                              |
| `includeStack` | Boolean         | no       | Whether to return a stackTrace with the Error response.                                       |

### trackJs.getErrorsByDay(params)

API reference: http://docs.trackjs.com/data-api/errors-by-day

| Parameter     | type            | Required | Description                                                                                                                                                                                                                                                                                          |
| ------------- | --------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `application` | String          | no       | Filter the results to only the Application key provided.                                                                                                                                                                                                                                             |
| `endDate`     | ISO 8601 String | no       | Filter the results to only return errors before this date. Time precision is within 1 second.                                                                                                                                                                                                        |
| `startDate`   | ISO 8601 String | no       | Filter the results to only return errors after this date. Time precision is within 1 second.                                                                                                                                                                                                         |
| `page`        | Number          | no       | The page of data you want returned. By default, the first page of data is returned.                                                                                                                                                                                                                  |
| `size`        | Number          | no       | The size of the page of data you want returned.                                                                                                                                                                                                                                                      |
| `sort`        | String          | no       | By default the endpoint returns results sorted by date in descending order. You may adjust the sort field and sort direction. Supported fields are `date`, `count` and `usercount`. Sort directions are specified by appending `| asc` or `| desc`. Default value is `date | desc` if not specified. |

### trackJs.getErrorsByHour(params)

API reference: http://docs.trackjs.com/data-api/errors-by-hour

| Parameter     | type            | Required | Description                                                                                                                                                                                                                                                                                          |
| ------------- | --------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `application` | String          | no       | Filter the results to only the Application key provided.                                                                                                                                                                                                                                             |
| `endDate`     | ISO 8601 String | no       | Filter the results to only return errors before this date and time. Time precision is within 1 second.                                                                                                                                                                                               |
| `startDate`   | ISO 8601 String | no       | Filter the results to only return errors after this date and time. Time precision is within 1 second.                                                                                                                                                                                                |
| `page`        | Number          | no       | The page of data you want returned. By default, the first page of data is returned.                                                                                                                                                                                                                  |
| `size`        | Number          | no       | The size of the page of data you want returned.                                                                                                                                                                                                                                                      |
| `sort`        | String          | no       | By default the endpoint returns results sorted by date in descending order. You may adjust the sort field and sort direction. Supported fields are `date`, `count` and `usercount`. Sort directions are specified by appending `| asc` or `| desc`. Default value is `date | desc` if not specified. |

### trackJs.getErrorsByMessage(params)

API reference: http://docs.trackjs.com/data-api/errors-by-message

| Parameter     | type            | Required | Description                                                                                                                                                                                                                                                                                          |
| ------------- | --------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `application` | String          | no       | Filter the results to only the Application key provided.                                                                                                                                                                                                                                             |
| `endDate`     | ISO 8601 String | no       | Filter the results to only return errors before this date. Time precision is within 1 second.                                                                                                                                                                                                        |
| `startDate`   | ISO 8601 String | no       | Filter the results to only return errors after this date. Time precision is within 1 second.                                                                                                                                                                                                         |
| `page`        | Number          | no       | The page of data you want returned. By default, the first page of data is returned.                                                                                                                                                                                                                  |
| `size`        | Number          | no       | The size of the page of data you want returned.                                                                                                                                                                                                                                                      |
| `sort`        | String          | no       | By default the endpoint returns results sorted by date in descending order. You may adjust the sort field and sort direction. Supported fields are `date`, `count` and `usercount`. Sort directions are specified by appending `| asc` or `| desc`. Default value is `date | desc` if not specified. |

### trackJs.getErrorsByUrl(params)

API reference: http://docs.trackjs.com/data-api/errors-by-url

| Parameter     | type            | Required | Description                                                                                                                                                                                                                                                                                          |
| ------------- | --------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `application` | String          | no       | Filter the results to only the Application key provided.                                                                                                                                                                                                                                             |
| `endDate`     | ISO 8601 String | no       | Filter the results to only return errors before this date. Time precision is within 1 second.                                                                                                                                                                                                        |
| `startDate`   | ISO 8601 String | no       | Filter the results to only return errors after this date. Time precision is within 1 second.                                                                                                                                                                                                         |
| `page`        | Number          | no       | The page of data you want returned. By default, the first page of data is returned.                                                                                                                                                                                                                  |
| `size`        | Number          | no       | The size of the page of data you want returned.                                                                                                                                                                                                                                                      |
| `sort`        | String          | no       | By default the endpoint returns results sorted by date in descending order. You may adjust the sort field and sort direction. Supported fields are `date`, `count` and `usercount`. Sort directions are specified by appending `| asc` or `| desc`. Default value is `date | desc` if not specified. |

### trackJs.getPageViewsByDay(params)

API reference: http://docs.trackjs.com/data-api/pageviews-by-day

| Parameter     | type            | Required | Description                                                                                   |
| ------------- | --------------- | -------- | --------------------------------------------------------------------------------------------- |
| `application` | String          | no       | Filter the results to only the Application key provided.                                      |
| `endDate`     | ISO 8601 String | no       | Filter the results to only return errors before this date. Time precision is within 1 second. |
| `startDate`   | ISO 8601 String | no       | Filter the results to only return errors after this date. Time precision is within 1 second.  |
| `page`        | Number          | no       | The page of data you want returned. By default, the first page of data is returned.           |
| `size`        | Number          | no       | The size of the page of data you want returned.                                               |
