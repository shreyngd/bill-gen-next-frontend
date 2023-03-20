import { Box, HStack, VStack } from "@chakra-ui/react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/SideBar";

export default function Layout({ children }) {
  return (
    <Box w="100vw" h="100vh" display="flex">
      <HStack w="100%" h="100%" display="flex" spacing={0}>
        <Sidebar></Sidebar>
        <Box display="flex" flex="5" h="100%" w="100%">
          <VStack h="100%" w="100%" spacing={0}>
            <Header></Header>
            {children}
          </VStack>
        </Box>
      </HStack>
    </Box>
  );
}
