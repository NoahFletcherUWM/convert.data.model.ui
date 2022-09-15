import styled from "styled-components";

export const Dropzone = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  color: #707070;
  border: 1px dashed #3e3e3e;
  font-size: 14px;
  cursor: pointer;

  input {
    display: none;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  color: red;
`;

export const SelectedFile = styled.span`
  font-size: 1rem;
`;
