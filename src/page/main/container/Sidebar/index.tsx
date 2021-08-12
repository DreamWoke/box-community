import React from "react";
import { EditOutlined, BulbOutlined } from "@ant-design/icons";
import "./index.less";
import { useHistory } from "react-router";

const Sidebar: React.FC = () => {
  const history = useHistory();
  return (
    <div className="sidebar">
      <div className="sidebar-operate">
        <div className="btn" onClick={() => history.push("/edit")}>
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
