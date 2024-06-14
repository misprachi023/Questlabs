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

function Miid() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box textAlign="center" bg={"black"} color="white">
      <Flex
        direction={isLargerThan768 ? "row" : "column"}
        align="center"
        justify="center"
        gap={4}
      >
        <Box
          textAlign={isLargerThan768 ? "left" : "center"}
          paddingLeft={isLargerThan768 ? 8 : 0}
          paddingTop={isLargerThan768 ? 0 : 4}
        >
          <Heading fontSize={isLargerThan768 ? "3xl" : "lg"} mb={2}>
            Our models generate AI <br /> variants to optimize text, <br />{" "}
            images, and UI layouts for each <br /> segment.
          </Heading>
          <Text color={"gray"} fontSize={isLargerThan768 ? "md" : "sm"}>
            Easily find winning variants among millions of <br /> variants to
            power users across the customer <br /> journey
          </Text>
        </Box>
        <Image
          src="https://www.questlabs.ai/assets/AiGenerate-JqljUpyB.svg"
          alt=""
          boxSize="450px"
        />
      </Flex>
    </Box>
  );
}

export default Miid;
