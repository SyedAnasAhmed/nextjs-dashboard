"use client";

import "../app/globals.css";
import Sidebar from "@/Components/Sidebar";
import Maincard from "@/Components/Maincard";
import { Box, ChakraProvider, Flex, Text } from "@chakra-ui/react";
import Folder_status from "@/Components/Folder-status";
import Projstatus from "@/Components/Projstatus";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Box>
          <Sidebar />
        </Box>

        <Box
          ml={{ base: "10px", md: "340px" }}
          mt={{ base: "100px", md: "56px" }}
          mr={{ md: "85px" }}
          mb="60px"
        >
          <Box>
            <Text className="bold" fontSize={{ md: "28px", base: "22px" }}>
              Welcome Back, Anas!
            </Text>
            <Text
              className="light"
              fontSize={{ md: "16px", base: "14px" }}
              color="#707066"
            >
              You have accomplished alot today. Let us handle the rest.
            </Text>
          </Box>

          <Box mt="40px" mb="100px">
            <Flex gap={15} flexWrap={{ base: "wrap" }}>
              <Folder_status
                src="/images/greenfolder.png"
                num="30"
                status="Completed"
              />
              <Folder_status
                src="/images/bluefolder.png"
                num="04"
                status="Ongoing"
              />
              <Folder_status
                src="/images/brownfolder.png"
                num="02"
                status="Drafts"
              />
              <Folder_status
                src="/images/redfolder.png"
                num="03"
                status="Canceled"
              />
            </Flex>
          </Box>

          <Box mb={10}>
            <Projstatus />
          </Box>

          <Box>
            <Flex flexWrap="wrap" gap={{ md: "55px", base: "20px" }}>
              <Maincard
                cardtitle="Make an E-Commerce Website for a Brand Store"
                domain="Web"
                status="ongoing"
                date="19/9/24"
              />
              <Maincard
                cardtitle="Make an E-Commerce Website for a Brand Store"
                domain="Web"
                status="ongoing"
                date="19/9/24"
              />
              <Maincard
                cardtitle="Make an E-Commerce Website for a Brand Store"
                domain="Web"
                status="ongoing"
                date="19/9/24"
              />
              <Maincard
                cardtitle="Make an E-Commerce Website for a Brand Store"
                domain="Web"
                status="ongoing"
                date="19/9/24"
              />
              <Maincard
                cardtitle="Make an E-Commerce Website for a Brand Store"
                domain="Web"
                status="ongoing"
                date="19/9/24"
              />
            </Flex>
          </Box>

          <Box>
            <Footer />
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
}
