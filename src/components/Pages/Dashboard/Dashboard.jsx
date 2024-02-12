import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Statistic, Typography, Space, Card, Table } from "antd";
import React, { useState, useEffect } from "react";
import { getOrders } from "../../../API/API";
import { useTranslation } from "react-i18next";


const Dashboard = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <Space size={20} direction="vertical">
        <Typography.Title level={3}>{t('dashboard')}</Typography.Title>
        <Space direction="horizontal">
          <DashboardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: "green",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={t("orders")}
            value={172}
          />
          <DashboardCard
            icon={
              <ShoppingOutlined
                style={{
                  color: "purple",
                  backgroundColor: "rgba(0,255,255,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={t("inventory")}
            value={236}
          />
          <DashboardCard
            icon={
              <UserAddOutlined
                style={{
                  color: "red",
                  backgroundColor: "rgba(255,0,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={t("customers")}
            value={145}
          />
          <DashboardCard
            icon={
              <DollarCircleOutlined
                style={{
                  color: "blue",
                  backgroundColor: "rgba(0,0,255,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={t("revenue")}
            value={1450}
          />
        </Space>
        <Space>
          <RecentOrders />
        </Space>
      </Space>
    </div>
  );
};
function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space>
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 4));
      setLoading(false);
    });
  }, []);
  const { t } = useTranslation();

  return (
    <>
      <Typography.Text>{t("recent_orders")}</Typography.Text>
      <Table
        columns={[
          {
            title: "title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
}

export default Dashboard;
