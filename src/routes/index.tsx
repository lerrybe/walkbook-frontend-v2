import { BrowserRouter, Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

import { SignUpPage } from '~/pages/sign-up';

const ErrorPage = loadable(() => import('~/pages/error'));
const MainPage = loadable(() => import('~/pages/main'));
const SignInPage = loadable(() => import('~/pages/sign-in'));
const WalkloadCreatePage = loadable(() => import('~/pages/walkload-create'));

const EntryRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/create" element={<WalkloadCreatePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default EntryRoute;
