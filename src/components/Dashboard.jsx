import React from 'react';
import { Flex, Grid, GridItem, HStack, Text } from '@chakra-ui/react';
import DailyVolume from './DailyVolume';
import DataKey from './DataKey';
import Chart from './Chart';

const Dashboard = () => {
  return (
    <Flex flexDirection={'column'} bg={'#E5E5E5'} w={'100%'}>
      <Flex py={'30px'} w={'90%'} mx={'auto'} justifyContent={'space-between'}>
        <DailyVolume value={'2,342'} description={'Daily Transaction Volume'} />
        <DailyVolume
          value={'₦4,000,000'}
          description={'Daily Transaction Value'}
        />
        <DailyVolume
          value={'452,000'}
          description={'Total Transaction Volume'}
        />
        <DailyVolume
          value={'₦4,000,000'}
          description={'Total Transaction Value'}
        />
      </Flex>

      <Flex py={'30px'} w={'90%'} mx={'auto'}>
        <Grid
          h="329px"
          w="100%"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1}>
            <Chart />
          </GridItem>
          <GridItem color={'#262626'} colSpan={2}>
            <DataKey boxTitle="Orders" py={6}>
              <HStack>
                <Text>Pending Orders:</Text> <Text color="#EBC315">20</Text>
              </HStack>
              <HStack>
                <Text>Reconciled Orders:</Text> <Text color="#27AE60">80</Text>
              </HStack>
              <HStack>
                <Text>Total Orders:</Text> <Text color="#1860EC">100</Text>
              </HStack>
            </DataKey>
          </GridItem>
          <GridItem color={'#262626'} colSpan={2}>
            <DataKey boxTitle="Payments">
              <HStack>
                <Text>Un-reconciled Payments:</Text>{' '}
                <Text color="#EBC315">20</Text>
              </HStack>
              <HStack>
                <Text>Reconciled Payments:</Text>{' '}
                <Text color="#27AE60">80</Text>
              </HStack>
              <HStack>
                <Text>Total Payments:</Text> <Text color="#1860EC">100</Text>
              </HStack>
            </DataKey>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
