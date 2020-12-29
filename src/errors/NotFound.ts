import HttpError from "./HttpError";
import { STATUS } from "../constants";
import { STATUS_CODES } from "http";

export default class NotFound extends HttpError {
  constructor(message: string = STATUS_CODES[STATUS.NOT_FOUND]!) {
    super(message, STATUS.NOT_FOUND);
  }
}
