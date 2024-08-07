import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div
      className="sidebar"
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar
        textColor="#fff"
        backgroundColor="#2C3539"
        style={{ width: "200px" }}
      >
        <CDBSidebarHeader>
          <NavLink
            to="/adminpage"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Admin
          </NavLink>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/users" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="users">Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/vieworder" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="store">ViewOrders</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminpro" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="list">ADMIN PRODUCT</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/addproduct" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus">Add Product</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adminHome" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user" >Admin Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="/">Home</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}></CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideBar;
