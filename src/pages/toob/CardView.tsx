import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material';
import { StyleBoxList, WrapperAccordion } from './style.toob';
import styled from 'styled-components';
import { Button } from '@mui/material';

const BoxList = () => {
  return (
    <StyleBoxList>
      <p>What I have achieved this week:</p>
      <ul>
        <li>Define the scope</li>
        <li>Define the scope</li>
        <li>Define the scope</li>
        <div className="box-mock">
          <div className="box-left">
            <p className="box-left_title">Mock screens</p>
            <p className="box-left_content">Mock screens</p>
            <p className="box-left_link">Mock screens</p>
          </div>
          <div className="box-right">
            <img src="/images/SocialIcon.svg" alt="logo" />
          </div>
        </div>
        <li>Define the scope</li>
      </ul>
    </StyleBoxList>
  );
};

export default function CardView() {
  return (
    <WrapperAccordion>
      <Accordion sx={{ border: '1px solid #EAEAF5' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          Define business criteria
        </AccordionSummary>
        <AccordionDetails>
          <BoxList />
        </AccordionDetails>
      </Accordion>
    </WrapperAccordion>
  );
}
