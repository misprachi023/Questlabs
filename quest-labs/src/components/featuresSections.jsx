import React from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaMagic,
  FaChartLine,
  FaPlug,
  FaCogs,
  FaSyncAlt,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    title: "AI Personalization",
    description:
      "AI-driven personalization enhances user engagement with unique experiences.",
    icon: FaMagic,
  },
  {
    title: "Real-Time Insights",
    description:
      "Utilize our analytics for instant insights on user behavior and app performance.",
    icon: FaChartLine,
  },
  {
    title: "Seamless SDK Integration",
    description:
      "Effortlessly integrate with our robust, cross-platform SDKs for maximum compatibility.",
    icon: FaPlug,
  },
  {
    title: "Dynamic Content",
    description:
      "Keep content engaging with AI-powered optimization, adapting to user preferences.",
    icon: FaCogs,
  },
  {
    title: "Highly Scalable",
    description:
      "Quest's scalable solutions ensure seamless growth without performance compromise.",
    icon: FaSyncAlt,
  },
  {
    title: "Robust Security",
    description:
      "Quest ensures security with data protection, compliance, and secure transactions.",
    icon: FaShieldAlt,
  },
];

const FeaturesSection = () => {
  const bgColor = useColorModeValue("black", "gray.900");
  const textColor = useColorModeValue("white", "whiteAlpha.900");

  return (
    <Box p={5} bg={bgColor} color={textColor}>
      <SimpleGrid columns={[1, null, 2, 3]} spacing={10}>
        {features.map((feature) => (
          <Box
            key={feature.title}
            p={10}
            borderRadius="20px"
            bg="gray.800"
            textAlign="center"
            boxShadow="lg"
          >
            <Icon as={feature.icon} w={5} h={5} mb={4} />
            <Text fontWeight="bold" fontSize="xl" mb={2}>
              {feature.title}
            </Text>
            <Text fontSize="md" color={"gray.400"}>
              {feature.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FeaturesSection;
