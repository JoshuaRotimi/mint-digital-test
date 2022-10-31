import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Home from './pages/Home';
import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box h={'100vh'} bg={'#fff'}>
        <Home />
      </Box>
    </ChakraProvider>
  );
}

export default App;
