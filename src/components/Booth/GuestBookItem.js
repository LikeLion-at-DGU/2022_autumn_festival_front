import React, { useState } from 'react';
import './GuestBookItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

export default function GuestBookItem({
  detailId,
  id,
  writer,
  content,
  createdDateTime,
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

  const onClickHandler = (e) => {
    window.location.href = `/booth/${detailId}/comment/${id}`;
  };
  return (
    <>
      <div className="comment_items_wrap">
        <div className="comment__name">{writer}</div>
        {/* 날짜 format 바꾼 후 출력해야함 */}
        <div className="comment__createdDateTime">
          {/*{Fomatting()} */} {createdDateTime}
        </div>

        <div className="faPencil" onClick={onClickHandler}>
          <FontAwesomeIcon icon={faPencil} />
          삭제
        </div>
        <br></br>
        <div className="comment__content">{content}</div>
      </div>
    </>
  );
}
