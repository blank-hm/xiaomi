import React, { Component } from 'react';
import { Card, Row, Col, Image } from 'antd';
import Article from "../assets/img/1.jpg"

class Index extends Component {
    render() {
        return (
            <Card className="home-article-card">
                <Row type="flex" className="article-row" justify="space-between">
                    <Col flex={2}>
                    <img
                    src={Article}
                    className="article-img"
                    />
                    </Col>
                    <Col flex={3} className="article-content" >
                        <a className="article-title"></a>
                        <div>
                            
                        </div>
                    </Col>
                </Row>
                
            </Card>
        );
    }
}

export default Index;