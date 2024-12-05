import config from "./src/config";
import { fmtText } from "./src/text";
import { fmtPercent } from "./src/number";
import * as date from "./src/date";

const fmt = {
  config,
  fmtText,
  fmtPercent,
  ...date,
};

export default fmt;
