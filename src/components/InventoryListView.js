import { inventoryListState } from "@/state/inventorylist";
import { Box, Text } from "@chakra-ui/react";
import { useRecoilState } from "recoil";

export default function InventoryList() {
  const [inventoryList, setInventoryList] = useRecoilState(inventoryListState);
  const deleteFromIndex = (index) => {
    const newList = [
      ...inventoryList.slice(0, index),
      ...inventoryList.slice(index + 1),
    ];
    setInventoryList(newList);
  };
  return (
    <Box w="100%">
      <Box
        backgroundColor="#F7F7F7"
        w="100%"
        h="40px"
        display="flex"
        padding="10px"
        borderRadius={6}
      >
        <Box w="30%" textAlign={"center"}>
          <Text fontWeight={600}>Name</Text>
        </Box>
        <Box w="30%" textAlign={"center"}>
          <Text fontWeight={600}>Price</Text>
        </Box>
        <Box w="30%" textAlign={"center"}>
          <Text fontWeight={600}>HSN/ASC</Text>
        </Box>
        <Box w="10%" textAlign={"center"}>
          <Text fontWeight={600}></Text>
        </Box>
      </Box>
      {inventoryList.map((item, index) => {
        return (
          <Box key={item.name} display="flex" padding="10px">
            <Box w="30%" textAlign={"center"}>
              <Text fontWeight={600}>{item.name}</Text>
            </Box>
            <Box w="30%" textAlign={"center"}>
              <Text fontWeight={600}>{item.price}</Text>
            </Box>
            <Box w="30%" textAlign={"center"}>
              <Text fontWeight={600}>{item.hsnId}</Text>
            </Box>
            <Box
              w="10%"
              textAlign={"center"}
              cursor="pointer"
              onClick={() => deleteFromIndex(index)}
            >
              <Text fontWeight={600}>X</Text>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
