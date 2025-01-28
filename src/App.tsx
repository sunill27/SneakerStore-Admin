import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import { Provider } from 'react-redux';
import store from './store/store';
import AddCategory from './pages/Form/AddCategory';
import SingleOrder from './pages/SingleOrder';
import io from 'socket.io-client';

export const socket = io('http://localhost:4000', {
  auth: {
    token: localStorage.getItem('token'),
  },
});

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Provider store={store}>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Sneaker Store AdminDashboard" />
              <DefaultLayout>
                <ECommerce />
              </DefaultLayout>
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar " />
              <DefaultLayout>
                <Calendar />
              </DefaultLayout>
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <DefaultLayout>
              <PageTitle title="Profile " />
              <Profile />
            </DefaultLayout>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <DefaultLayout>
              {' '}
              <>
                <PageTitle title="Form Elements " />
                <FormElements />
              </>
            </DefaultLayout>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout " />
              <DefaultLayout>
                <FormLayout />
              </DefaultLayout>
            </>
          }
        />
        <Route
          path="/forms/add-category"
          element={
            <>
              <PageTitle title="Form Layout " />
              <DefaultLayout>
                <AddCategory />
              </DefaultLayout>
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables " />
              <DefaultLayout>
                <Tables />
              </DefaultLayout>
            </>
          }
        />
        <Route
          path="/order/:id"
          element={
            <>
              <PageTitle title="Tables " />
              <DefaultLayout>
                <SingleOrder />
              </DefaultLayout>
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings " />
              <DefaultLayout>
                <Settings />
              </DefaultLayout>
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart " />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <PageTitle title="login" />
              <SignIn />
            </>
          }
        />
      </Routes>
    </Provider>
  );
}

export default App;
