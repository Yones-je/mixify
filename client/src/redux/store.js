import { createStore } from "redux";
import cabinetReducer from "./cabinetSlice";

export const cabinetStore = createStore(cabinetReducer);
