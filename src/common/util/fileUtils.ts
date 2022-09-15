import { FormValues, FormProperty } from "../../types/FormValues";

export const makeCamelCase = (value: string): string => {
  return "";
};

export const mapDefaultValue = (
  value: FormProperty
): string | number | Date | boolean => {
  switch (value.PropertyType) {
    case "String":
      return value.DefaultValues.StringDefault ?? `'${""}'`;
    case "Number":
      return value.DefaultValues.NumberDefault ?? 0;
    case "Date":
      return value.DefaultValues.DateDefault ?? "1700-01-01T01:00:00.000";
    case "Boolean":
      return value.DefaultValues.BoolDefault ?? false;
    default:
      return "";
  }
};
