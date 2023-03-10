import {
  Box,
  Button,
  Text,
  Flex,
  useMediaQuery,
  Divider,
  Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import C from '../components/C';
import Lottie from 'lottie-react';
import About from '../animations/about.json';

function Home() {
  const [isLargerThan700] = useMediaQuery('(max-width: 700px');
  return (
    <>
      <Box>
        {/* Section: 1 */}
        <Flex
          alignItems={`${isLargerThan700 ? 'center' : 'left'}`}
          py={10}
          flexDirection="column"
          justifyContent={`${isLargerThan700 ? 'center' : 'left'}`}
          height="80vh"
          width="100%"
        >
          <Text
            textTransform="uppercase"
            className="font-1"
            fontSize="2xl"
            fontWeight="bold"
            textAlign={`${isLargerThan700 ? 'center' : 'left'}`}
            px={`${isLargerThan700 ? 3 : '5rem'}`}
            py={8}
          >
            On your marks,
            <br />
            get set,
            <br />
            <Text color="#810ca8">{`{ grow! }`}</Text>
            <Text
              className="font-2"
              fontSize="xs"
              fontWeight="medium"
              textTransform="capitalize"
              py={3}
              width={`${isLargerThan700 ? '100%' : '40%'}`}
            >
              Wherein without land waters deep dry firmament, given his evening.
              Tree. Place likeness day sixth there whose from deep of gathering
              have he kind dry.
            </Text>
          </Text>
          {isLargerThan700 ? (
            ''
          ) : (
            <Divider
              orientation="vertical"
              mx={`${isLargerThan700 ? 3 : '5rem'}`}
            />
          )}
          <Box mx={`${isLargerThan700 ? 3 : '5rem'}`} my={8}>
            <Button
              variant="unstyled"
              borderRadius="none"
              border="2px solid #810ca8"
              px={5}
            >
              <Link to="/Services">Get Quote</Link>
            </Button>
          </Box>
        </Flex>

        <Text textTransform='capitalize' bgColor='#3F3F4E' className='font-1' p='10' textAlign='center' fontSize='xl'>
          Do we serve better?
        </Text>

        <Flex
          flexWrap="wrap"
          mx={5}
          py={16}
          justifyContent="space-around"
          flexDirection={`${isLargerThan700 ? 'column' : 'row'}`}
          alignItems="center"
          gap={7}
        >
          <Box
            position="relative"
            width={`${isLargerThan700 ? '100%' : '25vw'}`}
          >
            <Lottie animationData={About} loop={true} />
          </Box>
          <Box>
            <Text
              className="font-1"
              fontSize="xl"
              textAlign={`${isLargerThan700 ? 'center' : 'left'}`}
            >
              About Us
              <Text
                fontSize="md"
                py={5}
                className="font-2"
                width={`${isLargerThan700 ? '100%' : '50vw'}`}
              >
                "ByteWiseCode is a software development company dedicated to
                delivering high-quality, innovative, and cost-effective software
                solutions to clients around the world. Our team of experienced
                developers, designers, and project managers work closely with
                clients to understand their unique needs and deliver customized
                solutions that exceed expectations.
                <br />
                We specialize in developing web and mobile applications, custom
                software development, cloud computing, and data management
                solutions. Our focus on cutting-edge technology and agile
                methodologies enables us to quickly respond to changing market
                demands and deliver projects on time and within budget.
                <br />
                At ByteWiseCode, we take pride in our commitment to excellence,
                customer satisfaction, and creating lasting partnerships with
                our clients. Whether you're looking to launch a new product,
                streamline business processes, or simply bring your ideas to
                life, we have the expertise and experience to help you succeed."
              </Text>
            </Text>
          </Box>
        </Flex>

        {/* Section: 5 */}
        <Flex
          flexWrap="wrap"
          gap={7}
          bgColor="#810CA8"
          py={10}
          px={`${isLargerThan700 ? 10 : '5rem'}`}
          alignItems="center"
          justifyContent="space-between"
        >
          <Text
            fontSize={'25px'}
            className="font-1"
            textAlign={`${isLargerThan700 ? 'center' : 'left'}`}
          >
            We are currently recruiting
            <Text
              fontSize={'12px'}
              py={2}
              textAlign={`${isLargerThan700 ? 'center' : 'left'}`}
            >
              Your hardest times often lead to the greatest moments of your
              life.
              <br />
              Keep going. Tough situations build strong people in the end.”
            </Text>
          </Text>
          <Flex
            justifyContent="center"
            width={`${isLargerThan700 ? '100%' : ''}`}
          >
            <Button
              variant="unstyled"
              borderRadius="none"
              border="2px solid #03001C"
              px={5}
              as={motion.button}
              whileHover={{ scale: 1.1 }}
            >
              <Link to="/Services">Get Quote</Link>
            </Button>
          </Flex>
        </Flex>

        {/* Section: 6 */}

        {/* <Flex
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap={10}
          px={3}
          py={14}
        >
          <Flex
            alignItems="center"
            flexWrap="wrap"
            justifyContent="center"
            width={`${isLargerThan700 ? '100%' : '30%'}`}
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
                  They went above and beyond to make sure I was completely
                  satisfied with product/service."
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
            width={`${isLargerThan700 ? '100%' : '30%'}`}
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
                  “Bytewise was ultimately the reason that we got success and we
                  are happy that we worked with such professionals and will
                  continue working with them”
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
        </Flex> */}

        <Flex
          flexWrap="wrap"
          py={16}
          alignItems="center"
          gap={10}
          justifyContent="space-evenly"
        >
          <Text className="font-1" textAlign="center" fontSize="xl">
            Our Founders & Their Testimonials
            <Text fontSize="sm" className="font-2" py={3}>
              Meet and get to know all of our valued team members.
            </Text>
          </Text>
          <Box width={`${isLargerThan700 ? '100%' : '30%'}`} px={3}>
            <C />
          </Box>
        </Flex>

        {/* Section: 7 */}
        <Flex
          bgColor="#810CA8"
          py={10}
          px={`${isLargerThan700 ? 10 : '5rem'}`}
          alignItems="center"
          flexWrap="wrap"
          gap={7}
          justifyContent="space-between"
        >
          <Text
            fontSize={'25px'}
            className="font-1"
            textAlign={`${isLargerThan700 ? 'center' : 'left'}`}
          >
            We'll help you to achieve your digital goal
          </Text>
          <Flex
            justifyContent="center"
            width={`${isLargerThan700 ? '100%' : ''}`}
          >
            <Button
              variant="unstyled"
              borderRadius="none"
              border="2px solid #03001C"
              px={5}
              as={motion.button}
              whileHover={{ scale: 1.1 }}
            >
              <Link to="/Contact">Contact</Link>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Home;
