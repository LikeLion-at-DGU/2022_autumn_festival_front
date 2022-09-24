import React, { useCallback, useState } from 'react';
// import { MdAdd } from 'react-icons/md';
// import './CommentInput.css';

const style = {
  wrap: {
    padding: '10px',
    height: '20px',
  },

  wrap__content: {
    padding: '10px',
    height: '20px',
    //임의
    paddingBottom: '30px',
  },

  font: {
    fontFamily: 'GmarketSansLight',
    fontSize: '12px',
  },

  box__name: {
    padding: '5px',
    float: 'left',
  },
  box__pw: {
    padding: '5px',

    float: 'right',
  },

  inputbox: {
    borderRadius: '5px',
    background: 'transparent',
    border: '0.5px solid #dadada',
    width: '85px',
    marginLeft: '5px',
    position: 'relative',
  },
  contentbox: {
    fontFamily: 'GmarketSansLight',
    fontSize: '12px',

    borderRadius: '20px',
    background: 'transparent',
    border: ' 1px solid #dadada',
    boxShadow: '0 0 2px white',
    width: '90%',
    height: '20px',
    paddingLeft: '10px',
  },
  button: {
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    fontSize: '20px',
    // 임의
  },
};

const CommentInput = ({ onInsert }) => {
  const [value, setValue] = useState({
    writer: '',
    password: '',
    content: '',
  });

  const onChangeName = useCallback(
    (e) => {
      setValue({
        writer: e.target.value,
        password: value.password,
        content: value.content,
      });
    },
    [value],
  );

  const onChangePassword = useCallback(
    (e) => {
      setValue({
        writer: value.writer,
        password: e.target.value,
        content: value.content,
      });
    },
    [value],
  );

  const onChangeContent = useCallback(
    (e) => {
      setValue({
        writer: value.writer,
        password: value.password,
        content: e.target.value,
      });
    },
    [value],
  );

  const onSubmit = useCallback(
    (e) => {
      onInsert(value.writer, value.password, value.content);
      setValue({
        writer: '',
        password: '',
        content: '',
      });

      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="CommentInsert" onSubmit={onSubmit}>
      <div style={style.wrap}>
        <div style={style.box__name}>
          <div style={style.font}>
            작성자명
            <input
              style={style.inputbox}
              value={value.writer}
              onChange={onChangeName}
            />
          </div>
        </div>
        <div style={style.box__pw}>
          <div style={style.font}>
            비밀번호
            <input
              style={style.inputbox}
              value={value.password}
              onChange={onChangePassword}
            />
          </div>
        </div>
      </div>
      <div style={style.wrap__content}>
        <input
          style={style.contentbox}
          placeholder="후기를 남겨보세요."
          value={value.content}
          onChange={onChangeContent}
        />
        <button type="submit" style={style.button}>
          ↓
        </button>
      </div>
    </form>
  );
};

export default CommentInput;
