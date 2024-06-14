import React from "react";
import {
  Flex,
  Box,
  Text,
  HStack,
  Heading,
  VStack,
  Image,
} from "@chakra-ui/react";

const reviewsData = [
  {
    text: "Quest is a powerful growth engine that powered our entire Quest’s experience in our IRL event as well as mobile commerce experience. Our engagement & revenue grew as a result of seamless integration with Quest.",
    author: "Kevin",
    role: "Co-Founder",
    imageSrc: "https://www.questlabs.ai/assets/kevin-2EGjEzBI.jpg",
    Image: "https://www.questlabs.ai/assets/bitazza-kEZ2cS7b.svg",
  },
  {
    text: "Quest transformed our data-driven strategies. What was once a challenging process of connecting dots is now a streamlined flow of insights to action. Our campaigns are now more targeted, and we understand our users better.",
    author: "Sriya",
    role: "Founder",
    imageSrc: "https://www.questlabs.ai/assets/sriya-W519CsRs.jpg",
    Image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAABkCAMAAABtoFaMAAAC6FBMVEX///8DAwP7+/sEBAQBAQH8/PwCAgIAAAD9/f3+/v4FBQXb29sGBgb09PTf398ODg4HBwchISEJCQnHx8fe3t7x8fH6+vr5+fkfHx8ICAgaGhry8vKsrKySkpIeHh7z8/NhYWGlpaX4+Ph2dnb29vYREREjIyOioqKmpqZVVVUgICDw8PD39/fY2NiDg4NNTU1BQUGnp6ccHBzj4+MMDAxUVFQYGBikpKTi4uJ3d3efn5/Ozs4nJycLCwvd3d1SUlLh4eEKCgp8fHwqKirs7Oy0tLSqqqoUFBQNDQ0kJCRWVlbk5OQ6OjqgoKBAQEDKysqcnJxYWFgpKSmGhob19fVtbW3p6enW1taQkJCenp5CQkIbGxtQUFDc3NwQEBChoaGpqamBgYGCgoIuLi5gYGDq6uqLi4tOTk5paWlRUVFycnLv7+/IyMhqamrr6+sVFRUsLCzo6Ohra2s4ODjPz89+fn43Nzfu7u4xMTFmZmZeXl4oKCiamppnZ2fFxcV6enpKSkpfX1/Nzc2jo6PX19fExMRFRUWwsLAdHR27u7vZ2dmZmZnS0tKbm5uRkZGTk5MiIiIyMjJkZGRISEjDw8M1NTVMTEw+Pj6JiYk0NDTR0dFTU1NGRka1tbWAgIDBwcHm5uaWlpYmJiYvLy8wMDCysrJzc3NlZWXg4OC4uLh5eXnT09N7e3szMzNJSUkXFxc7OztcXFyIiIglJSVaWlpvb2/Jycm9vb2MjIzV1dWHh4ddXV0tLS2zs7NXV1eurq4SEhIPDw+EhIRsbGyKiopubm6xsbEWFhZLS0va2toTExO5ubmoqKhHR0c5OTlDQ0M2Njarq6sZGRlERES/v788PDy6urq8vLx4eHgrKyvn5+d1dXXGxsbQ0NB0dHStra2Ojo7t7e19fX3CwsKUlJQ/Pz9PT0+2trbMzMyFhYVwcHBiYmKvr69bW1uYmJjLy8s9PT2VlZXAwMBxcXFZWVm+vr6Pj4/U1NRgOgjZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAL4UlEQVR4nO1ZZXQdNxa+MyPpSuOJPQE/U1rXruMaY8d2EjuJ7cQOp2FmZmyoacNUZmZm5u2Wmblb5i4z7/7dczWP7Pdix25OT7NH38lpx3qS5n66n+690gAYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGPwfQ8ZBwVEDFTa5VXPSxvYhbfso4k7orLkyPQ5lNMvR4fWy0sDklr6VOenp6aW57TKQUHtTVeaxYWSO2tb3vFTohE5+bCgofqOELO73CfBoq4Ta5tmZJfd/NKU9GUho8JFhDAzrp54MP3XiEs4KzHZwRQveDSORCeya2z7v1Hq0hBCOhuU4jsBB03/qxG14HF1BZmNmHEcJPeah5WBhl8Pg3S3e356FaGHhDZ0OFz8KFMADaGmDBZ4ec7iEHmna34fNO2tcZWVl5abZjDESz95WwU0d5jIcol9bww/xU5svlDCQIUOmnXRq53kLzOTUU6af/jAKZJj185jSJddzSDumfcUJih6kkuHXqqCD0j/EutrBCsr4/BgZDlwPCf4bN4THvzgJbOiNTiQeVQ2Nkuwsb5AwuAoFOvgE2EGHEP1f5nYh0zJiESQwMBSbXWZQQ5ecED3nR9ptaoX89AL6MaO1LSFOiWcKPcWY2zSDKksvo4noOREK5DYUAu+diAIFLog6vBO87aBnBixECy3sG/hbcVAHd18zKLPks8t6XwVKN0qovaupacuqgQAHFo6u2DthCvkG5i6bs6Ekc9SJF+WVQthTXEH12ae+V5hZckvxjMHhVgXfNTU1ff/FY6CmDGhsziy58I+/VZGdoLiCs2ZM3Nb12Avu/fOOdXGxOg4cumuRPzQQGVr4zBHgzeFnyFDglZE/D14ejXrOxDF6NThcojUxE87zkTF0yoFD7qpIfGR4xrmKhisJKReNjLaOfDyYU0IKktXfwpoNwY8Ml4e1qiQM7JsVTan390+aWDjsRoshPgaFKBiOWBph2XneEmgNBTbryCLhJYGO73q+77q+g2dsJjs4PMay/Hr8051o+Z6PD3cBSB+Hju+5nue5vidwbwEQ9bPTUPie67qu42VZuEWzkDDX97KG4P6UNPQ9x7Ic38dr9D5TIBf6aGXREMfxfIETknhcgf0Uyby5DNaigwL3RzblD+F9veZ9IU3PYRFaIpIwGDrY9STd3F3ra+FidB3HxwqwYQm65HqCxYTDvgQOciMyizmBSwX9u55YBP4W+P0D6NMvNL2DvwJi3qURLUsEIYuRHfNSEz3O4ZdIxnwK8Ik2ZE6kzw/Z38v0/l4OEjicSXJiuH5i3apxFjJ0cSPwMG9ETwht8tcAX7lE2hu3c+2cD1BYeC7VukOrUDCG7vbXGt/ppnsuifJGRNcRWF+V7dJcAi/VIp9eL5hgmLV4+coLXT1kUcSXMdhwm5b59QA5WujzqsPEO8772BBIRdIcOkjv3S1gK+BXooUCRy+lBHznG+SB56ophAW8hYVVEx89rus3AP9Bh6F3K2X90mU1eAXx49AHLey2Yp8NEv6aTW8ZlU9SDvO2cP0xDbnpmyt05vQpc3J4CV1Mu2u6BAXDupEWTktI/goKtpPMB5WBDadoL80ML07HeZfoSAR8zVYUpMLfAefQU6eJWYryrQ3zkSQ/Aewob/wD1f/5toQX0bJwE2SEuJRw7bJg+SU8iNv2gVJSZsAX5KKaG2K8Gd7/XyB+ZYv1xE9roduVOKuHHmLDaHQEjqJI0Urmb2qZ/5MsuVOPvbiT/mY4ZGVjY2Pjnkm09OjiaJCKw2gkcb8JZbZth+TqbGQOnhLlbeGTIEN0XufwMsWBqqWguG2HiFowd8Nxn0OIS9sOwUbinZUCMsLbwhshX9LOohrEwh3BHhi/swBszu0Qh9doyOyEIwaHU9BBhr+gvJhbQkKvp3k7VadGEJR+2Q2k2NxRJKdJ5BO9+S4mp15MOZ14M7Q2a3kpZcMMHVffGTaN5gzpYiUYI4NiRS5Io9WN483wOYqRtFv7a97H6MitFHAaoiDjGEa9snNaUVCQc4aWOXHjYaHPCMJ+x3mz8HnMovNYv4PaPDrqMSx8aFFvwqIrmmlHn6jLBh3zF8cmOcdjjDpnv3tXzzvosifsGlqX1eOLVt1CYa8Fbz1TwLunNj3gTWoCWLpr7Nrt2g2JvDkM09peASEpQ/CK/mNcEAU6729EFH1Tg7C0hrZ6SwjcGuFt4dXRFCNhI3oCgwQ08rThPFzYKTgw+cMPqNVL5F0cDG/JWyrY1/S3ERYi8w7Fe4nefpdQfwX5OqJ75eHSoKO8RS+NVy/4ddNAUjLNf6bmzdwIBGNOzN8WTo3WFAryi5EJh47xZNOsWjJDwuBHyHjhCs2iBW868/EE3hLOuY9earkChZeMt4J12WSwd9kzxcXFxX0n9tO2XKG3XMfj2uw7xtRWV4+ZRqcBFa1YE/xtYUUkjzl4fKyWUiBnDiLx+752+y2ltLnH90MmyNM1V45dRm5pwfu4RN4cbh2CzKLMPe+jWx+luNaad5AdE2S4KVxfdiKPhRE5FHIYr7dOxVe7uofxZfc1B6sjca0Fb2JZMGzqvTW6zEIXrwMbcpp13L158sfVGTC2VTxPxlvC4PVaww98+4/PM+AeKgoSefcNeFth0CZlaO0LFNbhuiVD8ZYX6BJSdOHwbkKhmIx3cCaVcxfs7KVj3meSwwB00cJ/UVoOwY72eds2XIcuCjyerM6AuiS8FUwbofdlHPRstNA/oE6NQUH+JNJmrzuAK4LN19n6ZJ2Et6TKhpQiIbUrjUobDPCgLuLKIaTAhsnE22+bt4IPtbRL6dGG25PwptWkwio+FAv6dzOl2yPBGzicqg1aCBk25zwE3016ZB0k5S1VaM8LYNtK2vmwRTO8G+A+elh/Mg0JwdXa36+D3QZvCG2gzLyVU8Us5aW0gLNLW5zIJPxG74S64WNP0Ji/fwJFNsQ1ekmPCO9hQeXck5SuIHc5YvZbyXSuQD2IYnI4HK4lhuTvCnrwyqn8goG6FvAOtOlvsG8mquRvbsMwXRytL403TEKtLoBeHRrdfRwe0eM/pRPgkeCtQJ5IayvcJ689p3z835vR9Rz8S6RObcF7KvoOXv7+GFut3jGE5tugOOmUrv1IfuUbAjXuTrm7TZ1fpg9C91CY3FUV1BU3lh+ImWbDBN25GAoywpiiA7zAp/Jp1BHgDRwucYTQe0n4+rBoYb/BiXmMUouvt1naqEE66rg4GfKhD939MZz06O6VNagvalHge0odMp7b8EQw5NLb6t52gxHo4NXxF6bX6M594lPoUnqnrtePDG/gcB7dHKDjMBSOvoB4Nnr+jvFWsHqrvp/Q5Rr1x5tWg4T0QmKhawAXV5B20MHCAmgjj6X2CnShO9RNoicXK6NHUQkptII4IrjwijRSZnNwFdgd4j2Eyu6kvMGGASORMUuEM2XNAsoWxFswF+tiOh9aQdnLclzXsQTDrlfpfXythcISbtYQHxfL4VTQuVg/DSCFIXNjvL9Bhzl4vl7Rc5EFQzzcA79HSzge3hQ9inI4X/eNXrAEE8xHh1m4PQQcejxPbC44DN4N3iH9re/Cbp8Xqd/dldO1qRx2ac1/HatTFTx7OVVZwQXi2uCkJeHMh/VYhntuAHhI30Q9nxrxt758IbMXhI9UOgH3CaIz4pIcsF/WW6MwchRVAJt03xPiL2EknEQ1A8OnIQRzaw7v+5iC3Lf65xWdcPoh+tkKpg2vG33arIqd55cHhTuVyPvz8ooGbI77MMVBTj976pxZlctfHDsmch6T0GX4ivvGVdz2b6WkgoYJvV+Y+TodJPNoePfwFSrUzi/KKxpbHlx8wMkDLnq7cuU940EqCXffuGhy/+rIexQUvN8/L69/kc6Ncfh4flFen5kkstzhxOaVhLupDoPHZc/Il5EkCH8saTUm+sFDyvCatf++6Mtk+Lo+2dva/PMwwTXa7ND6Q0/wnSihfg0++vDWbSrcky5jgpVoOTz61SlumvghicYmlBqx1nbZGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGMBRiP8BX/bU5fiok+oAAAAASUVORK5CYII=",
  },
  {
    text: "Quest didn't just connect our data; it gave life to our otherwise static platform. Understanding their journey and preferences has changed how we approach every feature on Sonx. We've seen fans more engaged.",
    author: "Lee Gray",
    role: "Founder",
    imageSrc: "https://www.questlabs.ai/assets/lee-3__Hgx2Q.png",
    Image: "https://www.questlabs.ai/assets/bitazza-kEZ2cS7b.svg",
  },
  {
    text: "Quest is a powerful growth engine that powered our entire Quest’s experience in our IRL event as well as mobile commerce experience. Our engagement & revenue grew as a result of seamless integration with Quest.",
    author: "Kevin",
    role: "Co-Founder",
    imageSrc: "https://www.questlabs.ai/assets/kevin-2EGjEzBI.jpg",
    Image: "https://www.questlabs.ai/assets/bitazza-kEZ2cS7b.svg",
  },
  {
    text: "Quest didn't just connect our data; it gave life to our otherwise static platform. Understanding their journey and preferences has changed how we approach every feature on Sonx. We've seen fans more engaged, artists more connected, and our platform thrive like never before.",
    author: "Lee Gray",
    role: "Founder",
    imageSrc: "https://www.questlabs.ai/assets/lee-3__Hgx2Q.png",
    Image: "https://www.questlabs.ai/assets/bitazza-kEZ2cS7b.svg",
  },
];

