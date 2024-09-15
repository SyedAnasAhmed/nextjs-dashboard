import { SettingsIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProgressBar from "./progressBar";
import { easeInOut } from "framer-motion";

function Maincard(props) {
  return (
    <Box
      width="364px"
      w={{ base: "300px" }}
      height="268px"
      p={3}
      border="1px solid #DADAD7"
      transition="all 0.3s ease"
      _hover={{fontWeight:"300",boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" , transform: "translateY(-5px)", cursor:"pointer" }}
    >
      <Box>
        <Flex justify="space-between">
          <Text className="bold" fontSize="14px">
            {props.cardtitle}
          </Text>
          <SettingsIcon></SettingsIcon>
        </Flex>
      </Box>
      <Box>
        <Text pt={2} className="light" fontSize="12px" color="#707066">
          {props.domain}
        </Text>
      </Box>
      <Box>
        <ProgressBar />
      </Box>
      <Box mt={2}>
        <Text
          p={1}
          borderRadius={"md"}
          backgroundColor={"#DBE2F0"}
          color={"#5876B7"}
          className="light"
          fontSize={"12px"}
          display={"inline-block"}
        >
          {props.status}
        </Text>
        <br />
        <Text
          p={1}
          mt={2}
          borderRadius={"md"}
          backgroundColor={"#DBE2F0"}
          color={"#5876B7"}
          className="light"
          fontSize={"12px"}
          display={"inline-block"}
        >
          Next Milestone: {props.date}
        </Text>
      </Box>

      <Box  mt={"25px"} >
        <Flex justify="space-between" gap={10} alignItems="flex-end">
          <Text className="bold" fontSize={"14px"}>
            Follow up with the manager
          </Text>

          <Box
            bgColor="#5876B7"
            _hover={{ bgColor: "#334876", cursor: "pointer" }}
            borderRadius={"md"}
            p={2}
          >
            <img width="20px" height="20px" src="images/Send@2x.png" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
export default Maincard;
