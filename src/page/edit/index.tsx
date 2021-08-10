import { Row, Col } from "antd";
import React from "react";
import "./index.scss";

const Edit: React.FC = () => {
  return (
    <Row justify="center">
      <Col span={24}>
        <Row>
          <Col span={12} offset={6}>
            <div className="edit">888</div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Edit;