const CustomerReviews = () => {
  return (
    <Box
      bg={"black"}
      color={"white"}
      p={10}
      fontSize={"md"}
      textAlign={"center"}
      pt={20}
    >
      <Text fontWeight={"bold"}>CUSTOMER REVIEWS</Text>
      <Heading>
        Don’t take our word for it. <br /> Trust our customers
      </Heading>

      <Flex
        minW="500px"
        p={7}
        pb={0}
        bg="black"
        h="400px"
        overflow="hidden"
        pos="relative"
        sx={{
          "&:hover div": {
            animationPlayState: "paused",
          },
          "&:hover": {
            cursor: "grab",
          },
          "@keyframes marquee": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-100%)" },
          },
        }}
      >
        <Flex
          h="100%"
          pos="absolute"
          animation="marquee 25s linear infinite"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {reviewsData.map((review, index) => (
            <Box
              key={index}
              w="40%"
              minW="250px"
              minH="300px"
              h="200px"
              p={5}
              bg="gray.700"
              boxShadow="md"
              borderRadius="20px"
              overflow="hidden"
              mx={2}
              flexShrink={0}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box p={5} flexGrow={1}>
                <Text color="white">{review.text}</Text>
              </Box>
              <Box p={5}>
                <HStack spacing={4}>
                  <Image
                    borderRadius="full"
                    boxSize="50px"
                    src={review.imageSrc}
                    alt="customerImage"
                  />
                  <VStack align="start" spacing={0} flex="1">
                    <Text fontWeight="bold" color={"white"}>
                      {review.author}
                    </Text>
                    <Text color={"whiteAlpha.700"}>{review.role}</Text>
                  </VStack>
                  <Image
                    src={review.Image}
                    alt="additionalImage"
                    boxSize="50px"
                    w={48}
                    h={30}
                    objectFit="cover"
                  />
                </HStack>
              </Box>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default CustomerReviews;
