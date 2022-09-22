import React from 'react';
import TitleSection from './TitleSection';
import BoothMapSection from './BoothMapSection';
import TopBoothSection from './TopBoothSection';
import TimeTableSection from './TimeTable';
import NoticeMadeSection from './NoticeMadeSection';

export default function Home() {
  return (
    <>
      <TitleSection/>
      <BoothMapSection/>
      <TopBoothSection/>
      <TimeTableSection/>
      <NoticeMadeSection />
    </>
  );
}
