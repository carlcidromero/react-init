import { appendTo, createWithClass } from "../generalized/index.js";

export const appendToBody = appendTo(document.body);

export const createDivWithClass = createWithClass("div");

export const createRoot = () => createDivWithClass("cica-root");
