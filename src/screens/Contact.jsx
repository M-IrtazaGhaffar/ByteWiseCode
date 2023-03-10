import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Flex,
  useMediaQuery,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Alert,
  AlertIcon,
  Spinner,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Axios from 'axios';

function Contact() {
  const [isLargerThan700] = useMediaQuery('(max-width: 700px');
  const [Sent, setSent] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Data, setData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const getData = e => {
    // e.preventDefault() --->>> Chkar UI provides the e.preventDefault() automatically
    setData({ ...Data, [e.target.name]: e.target.value });
    console.log(Data);
  };
  const postData = async () => {
    setLoading(true);
    const response = await Axios.post(
      'https://bytewisecode-developers-default-rtdb.firebaseio.com/ContactForm.json',
      JSON.stringify(Data)
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
        <Alert
          status="success"
          position="absolute"
          fontSize="xs"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <AlertIcon />
          <Text className="font-2" color="black">
            Form Submitted. We'll try to reach you as soon as possible!
          </Text>
        </Alert>
      ) : (
        ''
      )}
      <Flex
        my={16}
        mx={`${isLargerThan700 ? '5' : '16'}`}
        flexDirection={`${isLargerThan700 ? 'column-reverse' : 'row'}`}
        alignItems="center"
        justifyContent="space-between"
        gap={10}
      >
        <Accordion
          allowToggle
          px={`${isLargerThan700 ? '5px' : '5rem'}`}
          width="100%"
          className="font-2"
        >
          <Text
            textAlign="center"
            mb={10}
            className="font-1"
            fontSize="xl"
            flexWrap="wrap"
          >
            FAQs
          </Text>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Is is a software house or a team?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              It is a software team which provides services all over the globe
              remotely with fully customer satisfaction.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Where are we located?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We're team which handles project remotely. Inshort, we're located
              in Pakistan.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  What types of services you offer?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              We offer full stack web development, logo designing, desktop
              application development, android application development, react
              native application development, flutter application development
              services and much more.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Do we have to inform you before visit!
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes, you have to inform us before you visit otherwise it could be
              possibility we shall not be available.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Box width="100%" className="font-1" bgColor="#3F3F4E" borderRadius={3}>
          <Flex
            p={`${isLargerThan700 ? '5' : 10}`}
            gap={5}
            flexDirection="column"
            justifyContent="space-between"
          >
            <Text fontSize="xl" textAlign="center">
              Contact Us
              <Text className="font-2" py={2} fontSize="sm">
                This form will help us to reach you easily
              </Text>
            </Text>
            <FormControl className="font-2" isRequired>
              <Flex gap={5} flexDirection="column">
                <Box>
                  <FormLabel fontSize="xs">Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    onChange={getData}
                    autoComplete="off"
                  />
                </Box>
                <Box>
                  <FormLabel fontSize="xs">Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="example@example.com"
                    required
                    name="email"
                    onChange={getData}
                    autoComplete="off"
                  />
                </Box>
                <Box>
                  <FormLabel fontSize="xs">Subject</FormLabel>
                  <Input
                    type="text"
                    placeholder="Subject"
                    required
                    name="subject"
                    onChange={getData}
                    autoComplete="off"
                  />
                </Box>
                <Box>
                  <FormLabel fontSize="xs">Describe Your Matter</FormLabel>
                  <Textarea
                    placeholder="We are hearing you..."
                    required
                    name="mwssage"
                    onChange={getData}
                    autoComplete="off"
                  />
                </Box>
                <Button
                  variant="unstyled"
                  bgColor={`${Sent ? 'green.600' : '#810ca8'}`}
                  isDisabled={Sent ? true : false}
                  borderRadius={2}
                  px={5}
                  color="#F2F2F2"
                  fontWeight="light"
                  fontSize="lg"
                  onClick={postData}
                >
                  {Loading ? (
                    <Spinner size="md" />
                  ) : Sent ? (
                    'Form Submitted'
                  ) : (
                    'Send'
                  )}
                </Button>
              </Flex>
            </FormControl>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default Contact;
