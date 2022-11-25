import { createContext } from "react";
import { fabric } from "fabric";

export default createContext({
  canvas: undefined,
  setCanvas: () => {},
});
