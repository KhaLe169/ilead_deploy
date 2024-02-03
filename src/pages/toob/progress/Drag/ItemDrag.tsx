import Avatar from '@mui/material/Avatar';
import { CheckBoxStyle, StyleWrapper } from './style.drag';
import { useDragContext } from './DragContext';
import { cloneDeep } from 'lodash';

interface PropsType {
  permissionsUser: string;
  textContent: string;
  time: string;
  name: string;
}

export default function ItemDrag({ permissionsUser, textContent, time, name }: PropsType) {
  const { setCheckBox, dragItem } = useDragContext();
  return (
    <StyleWrapper>
      <div className="header-card">
        <div className="header-card__check">
          <CheckBoxStyle
            onChange={(e) => {
              const checked = e.target.checked;
              setCheckBox((prevData: { id: string }[]) => {
                const dataClone = cloneDeep(prevData);
                if (checked) {
                  return [...dataClone, dragItem];
                }
                const deleteItem = dataClone.filter((item) => item.id !== dragItem.id);
                return deleteItem;
              });
            }}
          />
          <img src="/images/marker.svg" alt="logo" />
        </div>
        <div className="permission-user">{permissionsUser}</div>
      </div>
      <div className="main-card">
        <span className="main-card__content">{textContent}</span>
        <span className="main-card__time">{time}</span>
      </div>
      <div className="footer-card">
        <Avatar
          sx={{ width: 20, height: 20, border: '1px solid #EAEAF5' }}
          alt="Remy Sharp"
          // children={`${name.split(" ")[0][0]}${name.split(" ")[1][0]}`}
        />
        <span className="footer-card__name">{name}</span>
      </div>
    </StyleWrapper>
  );
}
