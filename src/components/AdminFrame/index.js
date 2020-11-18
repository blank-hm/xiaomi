import React, { Component } from 'react';
import { Row, Col, Menu, Layout } from 'antd';
import { withRouter } from "react-router-dom";
import { mainRoutes, adminRoutes } from '../../routers';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const routes = adminRoutes.filter(route => { return route.isShow });


class Index extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <div style={{
                        height: "32px",
                        background: "rgba(255, 255, 255, 0.2)",
                        margin: "16px"
                    }} />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        {routes.map(route => {
                            return <Menu.Item
                                className="menu-item"
                                key={route.path}
                                onClick={p => { this.props.history.push(p.key) }}>
                                {route.icon}
                                {route.title}
                            </Menu.Item>
                        })}
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200, height:"100vh" }}>
                    <Header className="site-layout-background" style={{ padding: 0, background: "#fff" }} />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div className="site-layout-background" style={{ padding: 24 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center', background: "rgba(255, 255, 255, 0.5)" }}>Blank ©2020 </Footer>
                </Layout>
            </Layout>

        );
    }
}

export default withRouter(Index);