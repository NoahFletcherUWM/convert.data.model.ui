import { PropertyTypes } from "./PropertyTypes";

export type OutputFunctionParameter = {
  PropertyName: string;
  PropertyType: PropertyTypes;
  DefaultValue: PropertyTypes | null;
};
