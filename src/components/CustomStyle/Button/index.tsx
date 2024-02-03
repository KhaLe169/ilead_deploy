import { ButtonStyle, IconButtonStyle } from "./style.button";
import { Props } from "./type.button";

export function Button({ children, type, shape, icon, ...props }: Props) {
  if (shape === "circle") {
    return (
      <IconButtonStyle className="content-icon border border-solid border-red-400">
        {children || icon}
      </IconButtonStyle>
    );
  }
  return (
    <ButtonStyle type={type} {...props}>
      {children}
    </ButtonStyle>
  );
}
