import foxifyInject, {
  DispatchT,
  InjectResultI,
  OptionsI,
} from "@foxify/inject";
import { Request, Response } from "../../src";

export default function inject(
  dispatch: DispatchT<Request, Response>,
  options: string | OptionsI,
): Promise<InjectResultI<Request, Response>> {
  if (typeof options === "string") {
    options = {
      url: options,
    };
  }

  return foxifyInject<Request, Response>(
    (req, res) => {
      // will be populated by foxify
      res.stringify = {};
      res.next = (err?) => {
        if (err) throw err;
      };

      return dispatch(req, res);
    },
    {
      ...options,
      Request,
      Response: Response as never, // TODO: fix types
    },
  );
}
