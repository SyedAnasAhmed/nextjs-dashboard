import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <>
      <Box
        className="bold"
        position="fixed"
        bottom="0%"
        height={{base:"auto" , md:"50px"}}
        alignContent="center"
        width="100%"
        bgColor="white"
        color="#3C3C34"
        fontSize="16px"
      >
        <Flex gap={{base:"2" , md:"10"}} justifyContent={{base:"flex-start"}} flexWrap={{base:"wrap" , md:"nowrap" }}  >
          <Box w="250px">
            <Flex gap={3} justifyContent="space-around" alignItems="center">
              <img src="/images/documentation.png" />
              <Text>Explore Documentation</Text>
            </Flex>
          </Box>
          <Box>
            <Flex gap={3} justifyContent="space-around" alignItems="center">
              <img src="/images/calculator.png" />
              <Text>Cost Calculator</Text>
            </Flex>
          </Box>
          <Box>
            <Flex gap={3} justifyContent="space-around" alignItems="center">
              <img src="/images/calculator.png" />
              <Text>Billing Calculator</Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Footer;
