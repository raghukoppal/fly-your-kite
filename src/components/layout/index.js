import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Header from "../header";
import Sidebar from "../Sidebar";
import BreadCrumb from "../BreadCrumb";
import Footer from "../footer";

export const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleDrawer = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f2f5f9",
        flexGrow: 1,
        minHeight: "100vh",
        flexDirection: "column",
        display: "flex",
      }}
    >
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar open={sidebarOpen} toggleDrawer={toggleDrawer} />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            Portfolio
          </Grid>
          <Grid item xs={4}>
            <BreadCrumb />
          </Grid>
        </Grid>
        <main>{children}</main>
      </Container>
      <Footer />
    </Box>
  );
};

export const withLayout = (Comp) => {
  const WrappedComponent = (props) => {
    return (
      <Layout>
        <Comp {...props} />
      </Layout>
    );
  };

  // Set display name for the HOC
  const componentName = Comp.displayName || Comp.name || "Component";
  WrappedComponent.displayName = `withLayout(${componentName})`;

  return WrappedComponent;
};

export default Layout;
