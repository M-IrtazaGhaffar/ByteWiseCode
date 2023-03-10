import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flex, Image, Text } from '@chakra-ui/react';
import Logo from '../assets/Logo.png';
import { useNavigate } from 'react-router-dom';

function Splash() {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/Home')
        }, 6000);
    }, [])

  return (
    <Flex gap={10} height='100vh' alignItems='center' justifyContent='center' flexDirection='column'>
      <Flex alignItems='center' justifyContent='center' width='100%'>
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 5,
          ease: 'linear',
          stifness: 200,
        }}
      >
        <Image src={Logo} alt="Logo" width={16} />
      </motion.div>
      </Flex>
      <Text mx={5} textAlign="center" textTransform='capitalize' className="font-1">
        please wait while we redirect you to our website
      </Text>
    </Flex>
  );
}

export default Splash;
