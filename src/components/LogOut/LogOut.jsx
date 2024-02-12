import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../auth/authSlice";
import { useNavigate } from "react-router-dom";
import "./LogOut.css";
import { useTranslation } from "react-i18next";

const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  const { t } = useTranslation();

  return (
    <div className="logout-container">
      <Button className="logout-button" onClick={handleLogout}>
        {t("logout")}
      </Button>
    </div>
  );
};

export default LogOut;
