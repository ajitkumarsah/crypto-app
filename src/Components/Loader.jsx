import { VStack, Box, Spinner, Stack } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <VStack h="90vh" justifyContent={"center"}>
      <Box transfrom={"scale(3)"}>
        {/* <Spinner size={"xl"} /> */}
        <Stack direction="row" spacing={4}>
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
          <Spinner size="xl" />
        </Stack>
      </Box>
    </VStack>
  );
};

export default Loader;
