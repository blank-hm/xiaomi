import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Card, Row, Col } from 'antd';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    onFinish = () => { }
    onFinishFailed = () => { }

    render() {
        return (
            <div className="login-div">
                <Card className="login-card">
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            label="账号"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item>

                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                登陆
                        </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Login;