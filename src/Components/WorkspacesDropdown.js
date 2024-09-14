import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Button, Collapse, Divider } from "@chakra-ui/react";

function WorkspacesDropdown() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const workspaces = [
    "Workspace name 1",
    "Workspace name 2",
    "Workspace name 3",
    "Workspace name 4",
    "Workspace name 5",
  ];

  const toggleExpand = () => setIsExpanded(!isExpanded);
  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <Box>
      <Box mt={2} ml={2}>
        <Flex
          justify="flex-start"
          alignItems="center"
          cursor="pointer"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <ChevronUpIcon color="#707066" boxSize={6} />
          ) : (
            <ChevronDownIcon color="#707066" boxSize={6} />
          )}
          <Box>
            <Flex flexDirection={"row"} alignItems={"center"} justifyContent={"space-evenly"} gap={2} >
              <Text color="#707066" className="normal"  _hover={{ color: "black", cursor: "pointer" }}   fontSize="14px" ml={2}>
                WORKSPACES
              </Text>
              <Text
                color="#3C3C34"
                px={1}
                className="bold"
                fontSize="12px"
                borderRadius="lg"
                backgroundColor="#DADAD7"
              >
                Coming Soon
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Collapse in={isExpanded} animateOpacity>
          {workspaces
            .slice(0, showAll ? workspaces.length : 3)
            .map((workspace, index) => (
              <Box>
                <Flex justifyContent={"space-around"} alignItems={"center"}>
                  <Text
                    key={index}
                    color="#3C3C34"
                    fontSize="14px"
                    ml={5}
                    mt={2}
                  >
                    {workspace}
                  </Text>
                  <ChevronDownIcon color="black" />
                </Flex>
              </Box>
            ))}
          {workspaces.length > 3 && (
            <Flex justify="center" mt={2} alignItems="center">
              <Button
                size="sm"
                variant="link"
                onClick={toggleShowAll}
                color="#5876B7"
                fontSize="14px"
              >
                {showAll ? "See Less" : "See All"}
              </Button>
            </Flex>
          )}
        </Collapse>
      </Box>
      <Box mx="10px" mt="10px" >
        <Divider borderColor="#DADAD7" />
      </Box>
    </Box>
  );
}

export default WorkspacesDropdown;
