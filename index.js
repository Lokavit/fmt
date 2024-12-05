import config from "./src/config";
import * as number from "./src/number";
import * as date from "./src/date";
import { fmtText } from "./src/text";

const fmt = {
  config,
  fmtText,
  ...number,
  ...date,
};

export default fmt;
