import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Link,
  useColorModeValue,
  VStack,
  HStack,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const textColor = useColorModeValue("white", "whiteAlpha.900");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box bg={"black"} minH="100vh" color={textColor}>
      <Flex
        position={"sticky"}
        top={0}
        as="header"
        justifyContent="space-between"
        alignItems="center"
        className="blur"
        p={5}
        boxShadow="md"
      >
        <Box fontSize="xl" fontWeight="bold">
          <Flex alignItems="center">
            <img
              src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Frame%20578'%3e%3cg%20id='Vector'%3e%3cpath%20d='M19.3503%200.666016V6.88824L13.128%2013.1105V6.88824H6.90582V10.9962C6.90582%2012.1642%207.85211%2013.1105%209.02008%2013.1105H13.128L6.90582%2019.3327C3.46933%2019.3327%200.683594%2016.5469%200.683594%2013.1105V0.666016H19.3503Z'%20fill='white'/%3e%3cpath%20d='M19.3503%2013.1105L13.128%2013.1105L13.128%2019.3327H19.3503V13.1105Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
              alt=""
              style={{ marginRight: "8px" }}
            />
            Quest
          </Flex>
        </Box>
        {/* Hamburger Menu Icon */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={toggleMenu}
          icon={<Icon as={GiHamburgerMenu} />}
          aria-label="Open menu"
          variant="ghost"
          color="black"
        />
        {/* Menu Links */}
        <Flex
          display={{ base: isMenuOpen ? "flex" : "none", md: "flex" }}
          alignItems="center"
        >
          <Link href="#playbook" mx={2}>
            Playbook
          </Link>
          <Link href="#resources" mx={2}>
            Resources
          </Link>
          <Link href="#blogs" mx={2}>
            Blogs
          </Link>
        </Flex>
        {/* Buttons */}
        <Flex display={{ base: "none", md: "flex" }}>
          <Button
            border={"1px solid rgba(144, 53, 255, 0.835)"}
            variant="ghost"
            color={"white"}
            mx={2}
          >
            Get Started
          </Button>
          <Button
            color={"white"}
            background={
              "linear-gradient(to left, rgba(33, 117, 243, 0.82), rgba(144, 53, 255, 0.835), rgba(144, 53, 255, 0.843))"
            }
            mx={2}
          >
            Book Demo
          </Button>
        </Flex>
      </Flex>
      {/* Responsive Menu */}
      {isMenuOpen && (
        <Flex
          bg="black"
          color="white"
          py={4}
          flexDirection="column"
          alignItems="center"
          display={{ base: "flex", md: "none" }}
        >
          <Link href="#playbook" mx={2} my={1} onClick={toggleMenu}>
            Playbook
          </Link>
          <Link href="#resources" mx={2} my={1} onClick={toggleMenu}>
            Resources
          </Link>
          <Link href="#blogs" mx={2} my={1} onClick={toggleMenu}>
            Blogs
          </Link>
          <Button
            border={"1px solid rgba(144, 53, 255, 0.835)"}
            variant="ghost"
            color={"white"}
            mx={2}
            mt={4}
            onClick={toggleMenu}
          >
            Get Started
          </Button>
          <Button
            color={"white"}
            background={
              "linear-gradient(to left, rgba(33, 117, 243, 0.82), rgba(144, 53, 255, 0.835), rgba(144, 53, 255, 0.843))"
            }
            mx={2}
            mt={4}
            onClick={toggleMenu}
          >
            Book Demo
          </Button>
        </Flex>
      )}
      {/* Main Content */}
      <Box
        backgroundRepeat={"no-repeat"}
        backgroundSize={"contain"}
        backgroundPosition={"center"}
        backgroundImage={
          "url(https://www.questlabs.ai/assets/leftSideDots-F2-L56Gr.svg)"
        }
      >
        <Box width={"60%"} margin={"auto"}>
          <VStack p={10} spacing={10} mt={20} textAlign="center" px={5}>
            <Heading as="h1" size="2xl">
              Transform Your Product with Intelligent In-App Experiences
            </Heading>
            <Text fontSize="xl">
              Empower growth & Marketing Teams to Boost Engagement and
              Conversion 10x faster without data or engineering team
            </Text>
            <HStack
              zIndex={100}
              pos={"relative"}
              className="blur"
              as="form"
              spacing={4}
              maxW="lg"
              w="full"
            >
              <Input
                zIndex={100}
                height={"60px"}
                placeholder="Enter your mail address"
                size="lg"
                _placeholder={{ color: "gray.500" }}
                color="white"
              />
              <Button
                pos={"absolute"}
                color={"white"}
                border={"1px solid rgba(144, 53, 255, 0.835)"}
                right={15}
                size="lg"
                colorScheme="ghost"
              >
                Book Demo
              </Button>
            </HStack>
            <Text fontSize="sm" color="whiteAlpha.700" pb={20}>
              No credit card required
            </Text>
            <img
              w="full"
              src="https://www.questlabs.ai/assets/heroImage-IehvbV8o.svg"
              alt=""
            />
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
