import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../navbar/Navbar';

const App = (props) => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App;
