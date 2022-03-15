import React from "react";
import { Tabs } from "antd";
import PortfolioOverview from "../components/Portfolio/PortfolioOverview";
import DetailledPerformance from "../components/Detail/DetailledPerformance";

const { TabPane } = Tabs;

const UserProfile = () => {
  return (
    <div className="container-fluid mt-3">
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="Portfoio Overview" key="1">
          <PortfolioOverview />
        </TabPane>
        <TabPane tab="Detailed Performance" key="2">
          <DetailledPerformance />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default UserProfile;
