import { Routes, Route } from 'react-router-dom';
import './App.css';
import { GlobalStyle } from './styles/GlobalStyle';

/* Internal libraries */
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
