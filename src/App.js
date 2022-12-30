import logo from './logo.svg';
import './App.css';
import {CssBaseline, ThemeProvider} from '@mui/material'
import { createTheme } from '@mui/material/styles';
// themeSettings if from theme file that we created
import { themeSettings } from 'theme';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from 'components/Dashboard';
import Products from './containers/Products';
import Layout from 'containers/Layout';
import Customers from 'containers/Customers';
import Transactions from './containers/Transactions'
import Geography from 'containers/Geography';
import Overview from 'containers/Overview';
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
                <Route path='/geography' element={<Geography />} />Overview
                <Route path='/overview' element={<Overview />} />
              </Route>
            </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
