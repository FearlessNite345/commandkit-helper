import { ValidationFunctionProps } from "commandkit";

export type ValidationCallbackFunction = (
    options: ValidationFunctionProps
) => boolean | Promise<void> | void;