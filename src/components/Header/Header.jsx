import React from "react";
import "./Header.css";
import LogOut from "../LogOut/LogOut";
import { Space, Typography, Badge } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import LangIcon from "../LangIcon/LangIcon";
import { useTranslation } from "react-i18next";

const Header = () => {
const { t } = useTranslation();

  return (
    <div className="header">
      <image />
      <Typography.Title>{t('dashboard')}</Typography.Title>
      <Space>
        <LogOut/>
        <LangIcon/>
        <Badge count={8}>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={4}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
};

export default Header;
