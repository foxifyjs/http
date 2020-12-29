import HttpError from "./HttpError";
import { STATUS } from "../constants";
import { STATUS_CODES } from "http";

export default class MethodNotAllowed extends HttpError {
  constructor(message: string = STATUS_CODES[STATUS.METHOD_NOT_ALLOWED]!) {
    super(message, STATUS.METHOD_NOT_ALLOWED);
  }
}
