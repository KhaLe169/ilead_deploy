import styled from 'styled-components';
import { ModalProps } from './type.modal';

export const ModalStyle = styled.div<ModalProps>`
  .out {
    animation: unfoldOut 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) both;
  }
  .in {
    animation: unfoldIn 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) both;
  }
  display: ${({ open }) => (open ? 'flex' : 'none')};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(79, 78, 166, 0.5);
  height: 100%;
  justify-content: center;
  z-index: 99;
  // align-items: center;
  .content {
    position: relative;
    z-index: 10;
    height: fit-content;
    background-color: white;
    padding: 32px;
    box-shadow:
      0px 4px 8px 0px rgba(79, 78, 166, 0.05),
      0px 0px 16px 0px rgba(79, 78, 166, 0.1);
    border-radius: 10px;
    width: ${({ width }) => (width ? `${width}px` : '94%')};
    visibility: hidden;
    @keyframes unfoldIn {
      0% {
        visibility: visible;
        transform: scaleY(0.005) scaleX(0);
      }
      50% {
        transform: scaleY(0.005) scaleX(1);
        visibility: visible;
      }
      100% {
        transform: scaleY(1) scaleX(1);
        visibility: visible;
      }
    }
    @keyframes unfoldOut {
      0% {
        visibility: visible;
        transform: scaleY(1) scaleX(1);
      }
      50% {
        visibility: visible;
        transform: scaleY(0.005) scaleX(1);
      }
      100% {
        visibility: hidden;
        transform: scaleY(0.005) scaleX(0);
      }
    }

    &-icon {
      position: absolute;
      right: 5px;
      top: 5px;
    }
    &-title {
      color: #101023;
      font-variant-numeric: lining-nums tabular-nums stacked-fractions;
      font-feature-settings:
        'clig' off,
        'liga' off;
      font-family: Manrope;
      font-size: 22px;
      font-style: normal;
      font-weight: 800;
      line-height: 24px;
      margin-bottom: 10px;
    }
  }
`;
