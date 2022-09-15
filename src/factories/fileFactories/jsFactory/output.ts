import React from "react";
import { FormValues } from "../../../types/FormValues";
import { createDataModelClass, createDataModelController } from "./utils";

const createJavaScriptDataModel = (input: FormValues): null => {
  const dataModel = createDataModelClass(input);
  console.log(createDataModelController(input));

  return null;
};

export default createJavaScriptDataModel;
