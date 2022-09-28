import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';
import Header from './components/Header';
import Main from './components/Main';
import styles from './css/main.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:keyword" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
