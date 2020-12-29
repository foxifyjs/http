import { STATUS_CODES } from "http";
import { STATUS, StatusT } from "../constants";

export default class HttpError extends Error {
  public readonly statusCode: StatusT;

  public readonly details: Record<string, unknown>;

  constructor(status: StatusT);
  constructor(message: string, status?: StatusT);
  constructor(details: Record<string, unknown>, status?: StatusT);
  constructor(
    message: string,
    details: Record<string, unknown>,
    status?: StatusT,
  );
  constructor(
    message: string | Record<string, unknown> | StatusT,
    details: Record<string, unknown> | StatusT = {},
    status: StatusT | Record<string, unknown> = STATUS.INTERNAL_SERVER_ERROR,
  ) {
    switch (typeof message) {
      case "string": {
        if (typeof details === "number") {
          status = details;
          details = {};
        }

        break;
      }
      case "number": {
        status = message;
        message = STATUS_CODES[status] || `${status}`;

        break;
      }
      default: {
        status = details as StatusT;
        details = message;
        message = STATUS_CODES[status] || `${status}`;

        break;
      }
    }

    super(message);

    this.statusCode = status as StatusT;
    this.details = details as Record<string, unknown>;
  }
}
