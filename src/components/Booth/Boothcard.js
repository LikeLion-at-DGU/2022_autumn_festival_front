import React from 'react';
import './Boothcard.css';

//부스카드

export default function Boothcard({ title }) {
  return (
    <section className="row">
      <h2>{title}</h2>
    </section>
  );
}
