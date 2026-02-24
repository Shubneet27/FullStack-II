import { Container, Box } from "@mui/material";
import { useState, useMemo } from "react";
import CardComponent from "../components/CardComponent";
import FilterBar from "../components/FilterBar";

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Headphones", price: 2000 },
  { name: "Smart Watch", price: 5000 },
  { name: "Tablet", price: 30000 },
  { name: "Keyboard", price: 1500 },
];

const Projects = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <Container sx={{ mt: 5 }}>
      <FilterBar search={search} setSearch={setSearch} />

      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {filteredProducts.map((product, index) => (
          <CardComponent key={index} product={product} />
        ))}
      </Box>
    </Container>
  );
};

export default Projects;
