import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";

export default function BusinessDetailsForm() {
  return (
    <form>
      <Box
        display={"flex"}
        flexDirection="column"
        gap={"8px"}
        h="100%"
        overflow={"auto"}
      >
        <HStack flex="1">
          <Heading size={"sm"}>Add Business Information</Heading>
        </HStack>
        <HStack flex="1">
          <FormControl>
            <FormLabel>Address Line 1</FormLabel>
            <Input type="text" />
          </FormControl>

          <FormControl>
            <FormLabel>Address Line 2</FormLabel>
            <Input type="text" />
          </FormControl>
        </HStack>
        <HStack flex="1" display="flex">
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>State</FormLabel>
            <Input type="text" />
          </FormControl>
        </HStack>
        <HStack flex="1" display="flex">
          <FormControl>
            <FormLabel>Pincode</FormLabel>
            <Input type="number" maxLength={6} />
          </FormControl>

          <FormControl>
            <FormLabel>Phone</FormLabel>
            <Input type="number" />
          </FormControl>
        </HStack>
        <HStack flex="1">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>

          <FormControl>
            <FormLabel>GSTIN/UIN</FormLabel>
            <Input type="text" />
          </FormControl>
        </HStack>
      </Box>
    </form>
  );
}
