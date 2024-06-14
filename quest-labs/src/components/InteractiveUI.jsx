import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  useBreakpointValue,
} from "@chakra-ui/react";

const tabData = {
  Onboarding: {
    heading: "Personalized Onboarding",
    text:
      "Crafting personalized quizzes allows us to collect targeted data from users while offering them an interactive and enjoyable experience.",
    image: "https://www.questlabs.ai/assets/useCaseUi-DVfnDi_9.svg",
  },
  Quizzes: {
    heading: "Personalized Quizzes",
    text:
      "Crafting personalized quizzes allows us to collect targeted data from users while offering them an interactive and enjoyable experience.",
    image: "https://www.questlabs.ai/assets/useCaseSurvey-kJvg_Obl.svg",
  },
  Challenges: {
    heading: "Personalized Challenges",
    text:
      "Crafting personalized quizzes allows us to collect targeted data from users while offering them an interactive and enjoyable experience.",
    image: "https://www.questlabs.ai/assets/useCaseoffers-ONbw6XxL.svg",
  },
  Offers: {
    heading: "Personalized Offers",
    text:
      "Crafting personalized quizzes allows us to collect targeted data from users while offering them an interactive and enjoyable experience.",
    image: "https://www.questlabs.ai/assets/useCaseQuiz-vEssOd0h.svg",
  },
  Survey: {
    heading: "Personalized Surveys",
    text:
      "Crafting personalized quizzes allows us to collect targeted data from users while offering them an interactive and enjoyable experience.",
    image: "https://www.questlabs.ai/assets/useCaseChallenges-GmsNo7d3.svg",
  },
  PersonalizedUI: {
    heading: "Personalized UI",
    text:
      "Crafting personalized quizzes allows us to collect targeted data from users while offering them an interactive and enjoyable experience.",
    image: "https://www.questlabs.ai/assets/useCaseOnboarding-8yfun4_i.svg",
  },
};

const InteractiveUI = () => {
  const [activeTab, setActiveTab] = useState("Challenges");
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Box bg="black" p={8} color="white" textAlign="center">
      <Text color="gray">Dynamic & Intelligent experiences</Text>
      <Heading color="white" my={4}>
        Deliver Delightful In-App Experiences that drive <br /> Adoption,
        Engagement & Retention
      </Heading>
      <Text color="gray">
        50+ Pre-Built In-app Components to get started within minutes
      </Text>
      {isMobile ? (
        <Accordion
          allowToggle
          width="100%"
          maxWidth={{ base: "100%", md: "800px", lg: "1000px" }}
          mx="auto"
          mt={8}
        >
          {Object.keys(tabData).map((tab) => (
            <AccordionItem key={tab} border="none">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _focus={{ boxShadow: "none" }}
                      onClick={() => handleTabClick(tab)}
                      bg={activeTab === tab ? "gray.800" : "gray.700"}
                      _hover={{ bg: "gray.800" }}
                    >
                      <Box flex="1" textAlign="left">
                        {tab}
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    p={0}
                    bg="#000"
                    borderRadius="15px"
                    color="white"
                    pb={4}
                    display={activeTab === tab ? "block" : "none"}
                  >
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      p={10}
                      textAlign="left"
                    >
                      <Box ml={5} flex="1">
                        <Heading fontSize="2xl" mb={2}>
                          {tabData[tab].heading}
                        </Heading>
                        <Text color="gray">{tabData[tab].text}</Text>
                      </Box>
                      <Image
                        src={tabData[tab].image}
                        alt={tab}
                        boxSize="350px"
                        w="100%"
                        maxW="400px"
                        objectFit="cover"
                        display={{ base: "none", md: "block" }}
                      />
                    </Flex>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <Flex
          direction="column"
          justify="center"
          align="center"
          bg="gray.900"
          color="white"
          borderRadius="15px"
          boxShadow="md"
          p={5}
          m={5}
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
      )}
    </Box>
  );
};

export default InteractiveUI;
