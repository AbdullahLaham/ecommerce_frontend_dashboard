import logo from './logo.svg';
import './App.css';
import {CssBaseline, ThemeProvider} from '@mui/material'
import { createTheme } from '@mui/material/styles';
// themeSettings if from theme file that we created
import { themeSettings } from 'theme';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from 'containers/Dashboard';
import Products from './containers/Products';
import Layout from 'containers/Layout';
import Customers from 'containers/Customers';
import Transactions from './containers/Transactions'
import Geography from 'containers/Geography';
import Overview from 'containers/Overview';
import Daily from 'containers/Daily';
import Monthly from 'containers/Monthly';
import Breakdown from 'containers/Breakdown';
import Admin from 'containers/Admin';
import Performance from 'containers/Performance';
import LoginPage from 'containers/LoginPage';
import SignupPage from 'containers/SignupPage';
function App() {
  const mode = useSelector(state => state.global.mode);
  // The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You can learn more about useCallback in the useCallback chapter.
  const theme = useMemo(() => 
    createTheme(themeSettings(mode))
  , [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <CssBaseline />
            <Routes>
              <Route element={<Layout />} >
                <Route path='/' element={<Navigate to='/dashboard' replace />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/products' element={<Products />} />
                <Route path='/customers' element={<Customers />} />
                <Route path='/transactions' element={<Transactions />} />
                <Route path='/geography' element={<Geography />} />
                <Route path='/overview' element={<Overview />} />
                <Route path='/daily' element={<Daily />} />
                <Route path='/monthly' element={<Monthly />} />
                <Route path='/breakdown' element={<Breakdown />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/performance' element={<Performance />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignupPage />} />
              </Route>
            </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
