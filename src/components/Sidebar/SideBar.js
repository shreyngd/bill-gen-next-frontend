import { PATHS } from "@/utils";
import { Box, Link, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Sidebar() {
  const path = PATHS.map((path) => (
    <Box key={path.route}>
      <Link as={NextLink} href={path.route}>
        {path.display}
      </Link>
    </Box>
  ));

  console.log(path);
  return (
    <Box background="#F7F7F7" flex={1} h="100%">
      <VStack padding="32px">
        <Box></Box>
        <Box>
          <VStack>{path}</VStack>
        </Box>
      </VStack>
    </Box>
  );
}

const a = ["a", "b", "c"];
a.forEach((e) => console.log(e));
