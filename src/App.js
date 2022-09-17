import { Routes, Route } from 'react-router-dom';
import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';

/* Internal libraries */
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Booth from './pages/Booth/Booth';
import Notice from './pages/Notice/Notice';
import TimeTable from './pages/TimeTable/TimeTable';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booth" element={<Booth />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/timetable" element={<TimeTable />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
