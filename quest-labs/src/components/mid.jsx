// App.js

import React from "react";
import {
  Box,
  Heading,
  Text,
  useMediaQuery,
  Image,
  Flex,
} from "@chakra-ui/react";

function Mid() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box textAlign="center" p={10} bg={"black"} color="white">
      <Heading mb={4} fontSize={"50px"}>
        Let our AI find the best ways to <br /> engage & convert your users
      </Heading>
      <Text mb={8} color={"gray"} fontSize="lg">
        Generate Personalized In-App Text, Image, UI at Scale for Millions of
        Users without engineering team
      </Text>
      <Flex
        direction={isLargerThan768 ? "row" : "column"}
        align="center"
        justify="center"
        gap={4}
      >
        <Image
          src="https://www.questlabs.ai/assets/mini-segment-RCDnplfN.svg"
          alt=""
          boxSize="450px"
        />
        <Box
          textAlign={isLargerThan768 ? "left" : "center"}
          paddingLeft={isLargerThan768 ? 8 : 0}
          paddingTop={isLargerThan768 ? 0 : 4}
        >
          <Heading fontSize={isLargerThan768 ? "3xl" : "lg"} mb={2}>
            AI generated mini-segments to <br /> target in active user
          </Heading>
          <Text color={"gray"} fontSize={isLargerThan768 ? "md" : "sm"}>
            Our analytical models find common traits for users <br /> that are
            not active and creates thousands of <br /> segments to activate them
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Mid;
