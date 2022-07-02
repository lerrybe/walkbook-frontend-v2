import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ErrorPage from '../pages/error';
import MainPage from '../pages/main';

const EntryRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default EntryRoute;
