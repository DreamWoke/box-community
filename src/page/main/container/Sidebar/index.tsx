import React from "react";
import { EditOutlined, BulbOutlined } from "@ant-design/icons";
import "./index.scss";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-operate">
        <div className="btn">
          <EditOutlined className="btn-icon" />
          <div>发布文章</div>
        </div>
        <div className="btn">
          <BulbOutlined className="btn-icon" />
          <div>发布动态</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
