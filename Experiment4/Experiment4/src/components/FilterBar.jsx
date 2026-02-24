import { TextField, Box } from "@mui/material";

const FilterBar = ({ search, setSearch }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <TextField
        fullWidth
        label="Search Products"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Box>
  );
};

export default FilterBar;
