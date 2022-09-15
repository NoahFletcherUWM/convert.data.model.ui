export type FormValues = {
  ObjectName: string;
  InputType: number;
  OutputType: number;
  IncludeTests: boolean;
  Properties: FormProperty[];
};

export type FormProperty = {
  PropertyName: string;
  PropertyType: string;
  DefaultValues: {
    StringDefault: string | null;
    NumberDefault: string | number | null;
    DateDefault: Date | null;
    BoolDefault: boolean | string | null;
  };
  DefaultValue: string | number | Date | boolean;
};
