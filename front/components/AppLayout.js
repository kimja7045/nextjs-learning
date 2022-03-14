import React, {useState} from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import styled, { createGlobalStyle } from "styled-components";

import UserProfile from '../components/UserProfile'
import LoginForm from '../components/LoginForm'
import {useSelector} from 'react-redux'

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
    padding-left: 0 !important;
  }

  .ant-col:last-child {
    padding-right: 0 !important;
  } 
`

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`

const AppLayout = ({ children }) => {
    // const isLoggedIn = useSelector(state=>state.user.isLoggedIn)
    const {isLoggedIn} = useSelector(state=>state.user)
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
      <Global/>
      <Menu mode="horizontal">
        <Menu.Item key={0}>
          <Link href={"/"}>
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key={1}>
          <Link href={"/profile"}>
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key={2}>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item key={3}>
          <Link href={"/signup"}>
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>

      <Row gutter={8}>
        <Col xs={24} md={6}>
          {/*왼쪽 메뉴*/}
          {/*{isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}*/}
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.zerocho.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by ZeroCho
          </a>
        </Col>
      </Row>
      {/* {children}     */}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
