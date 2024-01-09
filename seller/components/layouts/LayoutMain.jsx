import { CreateContext } from "@/context/ContextProviderGlobal";
import {
  AreaChartOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Image, Layout, Menu } from "antd";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const { Sider, Content } = Layout;
function LayoutMain({ children }) {
  const { noti, user, logout } = useContext(CreateContext);
  const router = useRouter();
  const changeMenu = (e) => {
    if(e.key === '/login') {
      logout()
    } else {
      router.push(e.key);
    }
  };
  const itemsLayout = [
    {
      key: "/",
      icon: <AreaChartOutlined />,
      label: "Trang chủ",
    },
    {
      key: "/product",
      icon: <UsergroupAddOutlined />,
      label: "Sản Phẩm",
    },
  ];
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={itemsLayout}
          onClick={changeMenu}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, minHeight: 360 }} className="max-h-[calc(100vh-60px)] overflow-y-auto">{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutMain;
