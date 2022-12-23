import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import MainPage from './MainPage/MainPage';
import Gallery from './Gallery/Gallery';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './Bar/TopBar';
import NotFound from './NotFound/NotFound';
import BusinessInformation from './BusinessInformation/BusinessInformation';
import OnlineConsulting from './OnlineConsulting/OnlineConsulting';
function App() {
  return (
    
    <div className='App'>
			<BrowserRouter>
        <div className='App_TopBar'></div>
				<TopBar />
        <div className='App_TopBar'></div>
				<Routes>
					<Route path="/" element={<MainPage />}></Route>
					<Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/business_information" element={<BusinessInformation />}></Route>
					<Route path="/online_consulting" element={<OnlineConsulting />}></Route>
          <Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
  );
}

export default App;
