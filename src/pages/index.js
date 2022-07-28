import * as React from "react"
import "../styles/index.css"
import ReactFullpage from '@fullpage/react-fullpage';
import "antd/dist/antd.css";
import { Col, Row } from 'antd';
import avatar from "../images/avatar.jpeg"
import logo from "../images/duypham.svg"
const Home = () => {
  return (
    <main>
      <title>Home Page</title>
      <section className="banner">
        <ReactFullpage
          navigation
          scrollingSpeed={500}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <Row className="banner">

                    <Col span={14} className="banner-col1">
                      <div className="logo">
                        <img src={logo}></img>
                      </div>
                      <div className="banner-col1-content-wrapper">
                        <div className="banner-col1-content">
                          <div className="banner-col1-content-position">developer.</div>
                          <div className="banner-col1-content-description">I am a backend and frontend developer as well.</div>

                        </div>
                      </div>
                    </Col>
                    <Col span={4}>
                      <Row>
                        <Col span={12} className="banner-col1"></Col>
                        <Col span={12} className="banner-col2"></Col>
                        <div className="banner-avatar">
                          <div className="banner-avatar-border-left"></div>
                          <div className="banner-avatar-border-right"></div>
                        </div>
                      </Row>
                    </Col>
                    <Col span={6} className="banner-col2"></Col>

                  </Row>
                </div>
                <div className="section bb">
                  <p>Section 2</p>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </section>
    </main>
  )
}

export default Home
