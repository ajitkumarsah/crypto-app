import { Container, Box, Radio, RadioGroup, HStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import axios from "axios";
import { useParams } from "react-router-dom";
import { server } from "../index";
import Errorcomponent from "./Errorcomponent";

const Coindetails = () => {
  const [coins, setcoin] = useState({});
  const [loader, setloader] = useState(true);
  const [error, seterror] = useState(false);
  const [page, setpage] = useState(1);
  const [currency, setcurrency] = useState("inr");

  const params = useParams;

  useEffect(() => {
    const fetchcoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);

        setcoin(data);
        console.log(data);
        setloader(false);
      } catch (error) {
        seterror(true);
        setloader(false);
      }
    };

    fetchcoin();
  }, [params.id]);

  if (error)
    return (
      <Errorcomponent
        message={"Error while fetching coins details check your connectivity"}
      />
    );

  return (
    <Container maxW={"container.xl"}>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Box borderWidth={1} width={"full"}>
            sdgygfgd
          </Box>

          <RadioGroup value={currency} onChange={setcurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>
        </>
      )}
    </Container>
  );
};

export default Coindetails;
