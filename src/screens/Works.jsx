import { useMediaQuery, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function Works() {
  const [isLargerThan700] = useMediaQuery('(max-width: 700px');
  return (
    <Flex gap={5} alignItems='center' justifyContent='center' height='65vh' flexDirection='column' textAlign='center' mx={10} my={`${isLargerThan700 ? 10 : '3rem'}`}>
      <Text className='font-1' textAlign='center' fontSize='3xl'>
      Coming Soon...
      </Text>
      <Text textTransform='capitalize' fontSize='sm' className='font-2'>
        we're sorry but we are working on our real world modren technologies and products. we hope so our this startup will not disappoint you!
      </Text>
    </Flex>
  )
}

export default Works