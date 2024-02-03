import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useStyles } from "./styles";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function FilterTabs() {
  const [value, setValue] = React.useState(0);
  const styles = useStyles();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="basic tabs example"
      indicatorColor="primary"
      TabIndicatorProps={{
        style: { display: "none" },
      }}
      className={styles.container}
    >
      <Tab className={styles.tabItem} label="All" {...a11yProps(1)} />
      <Tab className={styles.tabItem} label="Overdue" {...a11yProps(2)} />
      <Tab className={styles.tabItem} label="Done" {...a11yProps(3)} />
    </Tabs>
  );
}
