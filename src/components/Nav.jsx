import {
  Box,
  Button,
  Flex,
  Image,
  useMediaQuery,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
  Stack,
  Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.png';

function Nav() {
  const [Routes, setRoutes] = useState([]);

  const location = useLocation();

  const [isLargerThan700] = useMediaQuery('(max-width: 700px)');

  useEffect(() => {
    setRoutes(['Home', 'Services', 'Works', 'Locations', 'Contact']);
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      {location.pathname === '/' ? (
        ''
      ) : (
        <Flex
          textAlign={'center'}
          alignItems="center"
          justifyContent="space-between"
          px={10}
          py={5}
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: 'linear',
              stifness: 200,
            }}
          >
            <Image src={Logo} alt="Logo" width={12} />
          </motion.div>
          {isLargerThan700 ? (
            <Button variant="unstyled" size={10} ref={btnRef} onClick={onOpen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </Button>
          ) : (
            <Box>
              {Routes.map(item => {
                return (
                  <Button
                    className="font-2"
                    fontWeight="medium"
                    fontSize={14}
                    variant="unstyled"
                    m={3}
                    px={3}
                    borderRadius="none"
                    key={item}
                    as={motion.button}
                    whileHover={{ scale: 1.2 }}
                    border={item === 'Contact' ? '2px solid #810CA8' : ''}
                  >
                    <Link
                      to={`/${item}`}
                      className={`${
                        '/' + item === location.pathname ? 'active-nav' : ''
                      }`}
                    >
                      {item}
                    </Link>
                  </Button>
                );
              })}
            </Box>
          )}

          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bgColor="#03001C">
              <DrawerCloseButton color='white' />
              <DrawerHeader>
                <Text className="font-1" color="#F2F2F2">
                  ByteWiseCode
                </Text>
              </DrawerHeader>

              <DrawerBody>
                <Stack divider={<Divider />}>
                  {Routes.map(item => {
                    return (
                      <Button
                        className="font-2"
                        fontWeight="medium"
                        fontSize={14}
                        variant="unstyled"
                        m={1}
                        width="fit-content"
                        p={0}
                        key={item}
                        color="#F2F2F2"
                      >
                        <Link
                          to={`/${item}`}
                          className={`${
                            '/' + item === location.pathname ? 'active-nav' : ''
                          }`}
                        >
                          {item}
                        </Link>
                      </Button>
                    );
                  })}
                </Stack>
              </DrawerBody>

              <DrawerFooter
                bgColor="#03001C"
                color="#810CA8"
                display="flex"
                justifyContent="center"
              >
                <Text fontSize={10} className="font-1">
                  Made by ByteWiseCode Developers
                </Text>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>
      )}
    </>
  );
}

export default Nav;
