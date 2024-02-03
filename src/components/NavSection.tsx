import { useState } from "react";
import { NavLink as RouterLink, matchPath, useLocation } from "react-router-dom";
// material
import { alpha, useTheme, styled } from "@mui/material";
import {
  Box,
  List,
  ListItem,
  Collapse,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  BoxProps,
} from "@mui/material";
import { Icon } from "@iconify/react";
import arrowIosForwardFill from "@iconify/icons-eva/arrow-ios-forward-fill";
import arrowIosDownwardFill from "@iconify/icons-eva/arrow-ios-downward-fill";
import { Padding } from "@mui/icons-material";

// theme

// ----------------------------------------------------------------------
function pxToRem(value: number) {
  return `${value / 16}rem`;
}

const ListSubheaderStyle = styled((props: any) => (
  <ListSubheader disableSticky disableGutters {...props} />
))(({ theme }) => ({
  fontWeight: 700,
  lineHeight: 1.5,
  fontSize: pxToRem(12),
  letterSpacing: 1.1,
  textTransform: "uppercase",
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
  paddingLeft: theme.spacing(5),
  color: theme.palette.text.primary,
}));

const ListItemStyle = styled(ListItem)(({ theme }) => ({
  lineHeight: 22 / 14,
  fontSize: pxToRem(14),
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  "&:before": {
    top: 0,
    right: 0,
    width: 3,
    bottom: 0,
    content: "''",
    display: "none",
    position: "absolute",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: theme.palette.primary.main,
  },
}));

const ListItemIconStyle = styled(ListItemIcon)(({ theme }) => ({
  width: 30,
  height: 30,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  color: theme.palette.primary.dark,
}));

// ----------------------------------------------------------------------

type NavItemProps = {
  title: string;
  path: string;
  icon?: JSX.Element;
  info?: JSX.Element;
  children?: {
    title: string;
    path: string;
  }[];
};

function NavItem({ item }: { item: NavItemProps }) {
  const theme = useTheme();
  const { pathname } = useLocation();
  const { title, path, icon, info, children } = item;
  const isActiveRoot = path ? !!matchPath({ path, end: false }, pathname) : false;
  const [open, setOpen] = useState(isActiveRoot);
  const handleOpen = () => {
    setOpen(!open);
  };

  const activeRootStyle = {
    color: "primary.lighter",
    fontWeight: "fontWeightMedium",
    bgcolor: alpha(theme.palette.primary.lighter, theme.palette.action.selectedOpacity),
    "&:before": {
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      width: "4px",
      bottom: 0,
      paddingTop: "1px",
      paddingBottom: "1px",
      borderRadius: "0px 4px 4px 0px",
      backgroundColor: theme.palette.primary.lighter,
    },
  };
  const activeIcon = {
    color: "primary.lighter",
    fontWeight: "fontWeightMedium",
  };

  const activeSubStyle = {
    color: "text.primary",
    fontWeight: "fontWeightMedium",
  };

  if (children) {
    return (
      <>
        <ListItemStyle
          // button
          disableGutters
          onClick={handleOpen}
          sx={{
            ...(isActiveRoot && activeRootStyle),
            padding: 0,
          }}
        >
          <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
          <ListItemText disableTypography primary={title} />
          {info && info}
          <Box
            component={Icon}
            icon={open ? arrowIosForwardFill : arrowIosDownwardFill}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((item) => {
              const { title, path } = item;
              const isActiveSub = path ? !!matchPath({ path, end: false }, pathname) : false;

              return (
                <ListItemStyle
                  // button
                  disableGutters
                  key={title}
                  // @ts-ignore
                  component={RouterLink}
                  to={path}
                  sx={{
                    ...(isActiveSub && activeSubStyle),
                  }}
                >
                  <ListItemIconStyle>
                    <Box
                      component="span"
                      sx={{
                        width: 4,
                        height: 4,
                        display: "flex",
                        borderRadius: "50%",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "text.disabled",
                        transition: (theme) => theme.transitions.create("transform"),
                        ...(isActiveSub && {
                          transform: "scale(2)",
                          bgcolor: "primary.main",
                        }),
                      }}
                    />
                  </ListItemIconStyle>
                  <ListItemText disableTypography primary={title} />
                </ListItemStyle>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }
  return (
    <ListItemStyle
      // button
      disableGutters
      // @ts-ignore
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle),
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ListItemIconStyle
        sx={{
          ...(isActiveRoot && activeIcon),
          marginLeft: "15px",
        }}
      >
        {icon && icon}
      </ListItemIconStyle>
      {/* <ListItemText disableTypography primary={item.title} /> */}
      {info && info}
    </ListItemStyle>
  );
}

interface NavSectionProps extends BoxProps {
  navConfig: {
    subheader: string;
    items: NavItemProps[];
  }[];
}

export default function NavSection({ navConfig, ...other }: NavSectionProps) {
  return (
    <Box {...other}>
      {navConfig.map((list) => {
        const { subheader, items } = list;
        return (
          <List key={subheader} disablePadding>
            {items.map((item: NavItemProps) => (
              <NavItem key={item.title} item={item} />
            ))}
          </List>
        );
      })}
    </Box>
  );
}
