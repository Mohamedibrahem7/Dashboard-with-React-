import React from "react";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";

const Orders = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography.Title level={3}>{t("orders")}</Typography.Title>
    </div>
  );
};

export default Orders;
