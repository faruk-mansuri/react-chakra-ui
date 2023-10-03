import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { Form, redirect } from 'react-router-dom';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  return redirect('/');
};

export default function Create() {
  return (
    <Box maxW='480px'>
      <Form method='post'>
        <FormControl isRequired mb='40px'>
          <FormLabel>Task name : </FormLabel>
          <Input type='text' name='name' letterSpacing='1px' />
          <FormHelperText>Enter descriptive task name</FormHelperText>
        </FormControl>

        <FormControl mb='40px'>
          <FormLabel>Task description : </FormLabel>
          <Textarea
            type='text'
            name='description'
            placeholder='Enter task detailed description for task...'
            letterSpacing='1px'
          />
        </FormControl>

        <FormControl mb='40px' display='flex' alignItems='center'>
          <Checkbox colorScheme='purple' name='isPriority' size='lg' />
          <FormLabel ml='10px' mb='0'>
            Make this a priority task
          </FormLabel>
        </FormControl>

        <Button type='submit'>Submit</Button>
      </Form>
    </Box>
  );
}
