import { AddIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Box, Button, Circle, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Projstatus() {
  return (
    <>
      <Box>
        <Flex
          justifyContent={"space-between"}
          flexWrap={{ base: "wrap" }}
          gap={{ base: "5" }}
          alignItems={"center"}
        >
          <Box
            className="normal"
            fontSize="14px"
            color="#707066"
            width={{ base: "80%", md: "382px" }}
            borderBottom={"2px solid #DADAD7"}
          >
            <Flex justify="space-between" flexWrap={{ base: "wrap" }}>
              <Text
                color={"#5876B7"}
                className="bold"
                borderBottom="3px solid #5876B7"
              >
                Ongoing
              </Text>
              <Text>Completed</Text>
              <Text>Canceled</Text>
              <Text>Drafts</Text>
            </Flex>
          </Box>
          <Box>
            <Button
              _hover={{ bgColor: "#334876" }}
              color="white"
              bgColor={"#5876B7"}
            >
              <AddIcon mr={4}></AddIcon>
              <Text color={"white"} className="bold" fontSize="16px">
                Create a project
              </Text>
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Projstatus;
