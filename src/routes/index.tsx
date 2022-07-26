import { BrowserRouter, Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';
import WalkloadCreatePage from '~/pages/walkload-create';

const ErrorPage = loadable(() => import('~/pages/error'));
const MainPage = loadable(() => import('~/pages/main'));

const EntryRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create" element={<WalkloadCreatePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default EntryRoute;
