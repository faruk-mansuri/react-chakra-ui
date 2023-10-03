import { UnlockIcon } from '@chakra-ui/icons';
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
  useToast,
  Avatar,
  AvatarBadge,
} from '@chakra-ui/react';

const Navbar = () => {
  const toast = useToast();

  const showToast = () => {
    toast({
      position: 'top',
      title: 'Logged out',
      description: 'Successfully',
      duration: 2 * 1000,
      isClosable: true,
      status: 'success',
      icon: <UnlockIcon />,
    });
  };
  return (
    <Flex as='nav' p='1rem' alignItems='center' gap='10px' mb='40px'>
      <Heading as='h1'>Dojo Tasks</Heading>
      <Spacer />

      <HStack spacing='20px'>
        <Avatar
          name='peter'
          bg='purple.400'
          src='https://thumbs.dreamstime.com/b/man-profile-cartoon-smiling-vector-illustration-graphic-design-135443492.jpg'
        >
          <AvatarBadge w='1.5rem' bg='teal.500'>
            <Text color='#fff' fontSize='xs'>
              0
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>peter@gmail.com</Text>
        <Button colorScheme='blue' onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
