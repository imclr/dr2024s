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
import Paper from "../components/paper";

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
                      href="https://arxiv.org/pdf/2311.13040.pdf"
                      color="teal.500"
                      isExternal
                    >
                      {" "}
                      The Penrose Tiling is a Quantum Error-Correcting Code{" "}
                    </Link>
                  </Th>
                  <Th>
                    <Button onClick={onOpen} variant="link">
                      Read
                    </Button>{" "}
                  </Th>
                  <Th>
                    <Badge colorScheme="purple">QECC</Badge>
                  </Th>
                </Tr>
              </Thead>
              <Paper
                id={2}
                title={
                  "High-threshold and low-overhead fault-tolerant quantum memory"
                }
                link={
                  "https://www.nature.com/articles/s41586-024-07107-7"
                }
                abstract={"An end-to-end quantum error correction protocol that implements fault-tolerant memory on the basis of a family of low-density parity-check codes."}
                tag={"LDPC Code"}
              />
                <Paper
                id={undefined}
                title={
                  "Topological entanglement entropy"
                }
                link={
                  "https://arxiv.org/pdf/hep-th/0510092.pdf"
                }
                abstract={""}
                tag={""}
              />
                <Paper
                id={undefined}
                title={
                  "Anyons in an exactly solved model and beyond"
                }
                link={
                  "https://arxiv.org/pdf/cond-mat/0506438.pdf"
                }
                abstract={""}
                tag={""}
              />
                <Paper
                id={undefined}
                title={
                  "(Video) Topological quantum phases (Alexei Kitaev)"
                }
                link={
                  "https://youtu.be/W2vUbTR2RWQ?si=VfJSVmRuvXL-32M8"
                }
                abstract={""}
                tag={""}
              />
              <Thead>
                <Tr>
                  <Th isNumeric></Th>
                  <Th>
                    <Link
                      href="https://arxiv.org/pdf/2007.06305.pdf"
                      color="teal.500"
                      isExternal
                    >
                      {" "}
                      Mixed-state entanglement from local randomized
                      measurements{" "}
                    </Link>
                  </Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Thead>
                <Tr>
                  <Th isNumeric></Th>
                  <Th>
                    <Link
                      href="https://arxiv.org/pdf/2402.18809.pdf"
                      color="teal.500"
                      isExternal
                    >
                      {" "}
                      Entanglement-enabled advantage for learning a bosonic
                      random displacement channel{" "}
                    </Link>
                  </Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Thead>
                <Tr>
                  <Th isNumeric></Th>
                  <Th>
                    <Link
                      href="https://arxiv.org/pdf/2310.18410.pdf"
                      color="teal.500"
                      isExternal
                    >
                      {" "}
                      Initial state preparation for quantum chemistry on quantum
                      computers{" "}
                    </Link>
                  </Th>
                  <Th></Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Thead>
                <Tr>
                  <Th isNumeric></Th>
                  <Th>
                    <Link
                      href="https://arxiv.org/pdf/2402.05228.pdf"
                      color="teal.500"
                      isExternal
                    >
                      {" "}
                      Weight Reduced Stabilizer Codes with Lower Overhead{" "}
                    </Link>
                  </Th>
                  <Th></Th>
                  <Th></Th>
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
            &ldquo;Penrose Tiling give rise to a remarkable new type of QECC. In this
            code, quantum information is encoded through quantum geometry, and
            any local errors or erasures in any finite region, no matter how
            large, may be diagnosed and corrected. We also construct variants of
            this code (based on the Ammann-Beenker and Fibonacci tilings) that
            can live on finite spatial tori, in discrete spin systems, or in an
            arbitrary number of spatial dimensions.&rdquo;
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" ml={3} onClick={onClose}>
              <Link href="https://arxiv.org/pdf/2311.13040.pdf" isExternal>
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
            repoId="R_kgDOLcMQFw"
            repo="imclr/dr2024s"
            category="Comments"
            categoryId="DIC_kwDOLcMQF84CdwG0"
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
