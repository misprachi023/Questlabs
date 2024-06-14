import React from "react";
import { Box, Flex, Stack, Link, Text, Divider } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="black" color="white" py={20} px={5}>
      <Flex justify="space-around">
        <Box marginRight={[0, 28]} mb={[10, 0]}>
          <Box mb={2}>
            <img
              src="https://www.questlabs.ai/assets/brandLogo-_2OygUFf.png"
              alt="Quest Labs Logo"
              width="50"
            />
          </Box>
          <Text>Quest Labs INC</Text>
        </Box>

        <Flex
          direction={["column", "row"]}
          wrap="wrap"
          justify="space-between"
          w="full"
        >
          <Box mx={[0, 10]} mb={[5, 0]}>
            <Text fontWeight="bold" mb={2}>
              Resources
            </Text>
            <Stack>
              <Link href="#">Blog</Link>
              <Link href="#">Newsletter</Link>
              <Link href="#">Playbook</Link>
              <Link href="#">Docs</Link>
            </Stack>
          </Box>
          <Box mx={[0, 10]} mb={[5, 0]}>
            <Text fontWeight="bold" mb={2}>
              Support
            </Text>
            <Stack>
              <Link href="#">Contact</Link>
              <Link href="#">Join Quest Club</Link>
              <Link href="#">Sales Partner</Link>
            </Stack>
          </Box>
          <Box mx={[0, 10]} mb={[5, 0]}>
            <Text fontWeight="bold" mb={2}>
              Legal
            </Text>
            <Stack>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Use</Link>
              <Link href="#">Cookie Policy</Link>
            </Stack>
          </Box>
        </Flex>
      </Flex>
      <Divider my={8} borderColor="gray.700" />
      <Text fontSize="sm">
        &copy; 2024 Quest Labs INC. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
