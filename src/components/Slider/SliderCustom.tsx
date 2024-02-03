/* eslint-disable jsx-a11y/anchor-is-valid */
import colors from 'theme/colors';
import { Box } from '@mui/material';
import React from 'react';
import { useRanger } from 'react-ranger';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
   font-weight: 300;
  }
`;

export const Track = styled('div')`
  display: inline-block;
  height: 8px;
  width: 90%;
  margin: 0 5%;
`;

export const Tick = styled('div')`
  :before {
    content: '';
    position: absolute;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    height: 5px;
    width: 2px;
    transform: translate(-50%, 0.7rem);
  }
`;

export const TickLabel = styled('div')`
  position: absolute;
  font-size: 0.6rem;
  color: rgba(0, 0, 0, 0.5);
  top: 100%;
  transform: translate(-50%, 1.2rem);
  white-space: nowrap;
`;

type SegmentProps = {
  color: string;
};

export const Segment = styled('div')`
  background: ${({ color }: SegmentProps) => color};
  height: 100%;
  border-radius: 8px;
`;

export const Handle = styled('div')`
  background: #fff;
  display: flex;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
  font-size: 0.7rem;
  font-size: 13px;
  white-space: nowrap;
  display: inline-flex;
  padding: 4px 8px;

  align-items: center;
  gap: 4px;
  box-shadow:
    0px 4px 8px 0px var(--black-65, rgba(79, 78, 166, 0.05)),
    0px 0px 16px 0px var(--black-610, rgba(79, 78, 166, 0.1));
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  transform: ${(props) => (props.active ? 'translateY(-100%) scale(1.3)' : 'translateY(0) scale(0.9)')};
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

type Props = {
  bgSegment: string;
  min: number;
  max: number;
  value: number;
};

export function SliderCustom({ bgSegment, min, max, value }: Props) {
  const [values, setValues] = React.useState([value]);

  const { getTrackProps, ticks, segments, handles } = useRanger({
    min: min,
    max: max,
    stepSize: 1,
    values,
    onChange: setValues,
  });

  return (
    <Box>
      <GlobalStyles />
      <Track {...getTrackProps()}>
        {/* {ticks.map(({ value, getTickProps }) => (
          <Tick {...getTickProps()}>
            <TickLabel>{value}</TickLabel>
          </Tick>
        ))} */}
        {segments.map(({ getSegmentProps }, i) => (
          <Segment {...getSegmentProps()} color={bgSegment} />
        ))}
        {handles.map(({ value, active, getHandleProps }) => (
          <button
            {...getHandleProps({
              style: {
                appearance: 'none',
                border: 'none',
                background: 'transparent',
                outline: 'none',
              },
            })}
          >
            <Handle active={active}>{value + `/${max}`}</Handle>
          </button>
        ))}
      </Track>

    </Box>
  );
}
