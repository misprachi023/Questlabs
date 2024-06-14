import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Image,
  Heading,
  Flex,
} from "@chakra-ui/react";

const Features = () => {
  return (
    <Box bg="black" color="white" minH="100vh" p={5} pb={150}>
      <VStack spacing={10} alignItems="center">
        {/* Top Section */}
        <Text fontWeight="bold" fontSize={"lg"} lineHeight={0}>
          Features
        </Text>
        <Heading fontWeight="bold" fontSize={"40px"}>
          Robust & Scalable Platform & SDKs
        </Heading>
        <Text color={"gray"} pb={5}>
          Low-Code Dashboard, SDKs & APIs to drive product growth
        </Text>

        {/* Middle Section */}
        <HStack spacing={5} w="full" justifyContent="center" wrap="wrap">
          {/* AI Segmentation */}
          <Box
            w={"420px"}
            p={5}
            bg="gray.800"
            borderRadius="md"
            textAlign="center"
          >
            <Image
              src="https://www.questlabs.ai/assets/image1-y7VvY8jh.svg"
              alt="Graph"
            />
            <Heading fontSize={"2xl"}>Enterprise-Grade SDKs</Heading>
            <Text>
              Build on a solid foundation with our robust SDKs, designed for
              scalability and performance.
            </Text>
          </Box>

          <Box
            w={["570px"]}
            p={5}
            bg="gray.800"
            borderRadius="md"
            textAlign="center"
          >
            <Image
              w="400px"
              src="https://www.questlabs.ai/assets/image2-0qa_GPAl.svg"
              alt="Insights"
            />
            <Heading fontSize={"2xl"}>Fully Customizable to your Brand</Heading>
            <Text>
              Your brand, your way—personalize every aspect of your platform to
              stand out.
            </Text>
          </Box>
        </HStack>

        {/* Bottom Section */}
        <Flex justifyContent="center" flexWrap="wrap" mt={3}>
          {/* First Box */}
          <Box
            w={"320px"}
            bg="gray.800"
            borderRadius="md"
            m={3}
            pb={7}
            textAlign="center"
          >
            <Image
              src="https://www.questlabs.ai/assets/image3-m-7EaNFv.svg"
              alt="Product"
            />
            <Text fontSize="md" mt={2}>
              Plug & Play with Pre-Built Templates
            </Text>
            <Text fontSize="sm" mt={2}>
              Jumpstart your project using 100s of customi-zable templates for a
              seamless user experience.
            </Text>
          </Box>

          {/* Second Box */}
          <Box
            w={"320px"}
            bg="gray.800"
            borderRadius="md"
            m={3}
            textAlign="center"
          >
            <Image
              src="https://www.questlabs.ai/assets/image4-HZbCJwM5.svg"
              alt="Product"
            />
            <Text fontSize="md" mt={2}>
              Unlock AI-Powered Insights
            </Text>
            <Text fontSize="sm" mt={2}>
              Leverage advanced analytics to drive data-driven decisions and
              foster growth.
            </Text>
          </Box>

          {/* Third Box */}
          <Box
            w={"320px"}
            bg="gray.800"
            borderRadius="md"
            m={3}
            textAlign="center"
          >
            <Image
              src="https://www.questlabs.ai/assets/image5-67XH74ID.svg"
              alt="Product"
            />
            <Text fontSize="md" mt={2}>
              Stay Updated in Slack
            </Text>
            <Text fontSize="sm" mt={2}>
              Trigger Slack alerts to your team and automatically detect key
              intent signals.
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Features;
