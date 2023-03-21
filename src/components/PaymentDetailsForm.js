import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
} from "@chakra-ui/react";

export default function PaymentDetailsForm() {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      gap={"8px"}
      h="100%"
      overflow={"auto"}
    >
      <HStack flex="1">
        <Heading size={"sm"}>Add Payment Details for collection</Heading>
      </HStack>
      <HStack flex="1">
        <FormControl>
          <FormLabel>Bank Name</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl>
          <FormLabel>Account No.</FormLabel>
          <Input type="text" />
        </FormControl>
      </HStack>
      <HStack flex="1">
        <FormControl>
          <FormLabel>Account Type</FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl>
          <FormLabel>IFSC</FormLabel>
          <Input type="text" />
        </FormControl>
      </HStack>
      <HStack flex="1">
        <FormControl>
          <FormLabel>Add UPI ID</FormLabel>
          <Input type="text" />
        </FormControl>
      </HStack>
    </Box>
  );
}
