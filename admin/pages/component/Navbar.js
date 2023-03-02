import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
const { Header, Sider, Content } = Layout;
import UsersTable from "./UsersTable";
import Table from "./TableSubject";
import CustomForm from "./CustomForm";
import { useRouter } from "next/router";
import { Route, Routes, useNavigate } from "react-router-dom";
import Image from "next/image";
export default function Navbar() {
  // const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const navigation = [
    {
      label: "Категори",
      key: "/containers/menu/category",
      icon: <UserOutlined />,
    },
    {
      label: "Хичээлүүд",
      key: "/containers/menu/subjects",
      icon: <UploadOutlined />,
    },
    {
      label: "Хэрэглэгчид",
      key: "/containers/menu/userinfo",
      icon: <UserOutlined />,
    },
  ];

  return (
    <Layout className="layout">
      <div className="logo">
        <Image src="/Logo eteacher.png" alt="Logo" width={50} height={30} />
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={navigation}
        onClick={({ key }) => {
          if (key) {
            router.push(key);
          }
        }}
      />
    </Layout>
  );
}
