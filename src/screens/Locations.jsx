import { AspectRatio, Box, Button, Flex, Link, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';

function Locations() {
  const [isLargerThan700] = useMediaQuery('(max-width: 700px');
  return (
    <Box>
      <Text className="font-1" fontSize="2xl" my={'75px'} textAlign="center">
        Our Location
      </Text>
      <Flex
        alignItems="center"
        my={7}
        justifyContent="center"
        flexDirection="column"
        gap={3}
      >
        <Text className="font-2">Please inform us before you visit us</Text>
        <Link href="tel:+923320523524" textDecoration="none">
          <Button
            display="block"
            mx={5}
            px={7}
            fontSize="sm"
            fontWeight="light"
            variant="solid"
            colorScheme="teal"
            rightIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
            }
            textDecoration="none"
          >
            (+92) 332 0523524
          </Button>
        </Link>
      </Flex>
      <AspectRatio ratio={`${isLargerThan700 ? (16/16) : (16/4)}`}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.25374306126!2d73.18180921576274!3d33.54678305164283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfedbd34b0d39f%3A0xcb4fb523ae9db9c2!2sCapital%20University%20of%20Science%20%26%20Technology%20(CUST)!5e0!3m2!1sen!2s!4v1676122467157!5m2!1sen!2s"></iframe>
      </AspectRatio>
    </Box>
  );
}

export default Locations;
