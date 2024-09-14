import { Box, Progress, Text, Flex, Circle } from "@chakra-ui/react";

function ProgressBar() {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Box position="relative" w="80%" >
        <Flex justifyContent="space-between " alignItems="center">
          <Circle size="13px" bg="blue.500" />
          <Circle size="13px" bg="blue.500" />
          <Circle size="13px" bg="blue.500" />
          <Circle size="13px" bg="gray.200" />
        </Flex>

        <Progress
          value={75}
          size="xs"
          colorScheme="blue"
          mt="-8px"
          height="2px"
          borderRadius="full"
        />
      </Box>

      <Text fontSize="12px" className="light" ml={2}>
        3/4 Done
      </Text>
    </Flex>
  );
}

export default ProgressBar;
