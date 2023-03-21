import { inventoryListState } from "@/state/inventorylist";
import { GST_SLAB, PER_VALUE } from "@/utils";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useRecoilState } from "recoil";

export default function InventoryForm() {
  const [inventoryList, setInventoryList] = useRecoilState(inventoryListState);
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const priceRef = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    setInventoryList([
      ...inventoryList,
      {
        name: nameRef.current.value,
        price: priceRef.current.value,
      },
    ]);
  };

  return (
    <form onSubmit={submitForm} style={{ flex: 1 }}>
      <Box display={"flex"} flexDirection="column" gap="16px">
        <HStack>
          <FormControl isRequired>
            <FormLabel>Item Name</FormLabel>
            <Input type="text" placeholder="Item Name" ref={nameRef} />
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
            <FormLabel>CGST</FormLabel>
            <Select placeholder="Select option">
              {GST_SLAB.map((opt) => (
                <option value={opt.value} key={`cgst_${opt.value}`}>
                  {opt.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>SGST</FormLabel>
            <Select placeholder="Select option">
              {GST_SLAB.map((opt) => (
                <option value={opt.value} key={`sgst_${opt.value}`}>
                  {opt.name}
                </option>
              ))}
            </Select>
          </FormControl>
        </HStack>
        <HStack>
          <FormControl>
            <FormLabel>UTGST</FormLabel>
            <Select placeholder="Select option">
              {GST_SLAB.map((opt) => (
                <option value={opt.value} key={`utgst_${opt.value}`}>
                  {opt.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Item Price </FormLabel>
            <Input type="number" placeholder="Item Price" ref={priceRef} />
          </FormControl>
        </HStack>
        <HStack>
          <Checkbox>Add to all business</Checkbox>
        </HStack>
        <HStack>
          <Button type="submit">Add to Inventory</Button>
        </HStack>
      </Box>
    </form>
  );
}
