import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  HStack,
  VStack,
  Image,
  Text,
  Heading,
  noofLines,
} from "@chakra-ui/react";
import Loader from "./Loader";
import Errorcomponent from "./Errorcomponent";

const Exchanges = () => {
  const [exchange, setexchange] = useState([]);
  const [loader, setloader] = useState(true);
  const [error, seterror] = useState(false);

  useEffect(() => {
    const fetchexchages = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);

        setexchange(data);
        setloader(false);
      } catch (error) {
        seterror(true);
        setloader(false);
      }
    };

    fetchexchages();
  }, []);

  if (error)
    return (
      <Errorcomponent
        message={"Error while fetching check your connectivity"}
      />
    );

  return (
    <Container maxW={"container.xl"}>
      {loader ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchange.map((i) => (
              <Exchangecard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const Exchangecard = ({ name, img, rank, url }) => (
  <a href={url} target={"blank"}>
    <VStack
      w={"32"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.5s"}
      margin={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectfit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noofLines={1}>
        {rank}
      </Heading>
      <Text noofLines={1}>{name}</Text>
    </VStack>
  </a>
);
export default Exchanges;
