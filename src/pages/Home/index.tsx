import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Tab,
  Tabs,
  Stack,
  FormControl,
  FormLabel,
  Select,
  InputLabel,
  MenuItem,
  Divider,
  Checkbox,
  Button,
  Input,
  Paper,
  AppBar,
  Toolbar,
  Card,
} from "@mui/material";
import { FileWithPath, useDropzone } from "react-dropzone";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import DatePicker from "react-datepicker";
import * as S from "../../common/styles/fileDropZone";
import OutputType from "../../common/components/OutputType";
import "react-datepicker/dist/react-datepicker.css";
import createJavaScriptDataModel from "../../factories/fileFactories/jsFactory/output";
import { FormValues } from "../../types/FormValues";

const Home = () => {
  const defaultFormValues = {
    ObjectName: "",
    InputType: 2,
    OutputType: 1,
    IncludeTests: false,
    Properties: [
      {
        PropertyName: "",
        PropertyType: "String",
        DefaultValues: {
          StringDefault: "",
          NumberDefault: 0,
          DateDefault: null,
          BoolDefault: false,
        },
        DefaultValue: "",
      },
    ],
  };
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
    watch,
    reset,
    control,
  } = useForm<FormValues>({
    defaultValues: defaultFormValues,
    criteriaMode: "all",
    mode: "onChange",
  });

  const [selectedFile, setSelectedFile] = useState<FileWithPath | undefined>();
  const [selectedInputType, setSelectedInputType] = useState<number | string>(
    getValues("InputType")
  );

  const { fields, append, remove } = useFieldArray({
    name: "Properties",
    control,
  });
  const { acceptedFiles, getRootProps, getInputProps, isDragAccept } =
    useDropzone({
      onDrop: (files: FileWithPath[]) => {
        // setValue("DataModelFile", files);
      },
    });
  useEffect(() => {
    setSelectedFile(acceptedFiles[0]);
  }, [acceptedFiles]);

  // This is another component but concise example
  const fileList = (files: FileWithPath[]): React.ReactNode =>
    files.map((file) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));

  const handleFormSubmit = async (e: any) => {
    console.log(e);
    createJavaScriptDataModel(e);
    console.log(selectedFile);
  };

  return (
    <Paper sx={{ width: "100vw", height: "100vh" }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{
          width: "100vw",
          height: "100vh",
          placeContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          sx={{
            width: "55%",
            height: "80%",
            // backgroundColor: "#ffffff",
          }}
        >
          <form method="POST" onSubmit={handleSubmit(handleFormSubmit)}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              sx={{ height: "100%", width: "100%" }}
            >
              <FormControl id="ObjectName">
                <FormLabel>Object Name</FormLabel>
                <Input {...register(`ObjectName`)} />
              </FormControl>
              <Stack
                direction={{ xs: "row", sm: "column" }}
                sx={{ width: "70%" }}
              >
                {selectedInputType === 1 ? (
                  <Paper className="property-section">
                    {fields.map((item, index) => {
                      return (
                        <Paper className="property-name-input" key={item.id}>
                          <FormControl id="PropertyName">
                            <FormLabel>Property Name</FormLabel>
                            <Input
                              {...register(`Properties.${index}.PropertyName`)}
                            />
                          </FormControl>

                          <FormControl id="propertyType">
                            <FormLabel>Property Type</FormLabel>
                            <Controller
                              name={`Properties.${index}.PropertyType`}
                              control={control}
                              defaultValue={getValues(
                                `Properties.${index}.PropertyType`
                              )}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  {...register(
                                    `Properties.${index}.PropertyType`
                                  )}
                                  onChange={(data) => field.onChange(data)}
                                >
                                  <MenuItem value={"String"}>String</MenuItem>
                                  <MenuItem value={"Number"}>Number</MenuItem>
                                  <MenuItem value={"Date"}>Date/Time</MenuItem>
                                  <MenuItem value={"Boolean"}>Boolean</MenuItem>
                                </Select>
                              )}
                            />
                          </FormControl>

                          <OutputType>
                            {watch(`Properties.${index}.PropertyType`) ===
                              "String" && (
                              <Input
                                {...register(
                                  `Properties.${index}.DefaultValues.StringDefault`
                                )}
                              />
                            )}
                            {watch(`Properties.${index}.PropertyType`) ===
                              "Number" && (
                              <Input
                                type="number"
                                {...register(
                                  `Properties.${index}.DefaultValues.NumberDefault`
                                )}
                              />
                            )}

                            {watch(`Properties.${index}.PropertyType`) ===
                              "Date" && (
                              <Controller
                                name={`Properties.${index}.DefaultValues.DateDefault`}
                                control={control}
                                render={({ field }) => (
                                  <DatePicker
                                    placeholderText="Default is 01-01-1700"
                                    onChange={(date) => field.onChange(date)}
                                    selected={field.value}
                                    dateFormat="MMMM d, yyyy h:mm a"
                                  />
                                )}
                              />
                            )}
                            {watch(`Properties.${index}.PropertyType`) ===
                              "Boolean" && (
                              <Controller
                                name={`Properties.${index}.DefaultValues.BoolDefault`}
                                control={control}
                                // defaultValue={getValues(`InputType`)}
                                render={({ field }) => (
                                  <Select
                                    {...field}
                                    {...register(
                                      `Properties.${index}.DefaultValues.BoolDefault`
                                    )}
                                    onChange={(data) => field.onChange(data)}
                                  >
                                    <MenuItem value={"true"}>True</MenuItem>
                                    <MenuItem value={"false"}>False</MenuItem>
                                  </Select>
                                )}
                              />
                            )}
                          </OutputType>

                          <Paper className="remove-property-btn-box">
                            {index !== 0 && (
                              <Button
                                className="remove-button"
                                onClick={() => remove(index)}
                              >
                                Remove
                              </Button>
                            )}
                          </Paper>
                        </Paper>
                      );
                    })}

                    <Button
                      className="add-button"
                      onClick={() => append(defaultFormValues.Properties)}
                    >
                      Add
                    </Button>
                  </Paper>
                ) : (
                  <>
                    {selectedFile && (
                      <Paper className="file-name-container">
                        <S.SelectedFile>{selectedFile.path}</S.SelectedFile>
                      </Paper>
                    )}

                    {!selectedFile && (
                      <Paper>
                        <S.Dropzone
                          // isDragAccept={isDragAccept}
                          {...getRootProps({
                            onClick: (e) => e.preventDefault(),
                          })}
                        >
                          <Typography>
                            Drag `n` drop file here, or click to select file
                          </Typography>

                          <input
                            // {...register()}
                            type="file"
                            name="DataModelFile"
                            {...getInputProps()}
                          />
                        </S.Dropzone>
                      </Paper>
                    )}
                  </>
                )}
              </Stack>
              <Paper
                sx={{
                  width: "30%",
                  height: "100%",
                  backgroundColor: "#ffffff",
                }}
              >
                <Stack direction={{ xs: "row", sm: "column" }}>
                  <Paper className="title">
                    <Typography variant="h5">Settings</Typography>
                  </Paper>
                  <Divider />
                  <Paper className="inputOutputSelectors">
                    {/* 99% sure I dont need to use RHF controllers here but it also cant hurt sooo  */}
                    <Stack direction={{ xs: "column", sm: "row" }}>
                      <Paper sx={{ width: "50%" }}>
                        <Stack direction={{ xs: "row", sm: "column" }}>
                          <FormControl>
                            <FormLabel>Input</FormLabel>
                            <Controller
                              name={`InputType`}
                              control={control}
                              defaultValue={getValues(`InputType`)}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  {...register(`InputType`)}
                                  onChange={(data) => (
                                    field.onChange(data),
                                    setSelectedInputType(data.target.value)
                                  )}
                                >
                                  <MenuItem value={1}>Custom</MenuItem>
                                  <MenuItem value={2}>C#</MenuItem>
                                  <MenuItem value={3}>SQL</MenuItem>
                                </Select>
                              )}
                            />
                          </FormControl>
                        </Stack>
                      </Paper>
                      <Paper sx={{ width: "50%" }}>
                        <Stack direction={{ xs: "row", sm: "column" }}>
                          <FormControl>
                            <FormLabel>Output</FormLabel>
                            <Controller
                              name={`OutputType`}
                              control={control}
                              defaultValue={getValues(`OutputType`)}
                              render={({ field }) => (
                                <Select
                                  {...field}
                                  {...register(`OutputType`)}
                                  onChange={(data) => field.onChange(data)}
                                >
                                  <MenuItem value={1}>JS</MenuItem>
                                  <MenuItem value={2}>TS</MenuItem>
                                  <MenuItem value={3}>C#</MenuItem>
                                  {/* <MenuItem value={4}>All</MenuItem> */}
                                </Select>
                              )}
                            />
                          </FormControl>
                        </Stack>
                      </Paper>
                    </Stack>
                  </Paper>
                  <Paper className="includeTests">
                    <FormControl>
                      <FormLabel>Include Tests</FormLabel>
                      <Checkbox {...register("IncludeTests")} />
                    </FormControl>
                  </Paper>
                  <Paper className="SubmitArea">
                    <Button type="submit">Submit</Button>
                  </Paper>
                </Stack>
              </Paper>
            </Stack>
          </form>
        </Paper>
        <Paper
          className="output-container"
          sx={{
            width: "35%",
            height: "80%",
          }}
        >
          <Paper
            sx={{
              height: "10%",
            }}
          >
            <AppBar className="header-app-bar" position="static">
              <Toolbar>
                <Typography variant="h6" component="div">
                  Output
                </Typography>
              </Toolbar>
            </AppBar>
          </Paper>
          <Box
            sx={{
              width: "100%",
              height: "inherit",
              backgroundColor: "black",
            }}
            className="code-snippet-container"
          ></Box>
        </Paper>
      </Stack>
    </Paper>
  );
};

export default Home;
