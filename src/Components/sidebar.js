"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  flexbox,
  Icon,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Sidebarlinks from "./Sidebarlinks";
import WorkspacesDropdown from "./workspacesDropdown";
import LaunchpadDropdown from "./LaunchpadDropdown";

function Sidebar() {
  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      height="100vh"
      width="300px"
      color="white"
      p={4}
      backgroundColor={"#F4F6FA"}
    >
      <Box height="8vh">
        <img src="/images/mudirrlogo.png" />
      </Box>
      <Wrap marginBottom="20px">
        <WrapItem>
          <Avatar
            marginRight={2}
            height="40px"
            width="40px"
            name="Prosper Otemuyiwa"
            src="https://bit.ly/prosper-baba"
          />
          <Box>
            <Text fontSize="16px" className="bold">
              Syed Anas Ahmed
            </Text>
            <Text
              fontSize="14px"
              isTruncated
              maxWidth="170px"
              className="light"
            >
              syedanasahmed@gmail.com
            </Text>
          </Box>
          <Box mt={3}>
            <ChevronDownIcon color="black" boxSize={6} />
          </Box>
        </WrapItem>
      </Wrap>
      <Box bg="white" mb={4} border="1px solid #DADAD7" borderRadius="md">
        <Button
          bg="#DBE2F0"
          color="#334876"
          _hover={{ bg: "#334876", color: "white" }}
          _active={{ border: "1px white" }}
          w="45%"
          m={1}
        >
          Personal
        </Button>
        <Button
          bg="white"
          color="black"
          _hover={{ bg: "#DBE2F0", color: "#5876B7" }}
          w="50%"
        >
          Invited
        </Button>
      </Box>
      <Box
        bg="#EBF0FA"
        mt={2}
        maxH={"50vh"}
        overflowY="auto"
        borderRadius="md"
        height="50vh"
        sx={{
          /* Custom scrollbar styling */
          "&::-webkit-scrollbar": {
            width: "6px", // Set the width of the scrollbar
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#5876B7", // Thumb color
            borderRadius: "10px", // Round the corners of the thumb
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#485b94", // Change color on hover
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1", // Scrollbar background color
          },
        }}
      >
        <Flex flexDirection="column">
          <Box height="30%" pt={2}>
            <Sidebarlinks />
          </Box>
          <Box>
            <WorkspacesDropdown />
          </Box>
          <Box>
            <LaunchpadDropdown />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Sidebar;
