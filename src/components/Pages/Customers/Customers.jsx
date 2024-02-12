import Typography from "antd/es/typography/Typography";
import React from "react";
import { useTranslation } from "react-i18next";

const Customers = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography.Title level={3}>{t('customers')}</Typography.Title>
    </div>
  );
};

export default Customers;
