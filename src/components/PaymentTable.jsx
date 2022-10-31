import React from 'react';
import { BsChevronDown } from 'react-icons/all';
import {
  Box,
  Select,
  Icon,
  Flex,
  Text,
  TableContainer,
  Tr,
  Th,
  Td,
  Table,
  Tbody,
  Thead,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/all';

import { tableData } from '../utils/tableData';
import Status from './Status';

const PaymentTable = () => {
  return (
    <Flex flexDirection={'column'} w={'full'}>
      <Text color={'#262626'} fontSize={'36px'} textAlign="left">
        {' '}
        Payments
      </Text>
      <Flex
        alignItems={'center'}
        color={'#262626'}
        justifyContent={'space-between'}
      >
        <Flex alignItems={'center'}>
          <Text>Showing</Text>
          <Box mx={2}>
            <Select
              id="perPage"
              name="perPage"
              defaultValue={10}
              color={'#1875F0'}
            >
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
              <option value={30}>30</option>
            </Select>
          </Box>
          <Text>out of 500 payments</Text>
        </Flex>
        <Flex color={'#787878'}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={BsSearch} color="#787878" />}
            />
            <Input
              border={'none'}
              borderBottom={'1px solid #787878'}
              type="tel"
              placeholder="Search payments"
              _placeholder={{ color: '#787878' }}
            />
          </InputGroup>
        </Flex>
        <Flex alignItems={'center'} color={'#414042'}>
          <Text>Show</Text>
          <Box mx={2}>
            <Select id="perPage" name="perPage" defaultValue={'All'}>
              <option value={10}>Reconciled</option>
              <option value={15}>Un-reconciled</option>
              <option value={20}>Settled</option>
              <option value={25}>Unsettled</option>
            </Select>
          </Box>
        </Flex>
      </Flex>
      <Flex>
        <TableContainer width={'100%'} my={'30px'}>
          <Table borderRadius={'none'} fontSize={'14px'}>
            <Thead bg={'#EAEEF0'} color={'#7F8FA4'}>
              <Tr>
                <Th>Item Type</Th>
                <Th>Price</Th>
                <Th>Transaction No</Th>
                <Th>Time</Th>
                <Th>Status</Th>
                <Th> </Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableData.slice(0, 10).map((item, index) => (
                <Tr key={index} bg={'#fff'} py={2}>
                  <Td color={'#414042'}>{item.itemType}</Td>
                  <Td color={'#7F8FA4'}>{item.price}</Td>
                  <Td color={'#7F8FA4'}>{item.transactionNo}</Td>
                  <Td color={'#7F8FA4'}>{item.time}</Td>
                  <Status data={item.paymentStatus}></Status>
                  <Td>
                    <Icon color={'#7F8FA4'} as={BsChevronDown} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        color={'#000000'}
      >
        <Text>Showing 1 to 10 of 500 entries</Text>
        <Flex border={'1px solid #979797'} borderRadius={'5px'}>
          <Box cursor={'pointer'} p={2} px={4}>
            Previous
          </Box>
          <Box cursor={'pointer'} p={2} px={4} bg={'#1875F0'} color={'#fff'}>
            1
          </Box>
          <Box
            cursor={'pointer'}
            p={2}
            px={4}
            borderX={'1px solid #979797'}
            color={'#979797'}
          >
            2
          </Box>
          <Box cursor={'pointer'} p={2} px={4}>
            Next
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PaymentTable;
