import { Avatar, Box, Card, Divider, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const CustomSpan = styled.span`
  width: 60%; /* Set a fixed width for the container */
  white-space: nowrap; /* Prevent text from wrapping to the next line */
  overflow: hidden; /* Hide any overflowing content */
  text-overflow: ellipsis;
`;
function FeedbackCpn() {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={'0.5rem'}>
      {Array.from(Array(4).keys()).map((item) => (
        <>
          <Divider />
          <Box display={'flex'} gap={1} alignItems={'start'}>
            <Avatar
              alt="avatar"
              src="https://material-ui.com/static/images/avatar/1.jpg"
              sx={{ width: '28px', height: '28px' }}
            />
            <Card>
              <div style={{ padding: '5px' }}>
                <Typography fontSize="12px" fontWeight="400" color={'#B5B3DB'}>
                  <Box display={'flex'} justifyContent={'space-between'}>
                    <CustomSpan>Nguyen Pham Hong (Brandcare-IPA-Group)</CustomSpan>
                    <span>aproved</span>
                  </Box>
                </Typography>
                <Typography fontSize="12px" fontWeight="400" color={'#4F4EA6'}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aperiam repellat
                </Typography>
              </div>
            </Card>
            <Typography fontSize="12px" fontWeight="400" color={'#4F4EA6'}>
              19:31
            </Typography>
          </Box>
        </>
      ))}
    </Box>
  );
}

export default FeedbackCpn;
