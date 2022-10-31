import { Flex, Stack, Text, Image } from '@chakra-ui/react';
import React from 'react';

import progress from '../assets/progress.svg';

const DataKey = ({ boxTitle, children }) => {
  return (
    <Flex
      bg="#FFFFFF"
      boxShadow="lg"
      border=" 1px solid #EFEFEF"
      align="center"
      justify="space-between"
      px="21px"
      py={6}
    >
      <Stack spacing={1}>
        <Text
          fontSize="14px"
          color="#262626"
          lineHeight="16px"
          fontWeight={700}
        >
          {boxTitle}
        </Text>
        <Image h="4px" src={progress} />
        {children}
      </Stack>
    </Flex>
  );
};

export default DataKey;
