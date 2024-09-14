import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Folder_status(props) {
  return (
    <>
      <Box display={"inline"} width="140px" height="40px" >
        <Flex justify={"flex-start"} gap={2} alignItems="center" >
          <Box>
            <img src={props.src} />
          </Box>
          <Box>
            <Text className="bold" fontSize="16px">{props.num}</Text>
            <Text className="light" fontSize="12px" color="#707066">{props.status}</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Folder_status;
