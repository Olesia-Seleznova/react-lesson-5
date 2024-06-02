import { Heading, Header } from 'components';
import Home from 'pages/Home';
import Rates from 'pages/Rates';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getUserInfo } from './service';
import { useDispatch } from 'react-redux';
import { getBaseCurrency } from 'components/reduxState/currencyOps';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const success = async pos => {
      dispatch(getBaseCurrency(pos.coords));
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rates" element={<Rates />}></Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
  // <Heading title="Just do it!" />;
};
