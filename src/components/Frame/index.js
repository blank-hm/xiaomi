import React, { Component } from 'react';
import { Layout, Row, Col, Menu } from 'antd';
import { HomeFilled } from '@ant-design/icons'
const { Header, Footer, Sider, Content } = Layout;

const { SubMenu } = Menu;

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
                            Blank
                        </Col>
                        <Col flex="auto">
                            <Menu mode="horizontal" className="header-nav">
                                <Menu.Item icon={<HomeFilled />}>
                                    Blank
                                </Menu.Item>
                                <Menu.Item>
                                    Bl
                                </Menu.Item>
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

export default Index;