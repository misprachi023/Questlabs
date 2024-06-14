import React, { useState } from "react";
import { Box, Flex, Text, Image, Heading } from "@chakra-ui/react";
const tabData = {
  Onboarding: {
    heading: "Personalized Onboarding",
    text: "Crafting personalized quizzes allows us to collect targeted data from users while offering them an interactive and enjoyable experience.",
    image: "https://www.questlabs.ai/assets/useCaseUi-DVfnDi_9.svg",
  },
  Quizzes: {
    heading: "Personalized Quizzes",
    text: "Crafting personalized quizzes allows us to collect targeted data from users while offering them an interactive and enjoyable experience.",
    image: "https://www.questlabs.ai/assets/useCaseSurvey-kJvg_Obl.svg",
  },
  Challenges: {
    heading: "Personalized Challenges",
    text: "Crafting personalized quizzes allows us to collect targeted data from users while offering them an interactive and enjoyable experience.",
    image: "https://www.questlabs.ai/assets/useCaseoffers-ONbw6XxL.svg",
  },
  Offers: {
    heading: "Personalized Offers",
    text: "Crafting personalized quizzes allows us to collect targeted data from users while offering them an interactive and enjoyable experience.",
    image: "https://www.questlabs.ai/assets/useCaseQuiz-vEssOd0h.svg",
  },
  Survey: {
    heading: "Personalized Surveys",
    text: "Crafting personalized quizzes allows us to collect targeted data from users while offering them an interactive and enjoyable experience.",
    image: "https://www.questlabs.ai/assets/useCaseChallenges-GmsNo7d3.svg",
  },
  PersonalizedUI: {
    heading: "Personalized UI",
    text: "Crafting personalized quizzes allows us to collect targeted data from users while offering them an interactive and enjoyable experience.",
    image: "https://www.questlabs.ai/assets/useCaseOnboarding-8yfun4_i.svg",
  },
};
const InteractiveUI = () => {
  const [activeTab, setActiveTab] = useState("Challenges");
  return (
    <Box
      bg="black"
      p={8}
      color="white"
      textAlign="center"
      justifyContent={"center"}
    >
      <Text color="gray">Dynamic & Intelligent experiences</Text>
      <Heading color="white" my={4}>
        Deliver Delightful In-App Experiences that drive <br /> Adoption,
        Engagement & Retention
      </Heading>
      <Text color="gray">
        50+ Pre-Built In-app Components to get started within minutes
      </Text>
      <Flex
        direction="column"
        justify="center"
        align="center"
        bg="gray.900"
        color="white"
        h={600}
        borderRadius="15px"
        boxShadow="md"
        p={5}
        m={5}
        sx={{
          "@media (max-width: 768px)": {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <Flex mb={5}>
          {Object.keys(tabData).map((tab) => (
            <Box
              key={tab}
              px={47}
              py={5}
              cursor="pointer"
              bg={activeTab === tab ? "gray.800" : "gray.800"}
              borderRadius={"8px"}
              _hover={{ bg: "gray.800" }}
              onClick={() => setActiveTab(tab)}
            >
              <Text
                sx={{
                  textDecoration: activeTab === tab ? "underline" : "none",
                  textDecorationColor: "blue",
                  textDecorationThickness: "2px",
                  transition: "text-decoration-color 0.3s ease",
                }}
              >
                {tab}
              </Text>
            </Box>
          ))}
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          bg={"#000"}
          borderRadius={"15px"}
          p={10}
        >
          <Box ml={5} p={0}>
            <Heading fontSize={"2xl"} mb={2}>
              {" "}
              {tabData[activeTab].heading}
            </Heading>
            <Text color={"gray"}>{tabData[activeTab].text}</Text>
          </Box>
          <Image
            src={tabData[activeTab].image}
            alt={activeTab}
            boxSize="350px"
            w={"900px"}
            objectFit="cover"
          />
        </Flex>
      </Flex>
    </Box>
  );
};
export default InteractiveUI;
