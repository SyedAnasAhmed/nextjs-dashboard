"use client";
import Maincard from "@/Components/maincard";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const page = ({project}) => {
  const [data, setdata] = useState([]);

  async function fetchdata() {
    try {
      const response = await fetch("/api", {
        method: "GET",
      });
      const data = await response.json();
      setdata(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  // async function deleteProj(id) {
  //   try {
  //     console.log("aya" , id )
  //     const response = await fetch(`api/${id}` , {
  //       method:"DELETE",
  //     })
  //     const deldata = await response.json()
  //     console.log("deleted")
  //     alert(JSON.stringify(deldata))
  //   } catch (error) {
  //     console.log("error" , error.message)
  //   }
  // }

  // function handleDelete(id){
  //   deleteProj(id);
  // }


  return (
    <>
      <Box mt={5} ml={10}>
        <Flex justifyContent={"space-around"} alignItems={"center"}>
          <Text className="bold">
            Hello! This is the backend part of the full-stack task!
          </Text>
          <Button>Create a Project(Not functional)</Button>
        </Flex>
      </Box>
      <Box mt={10} ml={"50px"}>
        <Flex flexWrap={"wrap"} gap={10} justifyContent={"flex-start"}>
          {data.map((item) => (
            <Box width="400px" height="200px" border="1px solid lightgray" p={5} >
                <Text className="light" fontSize="12px" color="lightgray" >ID:{item._id}</Text>
                <Text className="bold" fontSize="16px">Heading of the project:{item.heading}</Text>
                <Text className="light">Project Status:{item.status}</Text>
                <Text className="light">Milestone/Date:{item.milestone}</Text>
                {/* <Button bgColor={"#DF1B1B"} color={"white"}
                  onClick={handleDelete}
                >Delete This Project</Button> */}
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default page;
