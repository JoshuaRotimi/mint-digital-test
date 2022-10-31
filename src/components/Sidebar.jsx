import { VStack, Button, Text, Img, Box } from '@chakra-ui/react';
import React from 'react';
import { SidebarDetails } from '../utils/sidebarOptions';

const Sidebar = () => {
  return (
    <VStack w={'25%'} pt="33px">
      <Button
        w="163px"
        bg="#27AE60"
        color={'#fff'}
        _hover={{
          color: '#fff',
          bg: '#27AE60',
        }}
        borderRadius="3xl"
        fontSize="12px"
        lineHeight="14px"
      >
        GENERATE INVOICE
      </Button>

      {SidebarDetails.map((entry, key) => (
        <VStack key={key} w="100%" align="left">
          <Text color={'#647787'} pl="2em" my={3}>
            {entry.title}
          </Text>
          {entry.items.map((item, index) => (
            <Box
              key={index}
              color={'#647787'}
              h="36px"
              alignItems="center"
              display="flex"
              _hover={{
                background: '#1875F0',
                opacity: 0.1,
              }}
              _focus={{
                background: 'blue.50',
                borderLeft: '7px solid #1875F0',
                borderRadius: '3px',
              }}
              pl="2.1em"
            >
              <Img h="16px" w="19.48px" src={item.icon} mr=".7em" /> {item.name}
            </Box>
          ))}
        </VStack>
      ))}
    </VStack>
  );
};

export default Sidebar;
