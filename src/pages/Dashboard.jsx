import {
  Container,
  Heading,
  Text,
  Box,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  HStack,
  Button,
  Divider,
  Avatar
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { ViewIcon, EditIcon } from "@chakra-ui/icons";

export default function Dashboard() {
  // const boxStyle = {
  //   p:"10px",
  //   bg:"purple.400",
  //   color:"white",
  //   m:"10px",
  //   textAlign:"center",
  //   filter:'blur(1px)',
  //   ':hover':{
  //     color:'black',
  //     bg:'blue.200'
  //   }
  // }

  const tasks = useLoaderData();

  return (
    <Container as="section" maxWidth="100%">
      {/* <Heading my="30px" p="10px" border="2px">Vishwajeet + Chakra</Heading>
      <Text ml="30px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis,       
      </Text>
      <Text ml="30px" color="blue.300" fontWeight="bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis,       
      </Text> */}

      {/* 
      <Box my="30px" p="20px" bg="orange">
        <Text color="white">This is box</Text>
      </Box> */}

      {/* <Box sx={boxStyle}>Hello , Ninjas!</Box> */}

      <SimpleGrid spacing="10px" minChildWidth="300px">
        {/* <Box bg='white' h='200px' border='1px solid'>
          <Text color={{base:'pink',md:'blue',lg:'green'}}>Hello</Text>
        </Box>
        <Box bg='white' h='200px' border='1px solid'></Box>
        <Box bg='white' h='200px' border='1px solid'></Box>
        <Box bg='white' h='200px' border='1px solid'></Box>

        <Box bg='white' h='200px' border='1px solid'></Box>
        <Box bg='white' h='200px' border='1px solid'></Box>
        <Box bg='white' h='200px' border='1px solid'></Box>
        <Box bg='white' h='200px' border='1px solid'></Box>

        <Box bg='white' h='200px' border='1px solid'></Box>
        <Box bg='white' h='200px' border='1px solid'></Box>
        <Box bg='white' h='200px' border='1px solid'></Box>
        <Box bg='white' h='200px' border='1px solid'></Box> */}

        {tasks &&
          tasks.map((task) => (
            <Card
              key={task.id}
              borderTop="8px"
              borderColor="purple.400"
              bg="white"
            >
              <CardHeader>
                <Flex gap={5}>
           
                    <Avatar src={task.img}></Avatar>
                  
                  <Box>
                    <Heading as="h3" size="sm">
                      {task.title}
                    </Heading>
                    <Text>by {task.author}</Text>
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody color="gray.500">
                <Text>{task.description}</Text>
              </CardBody>
              <Divider borderColor="gray.200"/>
              <CardFooter>
                <HStack>
                  <Button variant="ghost" leftIcon={<ViewIcon />}>
                    Watch
                  </Button>
                  <Button variant="ghost" leftIcon={<EditIcon />}>
                    Comment
                  </Button>
                </HStack>
              </CardFooter>
            </Card>
          ))}
      </SimpleGrid>
    </Container>
  );
}

export const tasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");
  return res.json();
};
