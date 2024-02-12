import React from "react";
import "./SideMenu.css";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  ShopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SideMenu = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="sideMenu">
      <Menu
        className="inSideMenu"
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
            label: t("dashboard"),
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: t("inventory"),
            icon: <ShopOutlined />,
            key: "/inventory",
          },
          {
            label: t("orders"),
            icon: <ShopOutlined />,
            key: "/orders",
          },
          {
            label: t("customers"),
            icon: <UserOutlined />,
            key: "/customers",
          },
        ]}
      ></Menu>
    </div>
  );
};

export default SideMenu;
