import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FaCode, FaSearch, FaComments } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.50">
      {/* Hero */}
      <Box bg="purple.600" color="white" py={24}>
        <Container maxW="container.lg">
          <Heading as="h1" size="3xl" mb={4}>
            Hire Top Software Talent
          </Heading>
          <Text fontSize="xl" mb={8}>
            Particles connects companies with pre-vetted developers specializing in modern web technologies.
          </Text>
          <Button size="lg" colorScheme="white" bg="purple.500" _hover={{ bg: "purple.400" }}>
            View Developers
          </Button>
        </Container>
      </Box>

      {/* Features */}
      <Container maxW="container.lg" py={20}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Stack align="center">
            <Box color="purple.600" fontSize="4xl">
              <FaSearch />
            </Box>
            <Text fontSize="2xl" fontWeight="bold">
              Search Developers
            </Text>
            <Text align="center">Quickly find developers with the right skills for your project.</Text>
          </Stack>
          <Stack align="center">
            <Box color="purple.600" fontSize="4xl">
              <FaCode />
            </Box>
            <Text fontSize="2xl" fontWeight="bold">
              Filter by Tech
            </Text>
            <Text align="center">Our talent pool covers a wide range of web technologies.</Text>
          </Stack>
          <Stack align="center">
            <Box color="purple.600" fontSize="4xl">
              <FaComments />
            </Box>
            <Text fontSize="2xl" fontWeight="bold">
              Connect Directly
            </Text>
            <Text align="center">Message developers directly through our platform.</Text>
          </Stack>
        </SimpleGrid>
      </Container>

      {/* CTA */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Flex direction={{ base: "column", md: "row" }} align="center">
            <Box flex={1} mr={{ md: 8 }}>
              <Heading as="h2" size="2xl" mb={4}>
                Start Hiring Today
              </Heading>
              <Text fontSize="lg">Sign up now to find the perfect developer for your next project.</Text>
            </Box>
            <Button size="lg" colorScheme="purple">
              View Developers
            </Button>
          </Flex>
        </Container>
      </Box>

      {/* Images */}
      <Container maxW="container.lg" pb={20}>
        <SimpleGrid columns={2} spacing={8}>
          <Image src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZ3xlbnwwfHx8fDE3MTMwNTAyMzF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Developer coding" />
          <Image src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMGNvbGxhYm9yYXRpb258ZW58MHx8fHwxNzEzMDUwMjMxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Team collaborating" />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Index;
