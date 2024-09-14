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
import WorkspacesDropdown from "./WorkspacesDropdown";
import LaunchpadDropdown from "./LaunchpadDropdown";
import PinnedProjects from "./PinnedProjects";
import { useState } from "react";

function Sidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  return (
    <Box
      position="fixed"
      left={isSidebarVisible ? 0 : "-300px"}
      top={0}
      height="100vh"
      width="300px"
      color="white"
      p={4}
      backgroundColor={"#F4F6FA"}
      sx={{
        "@media (max-width: 769px)": {
          width: "270px",
        },
        "@media (max-width: 750px)": {
          left: isSidebarVisible ? "0" : "-300px",
        },
      }}
    >
      <Box
        display={{ base: "block", md: "none" }}
        position="fixed"
        top="10px"
        left="10px"
        zIndex="1000"
      >
        <Button onClick={toggleSidebar} backgroundColor="#5876B7" color="white">
          {isSidebarVisible ? "Close" : "Open"} Sidebar
        </Button>
      </Box>

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
        maxH={"45vh"}
        overflowY="auto"
        borderRadius="md"
        sx={{
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#5876B7",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#485b94",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1",
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
      <Box
        sx={{
          "@media (min-width: 1600px)": {
            display: "block",
          },
          "@media (max-width: 1599px)": {
            display: "none",
          },
        }}
        height="10%"
        mt={5}
      >
        <PinnedProjects />
      </Box>
      <Box
        mt={8}
        sx={{
          "@media (min-width: 1600px)": {
            display: "block",
            bottom: "2%",
            mt: "10",
          },
        }}
      >
        <Box mt={2}>
          <Flex justifyContent="flex-start" alignItems="center" ml={5}>
            <Box mr="10px">
              <img src="/images/vector.png" alt="logo" boxSize="20px" />
            </Box>
            <Text color="#3C3C34" fontSize="14px">
              Account Settings
            </Text>
          </Flex>
        </Box>
        <Box mt={2}>
          <Flex justifyContent="flex-start" alignItems="center" ml={5}>
            <Box mr="10px">
              <img src="/images/vector.png" alt="logo" boxSize="20px" />
            </Box>
            <Text color="#3C3C34" fontSize="14px">
              Logout
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
