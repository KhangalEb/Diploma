import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import { Select, Space } from "antd";
import { useState, useEffect } from "react";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const { TextArea } = Input;
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const Subjectsinfo = () => {
  const [categories, setCategories] = useState([]);
  const [dataa, setData] = useState([]);

  const fetchData = async () => {
    return fetch("http://localhost:8000/api/categoryData")
      .then((response) => response.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(categories);
  const onFinish = async (values) => {
    console.log(values);

    try {
      const response = await fetch("http://localhost:8000/api/subjectData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: values.title.title,
          description: values.description.description,
          range: values.range.range,
          category: categories,
        }),
      });
      const data = await response.json();
      if (data.status === "ok") {
        alert("added successfully");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleclick = (e) => {
    setCategories(e);
  };

  return (
    <Form
      className="form"
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item name={["title", "title"]} label="Хичээлийн нэр">
        <Input />
      </Form.Item>
      <Form.Item
        name={["description", "description"]}
        label="Хичээлийн тайлбар"
      >
        <TextArea rows={6} />
      </Form.Item>
      <Form.Item
        name={["range", "range"]}
        label="Хамаарах анги"
        rules={[
          {
            type: "number",
            min: 0,
            max: 12,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="категори"
        rules={[
          {
            type: "text",
          },
        ]}
      >
        <Space
          style={{
            width: "100%",
          }}
          direction="vertical"
        >
          <Select
            allowClear
            showSearch
            style={{
              width: 200,
            }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
              option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            onChange={(value) => {
              handleclick(value);
            }}
          >
            {dataa.map((p) => (
              <Option value={p.title}>{p.title}</Option>
            ))}
          </Select>
        </Space>
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Subjectsinfo;
