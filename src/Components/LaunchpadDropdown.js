import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Button, Collapse } from "@chakra-ui/react";

function LaunchpadDropdown() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const launchpads = [
    "Launchpad name 1",
    "Launchpad name 2",
    "Launchpad name 3",
    "Launchpad name 4",
    "Launchpad name 5",
  ];

  const logos = [
    "/images/Logo.png",
    "/images/Logo (1).png",
    "/images/Logo (2).png",
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
            LAUNCHPAD
          </Text>
        </Flex>
        <Collapse in={isExpanded} animateOpacity>
          {launchpads
            .slice(0, showAll ? launchpads.length : 3)
            .map((launchpad, index) => (
              <Box key={index} mt={2}>
                <Flex justifyContent="flex-start" alignItems="center" ml={5}>
                  <Box mr="10px">
                    <img
                      src={logos[index % logos.length]}
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
          {launchpads.length > 3 && (
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
    </Box>
    </>
  );
}

export default LaunchpadDropdown;
