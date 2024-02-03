import styled from "styled-components";
import { EditorProps } from "./type.editor";

export const StyleEditor = styled.div<EditorProps>`
  border-radius: 10px;
  height: 100%;
  .ql-toolbar {
    border-radius: 10px 10px 0 0;
    background-color: #fff;
  }
  .ql-container {
    min-height: ${({ minHeight }) => (minHeight ? `${minHeight}px` : "100%")};
    border-radius: 0 0 10px 10px;
    background-color: #f8f8fc;
  }
  .label {
    color: #101023;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
  }
`;
