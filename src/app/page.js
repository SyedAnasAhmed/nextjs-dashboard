"use client";

import "../app/globals.css";
import Sidebar from "@/Components/sidebar";
import Maincard from "@/Components/maincard";
import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box>
        <Sidebar />
      </Box>

      <Box ml={{ base: "0px", md: "340px" }} mt={{ base: "40px" }}>
        <Box>
          <Text className="bold" fontSize={"28px"}>
            Welcome Back, Anas!
          </Text>
          <Text className="light" fontSize={"16px"} color="#707066">
            You have accomplished alot today. Let us handle the rest.
          </Text>
        </Box>
        <Box>
          <Maincard />
        </Box>
      </Box>
    </>
  );
}
