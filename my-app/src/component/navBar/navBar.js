
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import{clearToken}from '../../page/common/login/storeToken'

const { Header, Content, Footer } = Layout;
class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      navList:['nav1','nav2','nav3']
    }
  }


 render(){ 
     return (
 <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >{
        this.state.navList.map((value,index)=>
          <Menu.Item key={index}>{value}</Menu.Item>
          )
      }
      <Menu.Item>
      {/* <button style={{float:"right"}} onClick={clearToken}>??</button> */}
      </Menu.Item>
            

      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item> */}
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
    ) 
 } 
}
export default NavBar