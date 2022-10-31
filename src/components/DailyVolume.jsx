import React from 'react';
import { Flex, Stack, Text, Image } from '@chakra-ui/react';
import chart from '../assets/small-chart.svg';

const DailyVolume = ({ description, value }) => {
  return (
    <Flex
      h="75px"
      w="253px"
      bg="#FFFFFF"
      boxShadow="lg"
      border=" 1px solid #EFEFEF"
      align="center"
      justify="space-between"
      px="21px"
    >
      <Stack spacing={1}>
        <Text color="#787C90" fontSize="12px" lineHeight="16px">
          {description}
        </Text>
        <Text color="#262626" fontSize="18px" lineHeight="24px">
          {value}
        </Text>
      </Stack>
      <Image w="62px" h="37px" objectFit="cover" src={chart} alt="box_chart" />
    </Flex>
  );
};

export default DailyVolume;
