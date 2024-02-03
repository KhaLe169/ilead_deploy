import { Button } from 'components/CustomStyle/Button';
import Editor from 'components/CustomStyle/Editor';
import { StyleSendCaMake } from './style.toob';
import { useDispatch } from 'react-redux';
import { BACK_TABS_MAKE_REQUEST, CLOSE_MASSAGE_SUBMIT_REQUEST } from 'redux/toob/actionTypes';

export default function SendCaMake() {
  const dispatch = useDispatch();
  return (
    <StyleSendCaMake>
      <Editor placeholder="Tell the human resources what they should improve" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '16px',
        }}
      >
        <Button onClick={() => dispatch({ type: CLOSE_MASSAGE_SUBMIT_REQUEST })}>Cancel</Button>
        <Button type="primary" onClick={() => dispatch({ type: BACK_TABS_MAKE_REQUEST })}>
          Send and reset SA make
        </Button>
      </div>
    </StyleSendCaMake>
  );
}
