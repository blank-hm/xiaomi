import React, { Component } from 'react';
import { Layout, Row, Col, Menu } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import { withRouter } from "react-router-dom";
import { mainRoutes } from '../../routers';
const routes = mainRoutes.filter(route => { return route.isShow });

const { Header, Footer, Sider, Content } = Layout;


class Index extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Layout className="layout-outside-container">
                <Header className="header">
                    <Row>
                        <Col flex="100px">
                            <a onClick={() => { this.props.history.push("/pages/home") }}> Blank </a>
                        </Col>
                        <Col flex="auto">
                            <Menu mode="horizontal" className="header-nav">
                                {routes.map(route => {
                                    return <Menu.Item key={route.path} onClick={p => { this.props.history.push(p.key) }}>
                                        {route.icon}
                                        {route.title}
                                    </Menu.Item>
                                })}
                            </Menu>
                        </Col>
                    </Row>
                </Header>
                <Layout className="layout-inside-container">

                    <Content className="content">
                        {this.props.children}
                    </Content>

                    <Sider className="sider">Sider</Sider>


                </Layout>
                <Footer className="footer">Footer</Footer>
            </Layout>
        );
    }
}

export default withRouter(Index);