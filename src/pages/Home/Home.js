import React, { useEffect, useRef, useState } from 'react';
import TitleSection from './TitleSection';
import BoothMapSection from './BoothMapSection';
import TopBoothSection from './TopBoothSection';
import TimeTableSection from './TimeTable';
import NoticeMadeSection from './NoticeMadeSection';
import styled from 'styled-components';

const Wrapper = styled.div`
`

export default function Home() {
  
  return (
    <>
      <Wrapper >
        <TitleSection/>
        <BoothMapSection/>
        <TopBoothSection/>
        <TimeTableSection/>
        <NoticeMadeSection/>
      </Wrapper>
    </>
  );
}
