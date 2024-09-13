import { AbsoluteCenter, Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Sidebarlinks() {
  return (
    <Box>
      <Box
        width="256px"
        bgColor="white"
        margin="auto"
        borderRadius="sm"
        height="36px"
      >
        <Flex ml={2} justify="flex-start" alignItems="center">
          <img src="/images/favicon.png" />
          <Text className="bold" fontWeight={600} mt={2} ml={2}>
            Dashboard
          </Text>
        </Flex>
      </Box>

      <Box width="256px" margin="auto" borderRadius="sm" height="36px" mt={2}>
        <Flex ml={2} justify="flex-start" alignItems="center">
          <img src="/images/Vector.png" />
          <Text
            className="normal"
            color="#707066"
            _hover={{ color: "black", cursor: "pointer" }}
            mt={2}
            ml={2}
          >
            Project History
          </Text>
        </Flex>
      </Box>

      <Box
        width="256px"
        // bgColor="white"
        margin="auto"
        borderRadius="sm"
        height="36px"
        mt={2}
      >
        <Flex ml={2} justify="flex-start" alignItems="center">
          <img src="/images/Vector.png" />
          <Text className="normal" color="#707066" mt={2} ml={2}>
            Client History
          </Text>
        </Flex>
      </Box>
      <Box
        width="256px"
        // bgColor="white"
        margin="auto"
        borderRadius="sm"
        height="36px"
        mt={2}
      >
        <Flex ml={2} justify="flex-start" alignItems="center">
          <img src="/images/Vector.png" />
          <Text className="normal" color="#707066" mt={2} ml={2}>
            Emails
          </Text>
        </Flex>
      </Box>
      <Box mx="10px">
        <Divider borderColor="#DADAD7" />
      </Box>
    </Box>
  );
}

export default Sidebarlinks;
