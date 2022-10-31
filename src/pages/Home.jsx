import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Flex } from '@chakra-ui/react';
import Dashboard from '../components/Dashboard';

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Flex>
        <Sidebar />
        <Dashboard />
      </Flex>
    </>
  );
};

export default Home;
