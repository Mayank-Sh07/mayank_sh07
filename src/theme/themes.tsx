import light from "./light";
import dark from "./dark";
import { Theme } from "@material-ui/core/styles";

const themes = { light, dark };

export default function getTheme(themeName: string): Theme {
  return themes[themeName];
}
