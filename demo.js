import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, theme } from 'antd';
import React, { useState } from 'react';
const { Option } = Select;
const AdvancedSearchForm = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);
  const formStyle = {
    maxWidth: 'none',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      form={form}
      name="advanced_search"
      layout="inline"
      style={formStyle}
      onFinish={onFinish}
      labelCol={{ flex: '80px' }}
      labelWrap
      wrapperCol={{
        flex: 1,
        style: {
          maxWidth: 'calc(100% - 80px)',
        },
      }}
    >
      <Row>
        <Col sm={24} md={12} lg={8} xl={6}>
          <Form.Item name="name" label="用户名">
            <Input
              allowClear
              placeholder="placeholder"
              style={{ width: '100%' }}
            />
          </Form.Item>
        </Col>
        <Col sm={24} md={12} lg={8} xl={6}>
          <Form.Item name="city" label="城市">
            <Select defaultValue="上海" style={{ width: '100%' }}>
              <Option value="上海">上海</Option>
              <Option value="北京">北京</Option>
              <Option value="重庆">重庆</Option>
              <Option value="南京">南京</Option>
              <Option value="西藏">西藏</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col sm={24} md={12} lg={8} xl={6}>
          {/* <Form.Item name="city" label="城市">
          </Form.Item> */}
        </Col>

        <Col
          sm={24}
          md={12}
          lg={8}
          xl={6}
          style={{
            textAlign: 'right',
          }}
        >
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
          <a
            style={{
              fontSize: 12,
            }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} Collapse
          </a>
        </Col>
      </Row>
    </Form>
  );
};
const App = () => {
  const { token } = theme.useToken();
  const listStyle = {
    lineHeight: '200px',
    textAlign: 'center',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
  };
  return (
    <div>
      <AdvancedSearchForm />
      <div style={listStyle}>Search Result List</div>
    </div>
  );
};
export default App;
