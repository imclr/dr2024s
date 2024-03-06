"use client";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Giscus from "@giscus/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { Badge, Box, Center, Button, Alert, AlertIcon } from "@chakra-ui/react";

import { Link } from "@chakra-ui/react";

import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import Math from "../components/math";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import { Highlight, Heading } from "@chakra-ui/react";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      <Heading lineHeight="tall" className="mt-20 mb-5 text-center text-3xl">
        Quantum Computing
      </Heading>
      <Heading className="text-center" as="h5" size="sm">
        <Highlight
          query="reading list"
          styles={{ px: "2", py: "1", rounded: "full", bg: "blue.100" }}
        >
          reading list
        </Highlight>
      </Heading>

      <Center>
        <Box width="80vw">
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th isNumeric>#</Th>
                  <Th>Paper</Th>
                  <Th>Abstract</Th>
                  <Th>Subject</Th>
                </Tr>
              </Thead>
              <Thead>
                <Tr>
                  <Th isNumeric>1</Th>
                  <Th>
                    <Link
                      href="https://dl.acm.org/doi/abs/10.1145/3519935.3520017"
                      color="teal.500"
                      isExternal
                    >
                      {" "}
                      Asymptotically Good Quantum and Locally Testable Classical
                      LDPC Codes{" "}
                    </Link>
                  </Th>
                  <Th>
                    <Button onClick={onOpen} variant="link">
                      Read
                    </Button>{" "}
                  </Th>
                  <Th>
                    <Badge colorScheme="purple">Error Correcting Codes</Badge>
                  </Th>
                </Tr>
              </Thead>
            </Table>
          </TableContainer>
        </Box>
      </Center>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Abstract</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Resolution of the qLDPC conjecture: proving 
            the existence of classical  locally testable codes (LTCs) of constant rate, constant locality, and constant normalized minimum distance, 
            and slightly weaker: the existence of asymptotically good families of qLDPC codes.
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" ml={3} onClick={onClose}>
              <Link href="https://arxiv.org/pdf/2111.03654.pdf" isExternal>
                View Paper
              </Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Center className="mt-60 mb-20">
        <Box w="80%">
          <Giscus
            id="comment"
            repoId='R_kgDOLcMQFw'
            repo="imclr/dr2024s"
            category="Comments"
            categoryId='DIC_kwDOLcMQF84CdwG0'
            mapping="url"
            term="Term?"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="preferred_color_scheme"
            lang="en"
            loading="lazy"
          />
        </Box>
      </Center>
    </>
  );
}
