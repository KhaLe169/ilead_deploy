import { FormControl, MenuItem, Select as SelectMui } from "@mui/material";
import { SelectStyle } from "./style.select";
import { SelectProps } from "./type.select";

export default function Select({
  options = [],
  label,
  onChange,
  value,
}: SelectProps) {
  return (
    <SelectStyle>
      <label className="label">{label}</label>
      <FormControl
        sx={{ width: "100%", borderStyle: "rgba(79, 78, 166, 0.10)" }}
      >
        <SelectMui
          onChange={onChange}
          value={value}
          size="small"
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          {options.map((item) => {
            return (
              <MenuItem value={item.value} key={item.value}>
                {item.label}
              </MenuItem>
            );
          })}
        </SelectMui>
      </FormControl>
    </SelectStyle>
  );
}
