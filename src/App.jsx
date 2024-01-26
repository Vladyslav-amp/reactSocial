import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { Table } from './components/TableBlock/TableBlock';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';

export const App = () => (
  <section className="App">
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/dashboard" element={<Header />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/customerslist" element={<Table />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/header" element={<Header />}></Route>
      </Routes>
    </BrowserRouter>
  </section>
);