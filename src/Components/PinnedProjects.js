import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Collapse, Divider } from "@chakra-ui/react";

function PinnedProjects() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const launchpads = [
    "Project name 1",
    "Project name 2",
    "Project name 3",
  ];

  const toggleExpand = () => setIsExpanded(!isExpanded);
  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <>
    <Box>
      <Box mt={2} ml={2}>
        <Flex
          justify="flex-start"
          alignItems="center"
          cursor="pointer"
          onClick={toggleExpand}
        >
          {isExpanded ? (
            <ChevronUpIcon color="#707066" boxsize={6} />
          ) : (
            <ChevronDownIcon color="#707066" boxsize={6} />
          )}
          <Text color="#707066" className="normal" fontSize="14px" ml={2}>
            PINNED PROJECTS (3/3)
          </Text>
        </Flex>
        <Collapse in={isExpanded} animateOpacity>
          {launchpads
            .slice(0, showAll ? launchpads.length : 3)
            .map((launchpad, index) => (
              <Box key={index} mt={1}>
                <Flex justifyContent="flex-start" alignItems="center" ml={5}>
                  <Box mr="10px">
                    <img
                      src="/images/vector.png"
                      alt="logo"
                      boxsize="20px"
                    />
                  </Box>
                  <Text color="#3C3C34" fontSize="14px">
                    {launchpad}
                  </Text>   
                  <ChevronDownIcon color="black" ml="auto" />
                </Flex>
              </Box>
            ))}
        </Collapse>
      </Box>
      <Box mx="10px" mt="10px" >
        <Divider borderColor="#DADAD7" />
      </Box>
    </Box>
    </>
  );
}

export default PinnedProjects;
