// routes
import { PATH_DASHBOARD } from "../../routes/paths";
// components
import SvgIconStyle from "../../components/SvgIconStyle";
import { Icon } from "@iconify/react";

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: "100%", height: "100%" }} />
);

const getIconfy = (name: string) => <Icon icon={`${name}`} width={"100%"} height={"100%"} />;
const ICONS = {
  user: getIcon("ic_user"),
  ecommerce: getIcon("ic_ecommerce"),
  analytics: getIcon("ic_analytics"),
  dashboard: getIcon("ic_dashboard"),
};

const ICONFY = {
  bar_chart: getIconfy("bx:bar-chart-square"),
  grid: getIconfy("mingcute:grid-line"),
  message: getIconfy("mynaui:chat-messages"),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: "general",
    items: [
      { title: "Objective", path: PATH_DASHBOARD.ilead.root, icon: ICONFY.bar_chart },
      { title: "Toob", path: PATH_DASHBOARD.toob.pageToob, icon: ICONFY.grid },
    ],
  },
];

export default sidebarConfig;
