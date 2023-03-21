import { PATHS } from "@/utils";
import { Box, Link, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Sidebar() {
  return (
    <Box background="#F7F7F7" flex={1} h="100%">
      <VStack padding="32px">
        <Box></Box>
        <Box>
          <VStack>
            {PATHS.map((path) => (
              <Box key={path.route}>
                <Link as={NextLink} href={path.route}>
                  {path.display}
                </Link>
              </Box>
            ))}
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}
