import { PER_VALUE } from "@/utils";
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";

const Inventory = () => {
  return (
    <VStack w="100%" h="100%" p="32px 36px" spacing="40px">
      <Box w="100%">
        <Box>
          <Heading>Inventory Management</Heading>
        </Box>
        <Box>
          <Text>
            Add items to your invntory so that you easily add them while making
            invoices
          </Text>
        </Box>
      </Box>
      <Box display={"flex"} w={"100%"}>
        <form onSubmit={console.log} style={{ flex: 1 }}>
          <Box display={"flex"} flexDirection="column" gap="16px">
            <HStack>
              <FormControl isRequired>
                <FormLabel>Item Name</FormLabel>
                <Input type="text" placeholder="Item Name" />
              </FormControl>
              <FormControl>
                <FormLabel>Item Description</FormLabel>
                <Input type="text" placeholder="Item description" />
              </FormControl>
            </HStack>
            <HStack>
              <FormControl>
                <FormLabel>HSN/ASC Number</FormLabel>
                <Input type="text" placeholder="" />
              </FormControl>
              <FormControl>
                <FormLabel>Per</FormLabel>
                <Select placeholder="Select option">
                  {PER_VALUE.map((opt) => (
                    <option value={opt} key={opt}>
                      {opt}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </HStack>
            <HStack>
              <FormControl>
                <FormLabel>Item Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>Item Description</FormLabel>
                <Input type="text" />
              </FormControl>
            </HStack>
          </Box>
        </form>
        <Box flex={1}></Box>
      </Box>
    </VStack>
  );
};

export default Inventory;
