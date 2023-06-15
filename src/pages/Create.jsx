
import { Button,Textarea,FormLabel,FormControl,Input,FormHelperText,Box, Checkbox, Flex } from "@chakra-ui/react"
import { Form,redirect } from "react-router-dom"


export default function Create() {
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Task name:</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter a descriptive task name</FormHelperText>
        </FormControl>
        <FormControl isRequired mb="40px">
          <FormLabel>Task description:</FormLabel>
          <Textarea
            placeholder="Enter a detailed description fot the task... "
            name="description"
          />
          <FormHelperText>Enter a descriptive task name</FormHelperText>
        </FormControl>


        <FormControl display="Flex" alignItems="center" mb="40px">
          <Checkbox 
            name="isPriority"
            size="lg"
            colorScheme="purple"
          />
          <FormLabel mb="0" ml="10px">Make this a priority task</FormLabel>
        </FormControl>


        <Button type="submit">Submit</Button>
      </Form>
    </Box>
  );
}



export const createAction = async ({request }) => {
  const data = await request.formData()

  const task = {
    title:data.get('title'),
    description:data.get('description'),
    isPriority:data.get('isPriority') === ''
  }
  console.log(task)
  return redirect('/')
}