import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Topbar from '../components/topbar/Topbar'
import Manager from '../pages/manager/Manager';

export default function LayoutFiles() {
  return (
    <>
    <Topbar/>
    <div className="app-interface">
    <Navbar/>
    <Manager/>
    </div>
    <Outlet/>
    </>
  );
};