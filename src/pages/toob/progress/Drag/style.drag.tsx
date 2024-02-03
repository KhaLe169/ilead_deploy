import colors from "theme/colors";
import { Accordion, Badge, BadgeProps, Checkbox } from "@mui/material";
import styled from "styled-components";

export const StyleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .active {
    border: 1px solid red;
  }
  .header-card {
    display: flex;
    align-items: center;
    justify-content: space-between !important;
    &__check {
      display: flex;
      gap: 12px;
    }
  }
  .permission-user {
    display: flex;
    padding: 4px 12px;
    align-items: center;
    border-radius: 100px;
    border: 1px solid #eaeaf5;
    background: #fff;
    color: #4f4ea6;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
  }
  .main-card {
    display: flex;
    gap: 10px;
    &__content {
      flex: 1;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
      color: #4f4ea6;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    &__time {
      color: #d08d30;
      text-align: right;
      font-variant-numeric: lining-nums tabular-nums stacked-fractions;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Manrope;
      font-size: 11px;
      font-style: normal;
      font-weight: 600;
      line-height: 16px;
      letter-spacing: 0.2px;
      padding: 0 4px;
    }
  }
  .footer-card {
    display: flex;
    align-items: center;
    gap: 8px;
    &__name {
      overflow: hidden;
      color: #b5b3db;
      font-variant-numeric: lining-nums tabular-nums stacked-fractions;
      font-feature-settings: "clig" off, "liga" off;
      text-overflow: ellipsis;
      font-size: 10px;
      font-style: normal;
      font-weight: 600;
      line-height: 12px;
      letter-spacing: 0.4px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

export const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  "& .MuiBadge-badge": {
    right: -30,
    top: 10,
    padding: "0 4px",
    background: "#FF4635",
    color: "#FFF",
    fontSize: "13px",
    fontWeight: 600,
  },
}));

export const StyleAccordionSummary = styled(Accordion)`
  box-shadow: none !important;
  background: #f8f8fc;

  .MuiButtonBase-root {
    min-height: 0 !important;
  }
  .MuiAccordionSummary-content {
    margin: 10px 0;
  }
  .css-90h10p-MuiButtonBase-root-MuiAccordionSummary-root {
    display: flex !important;
    flex-direction: row-reverse !important;
    gap: 8px;
  }
  .title {
    color: #101023;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
  }
`;

export const CheckBoxStyle = styled(Checkbox)`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid #b5b3db;
  background: #fff;
`;

export const WrapperDragDrop = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  .drag-drop-context {
    width: 100%;
  }
  .col-drag {
    display: flex;
    padding: 4px;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 20px;
  }
  .item-drag {
    width: 100%;
    display: flex;
    padding: 12px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 16px;
    border: 1px solid rgba(79, 78, 166, 0.1);
    background: #fff;
    box-shadow: 0px 4px 8px 0px rgba(79, 78, 166, 0.05),
      0px 0px 16px 0px rgba(79, 78, 166, 0.1);
  }
  .drag-drop-context {
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: 100%;
  }
  .btn-new {
    display: flex;
    gap: 4px;
    align-items: center;
    color: #b5b3db;
    font-variant-numeric: lining-nums tabular-nums stacked-fractions;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
  }
`;

export const HeaderDrag = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  .header-tag {
    padding: 4px 8px;
    border-radius: 16px;
    color: #fff;
    text-align: center;
    font-variant-numeric: lining-nums tabular-nums stacked-fractions;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Manrope;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 16p;
  }
  .doing {
    background: #66aefa;
  }
  .todo {
    background: #b5b3db;
  }
  .submitted {
    background: #7259ee;
  }
  .done {
    background: #44d07d;
  }
`;
