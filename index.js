
import config from "./src/config";
import * as number from "./src/number";
import * as date from "./src/date";
import * as text from "./src/text";

const fmt = {
  config,
  ...number,
  ...date,
  ...text,
};

export default fmt;
