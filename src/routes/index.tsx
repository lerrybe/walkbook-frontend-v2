import { BrowserRouter, Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

const ErrorPage = loadable(() => import('~/pages/error'));
const MainPage = loadable(() => import('~/pages/main'));
const SignInPage = loadable(() => import('~/pages/sign-in'));
const SignUpPage = loadable(() => import('~/pages/sign-up'));
const WalkloadCreatePage = loadable(() => import('~/pages/walkload-create'));
const WalkloadDetailUpdate = loadable(() => import('~/pages/walkload-detail-update'));

const EntryRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/create" element={<WalkloadCreatePage />} />
        <Route path="/update" element={<WalkloadDetailUpdate />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default EntryRoute;
