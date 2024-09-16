"use client";
import { Box, Button, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Sidebarlinks from "./Sidebarlinks";
import WorkspacesDropdown from "./WorkspacesDropdown";
import LaunchpadDropdown from "./LaunchpadDropdown";
import PinnedProjects from "./PinnedProjects";
import { useEffect, useState } from "react";

function Sidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 758) {
        setIsSidebarVisible(true); 
      } else {
        setIsSidebarVisible(false); // Sidebar collapses for smaller screens
      }
    };

    // Check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Box
        display={{ base: "flex", md: "none" }} // Show only on small screens
        position="fixed"
        top="0"
        width="100%"
        height="70px"
        backgroundColor="#F4F6FA"
        color="white"
        zIndex="1000"
        alignItems="center"
        transition="left 0.3s"
        p={4}
        justifyContent="space-between"
      >
        <Box>
          <img src="/images/mudirrlogo.png" alt="Logo" />
        </Box>
        <Button onClick={toggleSidebar} backgroundColor="white" color="#5876B7">
          {isSidebarVisible ? "Close" : "Open"}
        </Button>
      </Box>

      <Box
        position="fixed"
        left={isSidebarVisible ? 0 : "-300px"}
        top={0}
        height="100vh"
        width="300px"
        color="white"
        p={4}
        zIndex="1001"
        backgroundColor={"#F4F6FA"}
        transition="left 0.3s ease"
        sx={{
          "@media (max-width: 650px)": {
            width: "270px",
          },
          "@media (max-width: 650px)": {
            left: isSidebarVisible ? "0" : "-300px",
          },
        }}
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
              <ChevronDownIcon color="black" boxsize={6} />
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
          overflowX="hidden"
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
                <img src="/images/vector.png" alt="logo" boxsize="20px" />
              </Box>
              <Text
                _hover={{ color: "black", cursor: "pointer" }}
                color="#3C3C34"
                fontSize="14px"
              >
                Account Settings
              </Text>
            </Flex>
          </Box>
          <Box mt={2}>
            <Flex justifyContent="flex-start" alignItems="center" ml={5}>
              <Box mr="10px">
                <img src="/images/vector.png" alt="logo" boxsize="20px" />
              </Box>
              <Text
                _hover={{ color: "black", cursor: "pointer" }}
                color="#3C3C34"
                fontSize="14px"
              >
                Logout
              </Text>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
