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
export default function Paper({
id,
  title,
  link,
  tag,
  abstract,
}: {
    id: number,
  title: string;
  link: string;
  tag: string;
  abstract: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  return (
    <>
      <Thead>
        <Tr>
          <Th isNumeric>{id}</Th>
          <Th>
            <Link href={link} color="teal.500" isExternal>
              {" "}
              {title}{" "}
            </Link>
          </Th>
          <Th>
            <Button onClick={onOpen} variant="link">
              Read
            </Button>{" "}
          </Th>
          <Th>
            <Badge colorScheme="purple">{tag}</Badge>
          </Th>
        </Tr>
      </Thead>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Abstract</ModalHeader>
          <ModalCloseButton />
          <ModalBody>&ldquo;{abstract}&rdquo;</ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" ml={3} onClick={onClose}>
              <Link href={link} isExternal>
                View Paper
              </Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
