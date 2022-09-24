import React, { useCallback, useState } from 'react';
// import { MdAdd } from 'react-icons/md';
// import './CommentInput.css';

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
      <div>
        작성자명
        <input
          classNames=""
          placeholder="이름"
          value={value.writer}
          onChange={onChangeName}
        />
      </div>
      <div>
        비밀번호
        <input
          classNames=""
          placeholder="비밀번호"
          value={value.password}
          onChange={onChangePassword}
        />{' '}
      </div>{' '}
      <div>
        <input
          placeholder="댓글"
          value={value.content}
          onChange={onChangeContent}
        />{' '}
      </div>
      <button type="submit">
        <div>하이</div>
      </button>
    </form>
  );
};

export default CommentInput;
