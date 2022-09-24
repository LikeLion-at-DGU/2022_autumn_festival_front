import React, { useState } from 'react';
import './GuestBookItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

export default function GuestBookItem({
  key,
  id,
  writer,
  content,
  createdDateTime,
  handleClick,
}) {
  //   function Fomatting() {
  //     var str = item.createdDateTime;
  //     if (typeof data == 'number') {
  //       str = str + '';
  //     }
  //     var n = str
  //       //   .replace(/[^\d]+/g, '')
  //       //   .replace(/(\d)(?=(?:\d{4})+(?!\d))/g, '$1.');
  //       .replace(/-/g, '.');
  //     return n;
  //   }

  return (
    <>
      <div className="comment_items_wrap">
        <div className="comment__name">{writer}</div>
        {/* 날짜 format 바꾼 후 출력해야함 */}
        <div className="comment__createdDateTime">
          {/*{Fomatting()} */} {createdDateTime}
        </div>
        <button className="faPencil" onClick={() => handleClick(id)}>
          <FontAwesomeIcon icon={faPencil} />
          삭제
        </button>
        <br></br>
        <div className="comment__content">{content}</div>
      </div>
    </>
  );
}
