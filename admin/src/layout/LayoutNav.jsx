import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Topbar from '../components/topbar/Topbar'
import Home from '../pages/home/Home';
import Manager from '../pages/manager/Manager';

export default function LayoutNav() {
  return (
    <>
    <Topbar/>
    <div className="app-interface">
    <Navbar/>
    <Home/>
    </div>
    <Outlet/>
    </>
  );
};
