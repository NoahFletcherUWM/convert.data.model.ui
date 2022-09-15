// // import * as S from "../../styles/fileDropZone";
// // import {useDropzone} from 'react-dropzone'

// // const FileDropZone = ({}) => {
// //   return (
// //     <>
// //       {selectedFile && (
// //         <Box className="file-name-container">
// //           <S.SelectedFile>{selectedFile.path}</S.SelectedFile>
// //         </Box>
// //       )}

// //       {!selectedFile && (
// //         <Box>
// //           <S.Dropzone
// //             isDragAccept={isDragAccept}
// //             {...getRootProps({
// //               onClick: (e) => e.preventDefault(),
// //             })}
// //           >
// //             <Text>Drag `n` drop file here, or click to select file</Text>

// //             <input
// //               {...register("file")}
// //               type="file"
// //               name="file"
// //               {...getInputProps()}
// //             />
// //           </S.Dropzone>

// //           {errors?.file && (
// //             <S.ErrorMessage>{errors?.file.message}</S.ErrorMessage>
// //           )}
// //         </Box>
// //       )}
// //       {errors?.name && <S.ErrorMessage>{errors?.name.message}</S.ErrorMessage>}
// //     </>
// //   );
// // };

// // export default FileDropZone;
// import React from "react";
// import {
//   Box,
//   Typography,
//   Tab,
//   Tabs,
//   Stack,
//   FormControl,
//   FormLabel,
//   Select,
//   InputLabel,
//   MenuItem,
//   Divider,
//   Checkbox,
//   Button,
// } from "@mui/material";
// import PropTypes from "prop-types";
// import * as S from "../../styles/fileDropZone";
// import { FieldError, UseFormRegister } from "react-hook-form";

// interface FileDropZoneProps {
//   errors: FieldError | undefined;
//   register: UseFormRegister<{
//     InputType: number;
//     OutputType: number;
//     IncludeTests: boolean;
//   }>;
//   getRootProps;
//   getInputProps;
//   selectedFile;
//   isDragAccept;
// }
// const FileDropZone: React.FC<FileDropZoneProps> = ({
//   errors,
//   register,
//   getRootProps,
//   getInputProps,
//   selectedFile,
//   isDragAccept,
// }): FileDropZoneProps => {
//   return (
//     <>
//       {selectedFile && (
//         <Box className="file-name-container">
//           <S.SelectedFile>{selectedFile.path}</S.SelectedFile>
//         </Box>
//       )}

//       {!selectedFile && (
//         <Box>
//           <S.Dropzone
//             isDragAccept={isDragAccept}
//             {...getRootProps({
//               onClick: (e) => e.preventDefault(),
//             })}
//           >
//             <Typography>
//               Drag `n` drop file here, or click to select file
//             </Typography>

//             <input
//               {...register("file")}
//               type="file"
//               name="file"
//               {...getInputProps()}
//             />
//           </S.Dropzone>

//           {errors?.file && (
//             <S.ErrorMessage>{errors?.file.message}</S.ErrorMessage>
//           )}
//         </Box>
//       )}
//       {errors?.name && <S.ErrorMessage>{errors?.name.message}</S.ErrorMessage>}
//     </>
//   );
// };

// FileDropZone.propTypes = {
//   errors: PropTypes.object,
//   register: PropTypes.func,
//   getRootProps: PropTypes.func,
//   getInputProps: PropTypes.func,
//   selectedFile: PropTypes.any,
//   isDragAccept: PropTypes.bool,
// };

// export default FileDropZone;
export default {};
