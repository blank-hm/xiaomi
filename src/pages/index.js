import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as ACTIONS from "../actions/";
import { Card, Row, Col } from 'antd';
import Article from "../assets/img/2.jpg"

class Index extends Component {
    render() {
        return (
            <Fragment>
                <div className="p-1 main-container">
                    <Row className="w-100" gutter={[16, 16]}>
                        <Col xs={24} md={16} xxl={18}>
                            <Card className="home-article-card" hoverable>
                                <Row className="article-row">
                                    <Col xs={24} sm={10} >
                                        <img
                                            alt="文章封面"
                                            src={Article}
                                            className="article-img"
                                            onClick={()=>this.props.test({})}
                                        />
                                    </Col>
                                    <Col xs={24} sm={14} className="article-content" >
                                        <h1 className="text-single-ellipsis">
                                            <a className="article-title" href="/articles/edit/0">fdsfasdf</a>
                                        </h1>

                                        <p className="text-ellipsis">
                                            发第三个的大噶的观点撒 阿桑的歌阿斯顿噶啥大噶山豆根阿斯顿噶啥大噶山豆根爱国
                                            发第三个的大噶的观点撒 阿桑的歌阿斯顿噶啥大噶山豆根阿斯顿噶啥大噶山豆根爱国
                                            发第三个的大噶的观点撒 阿桑的歌阿斯顿噶啥大噶山豆根阿斯顿噶啥大噶山豆根爱国
                                            发第三个的大噶的观点撒 阿桑的歌阿斯顿噶啥大噶山豆根阿斯顿噶啥大噶山豆根爱国
                                            发第三个的大噶的观点撒 阿桑的歌阿斯顿噶啥大噶山豆根阿斯顿噶啥大噶山豆根爱国
                                            发第三个的大噶的观点撒 阿桑的歌阿斯顿噶啥大噶山豆根阿斯顿噶啥大噶山豆根爱国
                                            发第三个的大噶的观点撒 阿桑的歌阿斯顿噶啥大噶山豆根阿斯顿噶啥大噶山豆根爱国
                                        </p>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>

                        <Col xs={24} md={8} xxl={6}>
                            <Card>

                            </Card>
                        </Col>
                    </Row>

                </div>


            </Fragment>

        );
    }
}

const mapStateToProps = (state, props) => {

    return {

    };
};

export default connect(mapStateToProps,ACTIONS)(Index);