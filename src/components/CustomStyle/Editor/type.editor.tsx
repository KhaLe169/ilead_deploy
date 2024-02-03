import {
  BoundsStatic,
  DeltaStatic,
  RangeStatic,
  Sources,
  StringMap,
} from "quill";
import { CSSProperties, ReactNode } from "react";
import { QuillOptions } from "react-quill";

interface UnprivilegedEditor {
  getLength(): number;
  getText(index?: number, length?: number): string;
  getHTML(): string;
  getBounds(index: number, length?: number): BoundsStatic;
  getSelection(focus?: boolean): RangeStatic;
  getContents(index?: number, length?: number): DeltaStatic;
}
export interface EditorProps extends QuillOptions {
  modules?: StringMap;
  onChange?(
    value: string,
    delta: DeltaStatic,
    source: Sources,
    editor: UnprivilegedEditor
  ): void;
  defaultValue?: string;
  label?: string | ReactNode;
  style?: CSSProperties;
  styleEditor?: CSSProperties;
  minHeight?: number;
}
