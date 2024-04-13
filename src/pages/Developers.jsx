import { useState } from "react";
import { Box, Input, Select, SimpleGrid, Text, Image, Wrap, Tag, TagLabel } from "@chakra-ui/react";

const developers = [
  {
    id: 1,
    name: "John Smith",
    photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGhvdG98ZW58MHx8fHwxNzEzMDUwMjMxfDA&ixlib=rb-4.0.3&q=80&w=1080",
    location: "New York, NY",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2, 
    name: "Sarah Johnson",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwcm9maWxlJTIwcGhvdG98ZW58MHx8fHwxNzEzMDUwMjMxfDA&ixlib=rb-4.0.3&q=80&w=1080",
    location: "San Francisco, CA",
    technologies: ["Angular", "Express", "PostgreSQL"]
  },
  {
    id: 3,
    name: "Michael Lee",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxwcm9maWxlJTIwcGhvdG98ZW58MHx8fHwxNzEzMDUwMjMxfDA&ixlib=rb-4.0.3&q=80&w=1080", 
    location: "Chicago, IL",
    technologies: ["Vue.js", "Laravel", "MySQL"]
  }
];

const Developers = () => {
  const [nameSearch, setNameSearch] = useState("");
  const [techSearch, setTechSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [techFilter, setTechFilter] = useState("");

  const locations = [...new Set(developers.map(d => d.location))];
  const technologies = [...new Set(developers.flatMap(d => d.technologies))];

  const filteredDevelopers = developers.filter(d => 
    d.name.toLowerCase().includes(nameSearch.toLowerCase()) &&
    d.technologies.some(t => t.toLowerCase().includes(techSearch.toLowerCase())) &&
    (locationFilter === "" || d.location === locationFilter) && 
    (techFilter === "" || d.technologies.includes(techFilter))
  );

  return (
    <Box maxW="container.lg" mx="auto" py={8}>
      <Text fontSize="4xl" fontWeight="bold" mb={8}>Hire Developers</Text>
      
      <Box mb={8}>
        <Input 
          placeholder="Search by name" 
          value={nameSearch}
          onChange={e => setNameSearch(e.target.value)}
          mr={4}
        />
        <Input
          placeholder="Search by technology"
          value={techSearch}
          onChange={e => setTechSearch(e.target.value)}
          mr={4}
        />
        <Select 
          placeholder="Filter by location"
          value={locationFilter}
          onChange={e => setLocationFilter(e.target.value)}
          mr={4}
        >
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </Select>
        <Select
          placeholder="Filter by technology"
          value={techFilter}
          onChange={e => setTechFilter(e.target.value)}
        >
          {technologies.map(tech => (
            <option key={tech} value={tech}>{tech}</option>
          ))}  
        </Select>
      </Box>
      
      <SimpleGrid columns={[1,2,3]} spacing={8}>
        {filteredDevelopers.map(d => (
          <Box key={d.id} onClick={() => window.open(`/developers/${d.id}`, "_blank")} cursor="pointer">
            <Image src={d.photo} alt={d.name} w="100%" mb={4} />
            <Text fontSize="2xl" fontWeight="bold">{d.name}</Text>
            <Text fontSize="lg" mb={2}>{d.location}</Text>
            <Wrap>
              {d.technologies.map(t => (
                <Tag key={t} colorScheme="purple" m={1}>
                  <TagLabel>{t}</TagLabel>
                </Tag>
              ))}
            </Wrap>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Developers;