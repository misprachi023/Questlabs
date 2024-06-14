import React from "react";
import { Box, Flex, Heading, Image, Text, Stack } from "@chakra-ui/react";

const CustomUI = () => {
  return (
    <Box bg="black" color="white" py={10} px={5}>
      <Stack
        spacing={8}
        align="center"
        textAlign="center"
        maxW="1200px"
        mx="auto"
      >
        <Heading as="h1" size="xl">
          AI-Driven Personalized UI
        </Heading>
        <Text fontSize="lg" maxW="600px">
          Enhance your app with AI-driven personalized UI, seamlessly integrated
          with your data stack for a tailored user experience.
        </Text>
        <Image
          src="https://www.questlabs.ai/assets/logoWithLines-L5NiNPgQ.svg"
          alt="Integration Logos"
        />
        <Flex direction="column" align="center">
          <Image
            src="data:image/svg+xml,%3csvg%20width='984'%20height='174'%20viewBox='0%200%20984%20174'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M491.49%200V94.2075C491.49%20102.492%20484.774%20109.207%20476.49%20109.207H16C7.71573%20109.207%201%20115.923%201%20124.207V174'%20stroke='url(%23paint0_radial_4670_56515)'%20stroke-width='1.5'/%3e%3cpath%20d='M492.51%200V94.2075C492.51%20102.492%20499.226%20109.207%20507.51%20109.207H968C976.284%20109.207%20983%20115.923%20983%20124.207V174'%20stroke='url(%23paint1_radial_4670_56515)'%20stroke-width='1.5'/%3e%3cpath%20d='M330.371%20110.295V171.147'%20stroke='url(%23paint2_radial_4670_56515)'%20stroke-width='1.5'/%3e%3cpath%20d='M654.646%20110.295V171.147'%20stroke='url(%23paint3_radial_4670_56515)'%20stroke-width='1.5'/%3e%3cdefs%3e%3cradialGradient%20id='paint0_radial_4670_56515'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(-211.104%20182.557)%20rotate(-15.2854)%20scale(985.777%205132.35)'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='0.496531'%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cradialGradient%20id='paint1_radial_4670_56515'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(1195.1%20182.557)%20rotate(-164.715)%20scale(985.777%205132.35)'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='0.496531'%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cradialGradient%20id='paint2_radial_4670_56515'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(330.205%20171.147)%20rotate(-89.1183)%20scale(108.692%2031.165)'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='0.496531'%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cradialGradient%20id='paint3_radial_4670_56515'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(654.48%20171.147)%20rotate(-89.1183)%20scale(108.692%2031.165)'%3e%3cstop%20stop-color='white'%20stop-opacity='0'/%3e%3cstop%20offset='0.496531'%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='white'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e"
            alt="Central Node"
            mb={5}
          />
          <Flex direction="row" justify="center" flexWrap="wrap" mb={10} mt={0}>
            <Flex
              direction="column"
              align="center"
              m={4}
              border={"1px solid white"}
              borderRadius={"10px"}
            >
              <Image
                src="https://www.questlabs.ai/assets/prod1-zH-HEurn.svg"
                alt="AI Segmentation"
                boxSize={["150px", "200px", "250px"]}
                mb={3}
              />
              <Text>Onboarding Components</Text>
            </Flex>
            <Flex
              direction="column"
              align="center"
              m={4}
              border={"1px solid white"}
              borderRadius={"10px"}
            >
              <Image
                src="https://www.questlabs.ai/assets/prod2-9HJtgJO1.svg"
                alt="Analytics & Insights"
                boxSize={["150px", "200px", "250px"]}
                mb={3}
              />
              <Text>User Data Collection</Text>
            </Flex>
            <Flex
              direction="column"
              align="center"
              m={4}
              border={"1px solid white"}
              borderRadius={"10px"}
            >
              <Image
                src="https://www.questlabs.ai/assets/product3-JMywLrns.svg"
                alt="Decision Agents"
                boxSize={["150px", "200px", "250px"]}
                mb={3}
              />
              <Text>Dynamic Enagagement</Text>
            </Flex>
            <Flex
              direction="column"
              align="center"
              m={4}
              border={"1px solid white"}
              borderRadius={"10px"}
            >
              <Image
                src="https://www.questlabs.ai/assets/prod4-D2yWThr4.svg"
                alt="AI Growth Campaign"
                boxSize={["150px", "200px", "250px"]}
                mb={3}
              />
              <Text>Personalized Ui offers</Text>
            </Flex>
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
};

export default CustomUI;
