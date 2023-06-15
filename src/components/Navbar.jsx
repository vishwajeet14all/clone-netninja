import { Flex,Text,Button,Heading,Spacer,HStack, Avatar, AvatarBadge,useToast } from "@chakra-ui/react";
import react from "react";
import { UnlockIcon } from "@chakra-ui/icons";

export default function Navbar() {

  const toast = useToast()

  const showToast = () => {
    toast({
      title:'Logged out',
      description:'Successfully logged out',
      duration:5000,
      isClosable:true,
      status:'success',
      icon:<UnlockIcon/>,
      position:'top',

    })
  }

  return (
    // <Flex bg="gray.200" justifyContent="space-around" wrap="wrap" gap="100px">
    //     <Box w="150px" h="50px" bg="red">1</Box>
    //     <Box w="150px" h="50px" bg="blue">2</Box>
    //     <Box w="150px" h="50px" flexGrow="1" bg="green">3</Box>
    //     <Box w="150px" h="50px" flexGrow="2" bg="yellow">4</Box>
    // </Flex>

    <Flex as='nav' p='10px' mb="40px" alignItems='center'>

        <Heading as='h1'>Dojo Tasks</Heading>
        <Spacer />
        
        <HStack spacing='20px'>
        <Avatar src="/img/mario.png" name="mario">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>mario@netninja.dev</Text>
        <Button colorScheme="purple" onClick={showToast}>Logout</Button>
        </HStack>
    </Flex>


  );
}
