import React from 'react';
import SideBar from './Components/SideBar';
import TopHeader1 from './Components/TopHeader1';
import Categories from './Components/Categories';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopHeader1 />
            <Categories />

          </div>

        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
