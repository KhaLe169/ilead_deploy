import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { StyleEditor } from "./style.editor";
import { EditorProps } from "./type.editor";

export default function Editor({
  modules,
  onChange,
  defaultValue,
  label,
  style = {},
  styleEditor = {},
  minHeight,
  ...props
}: EditorProps) {
  const defaultModules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
    ...modules,
  };
  return (
    <StyleEditor minHeight={minHeight} style={style}>
      {label && <label className="label">{label}</label>}
      <ReactQuill
        modules={defaultModules}
        onChange={onChange}
        defaultValue={defaultValue}
        style={{ border: "none", height: "100%", ...styleEditor }}
        {...props}
      />
    </StyleEditor>
  );
}
