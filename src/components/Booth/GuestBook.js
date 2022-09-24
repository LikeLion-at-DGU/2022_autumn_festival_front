import React, { useState, useCallback } from 'react';
import GuestBookItem from './GuestBookItem';
import './GuestBook.css';

// 부스 방명록
// function GuestCommentwrite() {
//   const [writeinput, SetwriteInput] = useState({ write: '' });
//   const { write } = writeinput;
//   const onChangewrite = (e) => {
//     e.preventDefault();
//     SetwriteInput({
//       write: e.target.value,
//     });
//   };

//   return (
//     <>
//       <input
//         classwrite="input"
//         placeholder="이름을 입력하세요"
//         value={write}
//         onChange={(e) => onChangewrite(e)}
//       />
//     </>
//   );
// }

export default function GuestBook({
  key,
  id,
  writer,
  content,
  createdDateTime,
}) {
  console.log(key);
  return (
    <div className="guestbook__wrap">
      {/* <GuestCommentwrite /> */}
      <div>
        <GuestBookItem
          key={key}
          id={id}
          writer={writer}
          content={content}
          createdDateTime={createdDateTime}
        />
      </div>
    </div>
  );
}
