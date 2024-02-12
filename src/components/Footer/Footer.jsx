import React from "react";
import "./Footer.css";

import Typography from "antd/es/typography/Typography";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <Typography.Link href="#">0123456789</Typography.Link>
      <Typography.Link href="#">{t("privacy_policy")}</Typography.Link>
      <Typography.Link href="#">{t("terms_of_Use")}</Typography.Link>
    </div>
  );
};

export default Footer;
