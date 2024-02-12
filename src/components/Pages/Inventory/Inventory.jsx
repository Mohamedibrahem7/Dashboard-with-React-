import React from "react";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";

const Inventory = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography.Title level={3}>{t("inventory")}</Typography.Title>
    </div>
  );
};

export default Inventory;
