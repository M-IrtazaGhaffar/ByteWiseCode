import React, { useState } from 'react';
import Lottie from 'lottie-react';
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Input,
  Spinner,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import Web from '../animations/web.json';
import Flutter from '../animations/flutter.json';
import Desktop from '../animations/desktop.json';
import Axios from 'axios';

function Services() {
  const [isLargerThan700] = useMediaQuery('(max-width: 700px');
  const [Email, setEmail] = useState('');
  const [Sent, setSent] = useState(false);
  const [Loading, setLoading] = useState(false);

  const regFunc = async () => {
    setLoading(true);
    const response = await Axios.post(
      'https://bytewisecode-developers-default-rtdb.firebaseio.com/RegisteredEmails.json',
      JSON.stringify(Email)
    );
    if (response.status == 200 && response.statusText === 'OK') {
      setLoading(false);
      setSent(true);
    } else {
      setLoading(false);
    }
  };
  return (
    <>
      {Sent ? (
        <Alert status="success" position="absolute" display='flex' alignItems='center' justifyContent='center' fontSize="xs">
          <AlertIcon />
          <Text className="font-2" color="black">
            Thank you for being a part of our family!
          </Text>
        </Alert>
      ) : (
        ''
      )}
      <Box>
        <Text className="font-1" textAlign="center" fontSize="3xl" my={'100px'}>
          Our Services
          <Text className="font-2" fontSize="sm" p={5}>
            Please have a look on the services we provide all over the globe
          </Text>
        </Text>
        <Flex
          m={10}
          justifyContent="space-around"
          flexDirection={`${isLargerThan700 ? 'column' : 'row'}`}
          alignItems="center"
          flexWrap="wrap"
          gap={7}
        >
          <Box width={`${isLargerThan700 ? '100%' : '20%'}`}>
            <Lottie animationData={Web} loop={true} />
          </Box>
          <Text
            width={`${isLargerThan700 ? '100%' : '50%'}`}
            className="font-1"
            fontSize="xl"
          >
            Web Design & Development
            <Text className="font-2" fontSize="md" py={5} color="#810ca8">
              Our website developers provide expert web application development
              and web design services to our clients. We offer a variety of
              website designs and development services from creating mobile web
              development solutions and responsive website designs, to building
              custom e-commerce and intranet experiences using the latest and
              proven web technologies. With up to 85% of consumers visiting
              company’s or service provider’s website before making a purchase,
              more and more consumers make decisions based on their online
              experience: the appearance, usability and accessibility of your
              website is more important than ever, especially in an increasingly
              competitive market.
            </Text>
          </Text>
        </Flex>
        <Divider width="50%" m="auto" />
        <Flex
          m={10}
          justifyContent="space-around"
          flexDirection={`${isLargerThan700 ? 'column-reverse' : 'row'}`}
          alignItems="center"
          flexWrap="wrap"
          gap={7}
        >
          <Text
            width={`${isLargerThan700 ? '100%' : '50%'}`}
            className="font-1"
            fontSize="xl"
          >
            Android Application Design & Development
            <Text className="font-2" fontSize="md" py={5} color="#810ca8">
              Our team understands the cross-browser compatibility and focuses
              on Android mobile app development to deliver our clients
              cutting-edge Android apps with spectacular designs, high
              responsiveness and bug-free functionality.
            </Text>
          </Text>
          <Box width={`${isLargerThan700 ? '100%' : '20%'}`}>
            <Lottie animationData={Flutter} loop={true} />
          </Box>
        </Flex>
        <Divider width="50%" m="auto" />
        <Flex
          m={10}
          justifyContent="space-around"
          flexDirection={`${isLargerThan700 ? 'column' : 'row'}`}
          alignItems="center"
          flexWrap="wrap"
          gap={7}
        >
          <Box width={`${isLargerThan700 ? '100%' : '20%'}`}>
            <Lottie animationData={Desktop} loop={true} />
          </Box>
          <Text
            width={`${isLargerThan700 ? '100%' : '50%'}`}
            className="font-1"
            fontSize="xl"
          >
            Desktop Application Design & Development
            <Text className="font-2" fontSize="md" py={5} color="#810ca8">
              Business of all sizes, including SMBs needs a CRM system that
              improves customer relationship, operation efficiency and sales
              result without breaking the bank. EBS Web CRM SaaS helps you to
              perform effective customer management. We enable you to focus on
              capturing each sales opportunity and keeping the current customers
              happy.
            </Text>
          </Text>
        </Flex>

        <Card
          size="sm"
          textTransform="capitalize"
          color="whitesmoke"
          bg="#3F3F4E"
          mt={16}
          mx="10%"
          py={10}
          px={3}
          position="relative"
          top={7}
        >
          <CardHeader>
            <Text className="font-1" fontSize="xl" textAlign="center">
              Register to us for excitement deals
            </Text>
          </CardHeader>
          <CardBody>
            <Flex justifyContent="center">
              <Input
                variant="outline"
                bgColor="transparent"
                width={`${isLargerThan700 ? '100%' : '50%'}`}
                placeholder="example@example.com"
                textAlign="center"
                className="font-2"
                onChange={e => setEmail(e.target.value)}
                type="email"
                required
              />
            </Flex>
          </CardBody>
          <CardFooter>
            <Flex justifyContent="center" width="100%">
                <Button
                  variant="unstyled"
                  bgColor={`${Sent ? 'green.600' : '#810ca8'}`}
                  isDisabled={Sent ? true : false}
                  borderRadius={2}
                  px={10}
                  color="#F2F2F2"
                  fontWeight="light"
                  fontSize="lg"
                  onClick={regFunc}
                >
                  {Loading ? (
                    <Spinner size="md" />
                  ) : Sent ? (
                    'Registered'
                  ) : (
                    'Register'
                  )}
                </Button>
            </Flex>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
}

export default Services;
