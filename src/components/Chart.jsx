import React from 'react';
import { BsChevronDown, BsChevronRight, BsChevronLeft } from 'react-icons/all';
import {
  Flex,
  Text,
  SimpleGrid,
  Image,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  VStack,
  Icon,
} from '@chakra-ui/react';

import graph from '../assets/big-graph.svg';

const ChartHeader = () => {
  return (
    <Flex justify="space-between" w="90%" align="center" pt="23px">
      <Heading
        fontSize="18px"
        lineHeight="24px"
        color="#4F4F4F"
        fontWeight={700}
      >
        Today: 5, Aug 2018
      </Heading>
      <HStack spacing={6}>
        <Menu w="138px" h="31px" color="#7F8FA4">
          <MenuButton
            bg="gray.50"
            variant="outline"
            border={'1px solid #DDE0E3'}
            as={Button}
            color={'#7F8FA4'}
            _hover={{
              color: '#7F8FA4',
            }}
            rightIcon={<Icon as={BsChevronDown} />}
          >
            1 Jan - 1 Jun
          </MenuButton>
          <MenuList>
            <MenuItem>1 Jan - 1 Jun</MenuItem>
            <MenuItem>1 July - 1 Dec</MenuItem>
          </MenuList>
        </Menu>
        <HStack spacing={2} h="22px">
          <Icon
            bg="linear-gradient(0deg, #F2F4F7 0%, #FFFFFF 100%)"
            border={'1px solid #CED0DA'}
            borderRadius={'4px'}
            p={'4px'}
            h={'25px'}
            color={'#CCCFD4'}
            w="30px"
            as={BsChevronLeft}
          />
          <Icon
            bg="linear-gradient(0deg, #F2F4F7 0%, #FFFFFF 100%)"
            border={'1px solid #CED0DA'}
            borderRadius={'4px'}
            fontSize={'14px'}
            p={'4px'}
            h={'25px'}
            color={'#CCCFD4'}
            w="30px"
            as={BsChevronRight}
          />
        </HStack>
      </HStack>
    </Flex>
  );
};
const Chart = () => {
  const Months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun'];
  return (
    <VStack
      w="689px"
      position="relative"
      h="100%"
      bg="#FFFFFF"
      boxShadow="lg"
      border=" 1px solid #EFEFEF"
      spacing="45px"
    >
      <ChartHeader />
      <SimpleGrid w="100%" minChildWidth="70px" spacing="40px">
        {Months.map(month => (
          <Text color={'#000000'} fontWeight="bold" textAlign="center">
            {month}
          </Text>
        ))}
      </SimpleGrid>
      <Image bottom={0} position="absolute" w="full" h="236px" src={graph} />
    </VStack>
  );
};

export default Chart;
