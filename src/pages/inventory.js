import InventoryForm from "@/components/InventoryForm";
import InventoryList from "@/components/InventoryListView";
import { inventoryListState } from "@/state/inventorylist";
import { GST_SLAB, PER_VALUE } from "@/utils";
import {
  Box,
  Button,
  Checkbox,
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
import { useRecoilState } from "recoil";

const Inventory = () => {
  const [inventoryList, setInventoryList] = useRecoilState(inventoryListState);
  console.log(inventoryList);
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
      <Box display={"flex"} w={"100%"} gap="20px">
        <InventoryForm></InventoryForm>
        <Box flex={1}>
          <InventoryList></InventoryList>
        </Box>
      </Box>
    </VStack>
  );
};

export default Inventory;
