import React from "react";
import ArticleCard from "@/components/ArticleCard";
import { Avatar, List } from "antd";
import "./index.less";

const ArticleList: React.FC = () => {
  const data = [
    { id: 1, content: "2334" },
    { id: 2, content: "23332334" },
  ];
  return (
    <div className="article-list">
      {data.map((item) => {
        return <ArticleCard key={item.id} />;
      })}
    </div>
  );
};

export default ArticleList;
