import { Box } from "@mui/material"
import { Icon } from '@iconify-icon/react';
import colors from "theme/colors";

type Props = {
  onClick: () => void;
  icon: string;
}

export const IconCustom = ({ onClick, icon }: Props) => {
  return (
    <Box
      border="1px solid #EAEAF5"
      borderRadius={100}
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#fff"
      padding="8px"
      marginLeft="10px"
      onClick={onClick}
    >
      <Icon icon={icon} width="20px" height="20px" color={colors.primary} />
    </Box>
  )
}
