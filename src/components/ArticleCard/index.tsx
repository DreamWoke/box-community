import React from "react";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import "./index.less";
import { Button } from "antd";

const ArticleCard: React.FC = () => {
  return (
    <div className="article-card">
      <div className="article-card-title">标题一标题一标题一</div>
      <div className="article-card-content"></div>
      <div className="article-card-footer">
        <Button>
          <CaretUpOutlined />
          赞同155
        </Button>
        <Button style={{ marginLeft: "5px" }}>
          <CaretDownOutlined />
        </Button>
      </div>
    </div>
  );
};

export default ArticleCard;
