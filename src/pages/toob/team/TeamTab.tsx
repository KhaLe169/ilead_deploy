import { BoxFlex } from 'components/Box/BoxFlex'
import { TeamMainLayout } from 'layouts/toob/ToobLayout'
import { Box, Divider, Tab, Tabs, Typography } from '@mui/material'
import styled from 'styled-components'
import MemberComponent from './MemberComponent'
import MemberList from './MemberList'
import ToobChat from './ToobChat'

type Props = {}

const BoxArchive = styled(Box)`
display: flex;
flex-direction: column;
align-self: stretch;
`;

const TeamTab = (props: Props) => {
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,

    };
  }

  const TabsStyled = styled(Tabs)`
    display: "flex";
    padding: "2px 2px";
    background-color: #F1EEFD;
    border-radius: 100px;
    `;

  const TabItemStyled = styled(Tab)`
    display: "flex";
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    &.Mui-selected  {
      width: 'max-content';
      background: #fff;
      box-shadow: 0px 0px 0px 1px #D5D5EB, 0px 2px 4px 0px var(--black-65, rgba(79, 78, 166, 0.05)), 0px 8px 8px -4px var(--black-65, rgba(79, 78, 166, 0.05));
    }
`;


  return (
    <TeamMainLayout>
      <Box>
        <MemberComponent />
        <Divider />

        <BoxFlex justifyContent="space-around" padding="8px" height="52px">
          <Typography fontSize="14px">
            Name
          </Typography>
          <Typography fontSize="14px">
            SAs completed
          </Typography>
        </BoxFlex>
        <Divider />
        <MemberList />
      </Box>
      <ToobChat />
      <BoxArchive>
        <BoxFlex padding="28px 24px" justifyContent="center" alignItems="center" alignSelf="stretch">
          <TabsStyled
            value={0}
            aria-label="basic tabs example"
            indicatorColor="primary"
            TabIndicatorProps={{
              style: { display: "none" },
            }}

          >
            <TabItemStyled label="Media" {...a11yProps(0)} />
            <TabItemStyled label="Files" {...a11yProps(1)} />
            <TabItemStyled label="Links" {...a11yProps(2)} />
          </TabsStyled>
        </BoxFlex>
        <Divider />

      </BoxArchive>
    </TeamMainLayout>
  )
}

export default TeamTab