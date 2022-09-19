import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';

// 컴포넌트
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

/* Internal libraries */
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Booth from './pages/Booth/Booth';
import BoothDetail from './pages/Booth/BoothDetail';
import Notice from './pages/Notice/Notice';
import TimeTable from './pages/TimeTable/TimeTable';
import BoothSearch from './pages/Booth/BoothSearch';

// 레이아웃 네브바 푸터
const Layout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

const BoothLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />

      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="booth" element={<BoothLayout />}>
              <Route path="" element={<Booth />} />
              <Route path="Detail" element={<BoothDetail />} />
              <Route path="Search" element={<BoothSearch />} />
            </Route>
            <Route path="notice" element={<Notice />} />
            <Route path="timetable" element={<TimeTable />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
