import React, { Component } from 'react';
import { Row, Col, Menu, Layout } from 'antd';
import { withRouter } from "react-router-dom";
import { mainRoutes } from '../../routers';
const { Footer, Content } = Layout;
const routes = mainRoutes.filter(route => { return route.isShow });


class Index extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Layout className="layout-outside-container">

                <Row className="header">
                    <Col flex="0 1 100px" className="d-flex justify-content-center align-items-center" >
                        
                        <a onClick={() => { this.props.history.push("/pages/home") }}> Blank </a>
                    </Col>
                    <Col flex="auto" className="header-col">
                        <Menu
                            mode="horizontal"
                            className="header-nav"
                        // inlineCollapsed={true}
                        // inlineIndent={48}
                        >
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
                    </Col>
                </Row>

                <Content>
                    {this.props.children}
                </Content>
                <Footer
                className="d-flex justify-content-center align-items-center"
                >
                    Footer
                </Footer>
            </Layout>

        );
    }
}

export default withRouter(Index);