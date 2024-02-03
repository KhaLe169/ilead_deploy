import TabsMCV from "components/TabsMCV/TabsMCV";
import { Box, BoxProps } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";

import { Button } from "components/CustomStyle/Button";
import { CLOSE_CREATE_SA_REQUEST, CLOSE_MVC_SCREEN_REQUEST } from "redux/toob/actionTypes";
import { ClearIcon } from "@mui/x-date-pickers";
import { useDispatch } from "react-redux";
import CheckScreen from "./CheckScreen";
import MakeScreen from "./MakeScreen";
import ValidateScreen from "./ValidateScreen";
import { RootState } from "redux/store";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { screenValue } from "types/toob.interface";

type Props = {
  visible: boolean;
};

interface BoxCreateSAProps extends BoxProps {
  visible: boolean;
}
const BoxCreateSA = styled((props: BoxCreateSAProps) => {
  return <Box {...props} />;
})(({ visible }) => ({
  borderRadius: '12px',
  boxShadow:
    '0px 32px 32px 0px var(--black-65, rgba(79, 78, 166, 0.05)), 0px 0px 32px 0px var(--black-610, rgba(79, 78, 166, 0.1))',
  display: visible ? 'flex' : 'none',
  flexDirection: 'column',
  gap: '24px',
  padding: '24px',
  position: 'relative',
  width: '20%',
  backgroundColor: '#fff',
  alignSelf: 'stretch',
}));


export default function MCVScreen({ visible }: Props) {
  const dispatch = useDispatch();
  const { dataSA } = useSelector((state: RootState) => state.toob);
  const [value, setValue] = React.useState<screenValue>('MAKE');

  const handleCloseModal = () => {
    dispatch({
      type: CLOSE_MVC_SCREEN_REQUEST,
    });
  };



  useEffect(() => {
    if (!isEmpty(dataSA?.actViews)) {
      const roleSA = dataSA?.actViews?.[0]?.role;

      if (roleSA?.includes('A')) setValue('MAKE');
      else if (roleSA?.includes('X')) setValue('CHECK');
      else if (roleSA?.includes('Y')) setValue('VALIDATE');
      else {
        handleCloseModal;
      }
    }
  }, [dataSA]);

  return (
    <BoxCreateSA visible={visible} >
      <Box onClick={handleCloseModal}>
        <Button shape="circle" >
          <ClearIcon />
        </Button>
      </Box>

      <TabsMCV value={value} setValue={(value) => setValue(value)} roleSA={dataSA?.actViews?.[0]?.role} />
      {{
        'MAKE': <MakeScreen />,
        'CHECK': <CheckScreen />,
        'VALIDATE': <ValidateScreen />,
      }[value]}
    </BoxCreateSA>
  );
}

