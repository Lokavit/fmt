import config from "./src/config";
import { fmtText } from "./src/text";
import {
  fmtPercent,
  fmtNumber,
  fmtCrypto,
  fmtCurrency,
  fmtQTY,
} from "./src/number";
import {fmtToHMS} from "./src/date";

const fmt = {
  config,
  fmtText,
  fmtPercent,
  fmtNumber,
  fmtCrypto,
  fmtCurrency,
  fmtQTY,
  fmtToHMS,
};

export default fmt;
