import React from 'react';
import { Flex, Menu } from 'antd';
import { FaHouse } from 'react-icons/fa6';
import { UserOutlined, CameraOutlined, LogoutOutlined, OrderedListOutlined, CarryOutOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Sidebar = () => {
  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <FaHouse />
        </div>
      </Flex>

      <Menu mode="inline" defaultSelectedKeys={['1']} className="menu-bar">
        <Menu.Item key="1" icon={<UserOutlined />} title="Dashboard">Dashboard</Menu.Item>
        
        <SubMenu key="sub1" icon={<CameraOutlined />} title="Camera">
          <Menu.Item key="2.1">Cam 1</Menu.Item>
          <Menu.Item key="2.2">Cam 2</Menu.Item>
          <Menu.Item key="2.3">Cam 3</Menu.Item>
        </SubMenu>
        
        <Menu.Item key="3" icon={<SettingOutlined />} title="Settings">Settings</Menu.Item>
        <Menu.Item key="4" icon={<OrderedListOutlined />} title="TODO">Category</Menu.Item>
        <Menu.Item key="5" icon={<CarryOutOutlined />} title="Carry">Carry</Menu.Item>
        <Menu.Item key="6" icon={<LogoutOutlined />} title="Logout">Logout</Menu.Item>
      </Menu>
    </>
  );
};

export default Sidebar;
