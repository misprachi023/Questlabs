// src/App.js
import React from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import { FaBolt } from "react-icons/fa";

function Cover() {
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Box
      textAlign="center"
      pt={"20"}
      pb={"10"}
      bgGradient="linear-gradient(to right, black 0%, rgba(33, 117, 243, 0.82) 25%, rgba(144, 53, 255, 0.835) 90%, black 100%)"
    >
      <Heading
        fontSize={{ base: "2xl", md: "4xl" }}
        fontWeight="bold"
        mb={4}
        color={"white"}
      >
        Let's make sure your customers are <br /> getting the best experience
        possible
      </Heading>
      <Text color={"white"}>
        Create your account for free or book a demo today!
      </Text>
      <Button
        size="sm"
        color={"white"}
        background={
          "linear-gradient(to left, rgba(33, 117, 243, 0.82), rgba(144, 53, 255, 0.835), rgba(144, 53, 255, 0.843))"
        }
        mt={8}
      >
        Book a Call Today!
      </Button>
    </Box>
  );
}

export default Cover;
