import React from "react";
import { Outlet } from "react-router-dom";
import { Space } from "antd";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import Footer from "../Footer/Footer";
function DashboardLayout() {
  return (
    <div>
      <Header />
      <Space className="SideMenuAndPageContent">
        <SideMenu />
        <Outlet />
      </Space>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
