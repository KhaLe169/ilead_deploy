import { Accordion } from '@mui/material';
import styled from 'styled-components';

export const StyleBoxList = styled.div`
  overflow: hidden;
  color: #4f4ea6;
  text-overflow: ellipsis;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  ul {
    list-style-position: inside;
    li {
      padding-left: 5px;
    }
  }
  .box-mock {
    border: 1px solid #eaeaf5;
    border-radius: 10px;
    padding: 12px;
    display: flex;
    gap:8px;
    .box-left{
      flex :1;xz
      display; flex;
      flex-direction: column;
      gap:8px;
      &_title{
        color:  #101023;
        font-family: Manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px;
      }
      &_content, &_link{
        color: #7471BC;
        font-variant-numeric: lining-nums tabular-nums stacked-fractions;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Manrope;
        font-size: 11px;
        font-style: normal;
        font-weight: 600;
        line-height: 16px; 
        letter-spacing: 0.2px
        width: fit-content;
      }
    }
    .box-right{
      display: flex;
      padding: 8px;
      align-items: center;
      gap: 10px;
      border-radius: 4px;
      border: 1px solid rgba(79, 78, 166, 0.10);
      background: #FFF;
    }
  }
`;

export const WrapperAccordion = styled(Accordion)`
  .MuiAccordionSummary-root:has(.Mui-expanded) {
    border-bottom: 1px solid #eaeaf5;
  }
  .MuiAccordionSummary-root {
    color: #4f4ea6;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
  }

  .MuiAccordionDetails-root {
    background-color: #f8f8fc;
    border-radius: 8px;
  }
`;

export const StyleSendCaMake = styled.div`
  border-radius: 16px;
  border: 1px solid rgba(79, 78, 166, 0.1);
  background: #fff;
  box-shadow:
    0px 32px 32px 0px rgba(79, 78, 166, 0.05),
    0px 0px 32px 0px rgba(79, 78, 166, 0.1);
  padding: 16px;
`;
