import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';

export const loader = async () => {
  try {
    const response = await fetch('http://localhost:3000/tasks');
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default function Dashboard() {
  const tasks = useLoaderData();

  return (
    <SimpleGrid spacing={10} minChildWidth='300px'>
      {tasks.map((task) => {
        return (
          <Card
            key={task.id}
            borderTop='8px'
            borderColor='purple.400'
            bg='white'
          >
            <CardHeader>
              <Flex gap='20px'>
                <Avatar src={task.img} />

                <Box>
                  <Heading as='h3' size='sm'>
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody color='grey.500'>
              <Text>{task.description}</Text>
            </CardBody>

            <Divider borderColor='grey.200' />

            <CardFooter>
              <HStack>
                <Button variant='ghost' leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant='ghost' leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        );
      })}
    </SimpleGrid>
  );
}
