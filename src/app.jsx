import React from 'react';
import styles from './app.module.css';
import Header from "./components/header/header";
import DynamicRoutes from './DynamicRoutes';

const App =()=> {
  return (
    <>
    <Header/>
    <DynamicRoutes/>
    </>
  );
}

export default App;
