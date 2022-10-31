import { Flex, Td, Text, Box } from '@chakra-ui/react';
import React from 'react';

const Status = ({ data }) => {
  let color = null;

  switch (data) {
    case 'Pending':
      color = '#EBC315';
      break;
    case 'Un-reconciled':
      color = '#C4C4C4';
      break;
    case 'Reconciled':
      color = '#27AE60';
      break;
    default:
      break;
  }

  return (
    <Td color={'#7F8FA4'}>
      <Flex
        alignItems={'center'}
        border={'1px solid #CCCFD4'}
        borderRadius={'30px'}
        width={'140px'}
        py={2}
        px={3}
      >
        <Box h={'9px'} w={'9px'} bg={color} borderRadius={'50%'}></Box>
        <Text ml={2}>{data}</Text>
      </Flex>
    </Td>
  );
};

export default Status;
