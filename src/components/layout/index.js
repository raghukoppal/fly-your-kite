import React, { useState } from 'react';
import Header from '../header';
import Sidebar from '../Sidebar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BreadCrumb from '../BreadCrumb';
import Footer from '../footer';
export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleDrawer = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <Box
      sx={{
        backgroundColor: '#f2f5f9',
        flexGrow: 1,
        minHeight: '100vh',
        flexDirection: 'column',
        display: 'flex',
      }}
    >
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar open={sidebarOpen} toggleDrawer={toggleDrawer} />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <BreadCrumb />
        <main>{children}</main>
      </Container>
      <Footer />
    </Box>
  );
}

export const withLayout = (Comp) => (props) => {
  return (
    <Layout>
      <Comp {...props} />
    </Layout>
  );
};
