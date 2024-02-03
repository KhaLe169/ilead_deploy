import { Typography } from '@mui/material';

import { alpha, styled } from '@mui/material/styles';
import { useStyles } from './styles';

const ListCompanyStyle = styled('div')(({ theme }) => ({
  padding: '12px',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
  },
}));

interface IProps {
  data: any;
  handleSelect: (value: any) => void;
}

const ListCompany = ({ handleSelect, data }: IProps) => {
  const { active, id, fileName, code } = data;
  const styles = useStyles();

  return (
    <ListCompanyStyle
      style={{
        background: active ? '#F1EEFD' : 'none',
      }}
      onClick={() => handleSelect(id)}
    >
      <img className={styles.imgTag} src={fileName} alt="image" />
      <Typography
        style={{
          color: active ? '#7259EE' : '#4F4EA6',
        }}
        className={styles.textTag}
        color="primary.main"
      >
        {code}
      </Typography>
    </ListCompanyStyle>
  );
};

export default ListCompany;
