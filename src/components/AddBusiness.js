import { businessListState } from "@/state/inventorylist";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import ShopImg from "../assets/shop-icon.png";
import BusinessDetailsForm from "./BusinessDetailsForm";
import PaymentDetailsForm from "./PaymentDetailsForm";

export default function AddBusiness({ done }) {
  const [step, setStep] = useState("add");
  const [businessList, setBusinessList] = useRecoilState(businessListState);

  const [name, setName] = useState("");

  const submitName = (e) => {
    e.preventDefault();
    setStep("info");
  };

  const submitInfo = () => {
    setStep("payment");
  };

  const submitPayment = () => {
    setBusinessList([
      ...businessList,
      {
        businessName: name,
      },
    ]);
    done();
  };
  return (
    <Box p="32px 36px">
      {step === "add" && (
        <VStack spacing={8} mt="100px">
          <Box w="30%">
            <Image src={ShopImg} alt="" />
          </Box>
          <Box>
            <form onSubmit={submitName}>
              <Box
                display="flex"
                w="400px"
                flexDirection="column"
                gap={4}
                alignItems="center"
              >
                <FormControl isRequired>
                  <FormLabel>Add a business</FormLabel>
                  <Input
                    type="text"
                    placeholder="Business Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <Button type="submit" width="150px">
                  Start
                </Button>
              </Box>
            </form>
          </Box>
        </VStack>
      )}
      {step === "info" && (
        <Box display={"flex"} flexDirection="column" gap={"24px"}>
          <BusinessDetailsForm />

          <Box
            alignItems={"center"}
            justifyContent={"space-around"}
            w="100%"
            display={"flex"}
          >
            <Button type="submit" width="150px" onClick={submitInfo}>
              Back
            </Button>
            <Button type="submit" width="150px" onClick={submitInfo}>
              Next
            </Button>
          </Box>
        </Box>
      )}
      {step === "payment" && (
        <Box display={"flex"} flexDirection="column" gap={"24px"}>
          <PaymentDetailsForm />

          <Box
            alignItems={"center"}
            justifyContent={"space-around"}
            w="100%"
            display={"flex"}
          >
            <Button type="submit" width="150px" onClick={submitPayment}>
              Back
            </Button>
            <Button type="submit" width="150px" onClick={submitPayment}>
              Next
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
