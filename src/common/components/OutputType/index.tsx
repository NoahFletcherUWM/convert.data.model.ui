import React from "react";
import { FormControl, FormLabel, Input, MenuItem, Select } from "@mui/material";
import DatePicker from "react-datepicker";
import { Controller, Control } from "react-hook-form";

//possibly pass in enum?
type Props = {
  dataType: string;
  control: Control;
};

const OutputType: React.FC<{}> = ({ children }) => {
  return (
    <FormControl id="defaultValueInput">
      <FormLabel>Default Value</FormLabel>
      {children}
    </FormControl>
  );
};

export default OutputType;
