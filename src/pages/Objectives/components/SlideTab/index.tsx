import { Card } from '@mui/material';
import { useStyles } from './styles';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import { useTheme } from '@mui/material';
import ChooseObjective from './ChooseObjective';
import { useDispatch } from 'react-redux';
import { closeObjectivesRequest } from 'redux/objectives/action';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import NewObjective from './NewObjective';

interface IProps {
  title: string;
}
export default function SildeObjectives({ title }: IProps) {
  const styles = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const isOpenObjectives = useSelector((state: RootState) => state.objectives.isOpenObjectives);

  const handleClose = () => {
    dispatch(closeObjectivesRequest());
  };

  return (
    <Card
      sx={{
        width: '33%',
        marginLeft: '24px',
        paddingTop: '40px',
        height: '100%',
        //animation scroll
        position: isOpenObjectives ? 'initial' : 'absolute',
        left: isOpenObjectives ? 'initial' : '-9999px',
        transform: isOpenObjectives ? 'translateX(0%)' : 'translateX(100%)',
        transition: 'all 500ms cubic-bezier(0.4, 0.0, 0.2, 1)',
      }}
    >
      <div className={styles.closeButton}>
        <ButtonIcon
          onClick={handleClose}
          icon="material-symbols-light:close"
          styled={{
            backgroundColor: theme.palette.common.white,
            padding: '10px',
            minWidth: 'max-content',
            fontSize: '22px',
          }}
        />
      </div>
      {isOpenObjectives == 'start' ? <ChooseObjective /> : <NewObjective />}
    </Card>
  );
}
