import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

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

const CustomForm = () => {
  const onFinish = async (values) => {
    console.log(values.title);
    try {
      const response = await fetch("http://localhost:8000/api/categoryData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: values.title.title,
          description: values.description.description,
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

  return (
    <Form
      className="form"
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item name={["title", "title"]} label="Категорийн нэр">
        <Input />
      </Form.Item>
      <Form.Item
        name={["description", "description"]}
        label="Категорийн тайлбар"
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
