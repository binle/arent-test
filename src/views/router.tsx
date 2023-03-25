import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTING } from '../constants';

import { AccountDto, IUserData } from '../definitions';
import { ComingSoonComponent } from './common-components';
import LayoutComponent from './common-components/layout.component';
import { AuthPage, ColumnPage, HomePage, MyRecordPage, NotFoundPage } from './pages';

// page which only access if user is authenticated
export const LoggedInRouter = ({
  renderComponent,
  definedAccountInfo,
}: {
  renderComponent: () => JSX.Element;
  definedAccountInfo?: AccountDto;
}) => {
  if (!definedAccountInfo?.id) {
    // user is not authenticated
    return <Navigate to="/auth" />;
  }
  return <Suspense>{renderComponent()}</Suspense>;
};

// page which only access if user is not authenticated(anonymous)
export const NotLoggedInRouter = ({
  renderComponent,
  definedAccountInfo,
}: {
  renderComponent: () => JSX.Element;
  definedAccountInfo?: AccountDto;
}) => {
  if (definedAccountInfo?.id) {
    // user is authenticated
    return <Navigate to="/" />;
  }
  return <Suspense>{renderComponent()}</Suspense>;
};

export const AppRouter = ({ accountInfo }: IUserData) => (
  <Routes>
    <Route element={<LayoutComponent />}>
      {/* login page required not authenticated */}
      <Route
        path={ROUTING.auth}
        element={<NotLoggedInRouter definedAccountInfo={accountInfo} renderComponent={() => <AuthPage />} />}
      />

      {/* my record page required authenticated */}
      <Route
        path={ROUTING.myRecord}
        element={<LoggedInRouter definedAccountInfo={accountInfo} renderComponent={() => <MyRecordPage />} />}
      />

      {/* column page */}
      <Route path={ROUTING.column} element={<ColumnPage />} />

      {/* home page */}
      <Route path={ROUTING.home} element={<HomePage />} />

      {/* coming soon routing */}
      <Route path={ROUTING.comingSoon} element={<ComingSoonComponent />} />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
