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
import Table from "./Table";
import CustomForm from "./CustomForm";
import { useRouter } from "next/router";
import { Route, Routes, useNavigate } from "react-router-dom";
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
            label: "Хэрэглэгчид",
            key: "/containers/menu/userinfo",
            icon: <UserOutlined />,
        },
        { label: "Event", key: "/event", icon: <UploadOutlined /> },
    ];

    // function Content() {
    //     return (
    //         <div>
    //             <Routes>
    //                 <Route
    //                     path="/containers/menu/category"
    //                     element={<div>HOme</div>}
    //                 ></Route>
    //                 <Route
    //                     path="/containers/menu/userinfo"
    //                     element={<div>HOme</div>}
    //                 ></Route>
    //             </Routes>
    //         </div>
    //     );
    // }
    return (
        <Layout className="layout">
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={navigation}
                    onClick={({ key }) => {
                        if (key) {
                            router.push(key);
                        }
                    }}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: "trigger",
                            onClick: () => setCollapsed(!collapsed),
                        }
                    )}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                    }}
                ></Content>
            </Layout>
        </Layout>
    );
}
