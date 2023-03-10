import Carousel from 'nuka-carousel/lib/carousel';
import React from 'react';
import {
  Text,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
//   useMediaQuery
} from '@chakra-ui/react';
import Hamza from '../assets/Hamza.jpeg';
import Irtaza from '../assets/Irtaza.jpeg';


function C() {
    // const [islargerThan700] = useMediaQuery('(max-width: 700px)');
    
  return (
    <Carousel>
      <Flex
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        // width={`${islargerThan700 ? '100%' : '30%'}`}
        bgColor="whiteAlpha.200"
        pt={7}
        borderRadius="10px"
      >
        <Image src={Irtaza} width="200px" borderRadius={'50%'} />
        <Card size="md" border="none" bgColor="transparent" color="#F2F2F2">
          <CardHeader>
            <Text
              fontSize="xl"
              textAlign="center"
              fontWeight="bold"
              className="font-1"
              py={3}
              borderBottom="1px solid gray"
            >
              Founder
            </Text>
          </CardHeader>
          <CardBody>
            <Text className="font-2" color="#810CA8">
              "The customer support I received from customers was top-notch.
              They went above and beyond to make sure I was completely satisfied
              with product/service."
            </Text>
          </CardBody>
          <CardFooter>
            <Text textAlign="right" width="100%" className="font-1">
              M. Irtaza Ghaffar
              <br />
              <Text fontSize="xs">Full Stack MERN Web Developer</Text>
            </Text>
          </CardFooter>
        </Card>
      </Flex>
      <Flex
        alignItems="center"
        flexWrap="wrap"
        justifyContent="center"
        // width={`${islargerThan700 ? '100%' : '30%'}`}
        bgColor="whiteAlpha.200"
        pt={7}
        borderRadius="10px"
      >
        <Image src={Hamza} width="200px" borderRadius={'50%'} />
        <Card size="md" border="none" bgColor="transparent" color="#F2F2F2">
          <CardHeader>
            <Text
              fontSize="xl"
              textAlign="center"
              fontWeight="bold"
              className="font-1"
              py={3}
              borderBottom="1px solid gray"
            >
              Co-Founder
            </Text>
          </CardHeader>
          <CardBody>
            <Text className="font-2" color="#810CA8">
              “Bytewise was ultimately the reason that we got success and we are
              happy that we worked with such professionals and will continue
              working with them”
            </Text>
          </CardBody>
          <CardFooter>
            <Text textAlign="right" width="100%" className="font-1">
              Muhammad Hamza
              <br />
              <Text fontSize="xs">Android Application Developer</Text>
            </Text>
          </CardFooter>
        </Card>
      </Flex>
    </Carousel>
  );
}

export default C;
