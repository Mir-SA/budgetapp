import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#3f5ab0",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicStack({ totalProject, totalBudget }) {
  return (
    <Box sx={{ width: "50%", margin: "3rem auto" }}>
      <Stack spacing={2}>
        <Item sx={{ color: "white", padding: 1.75 }}>
          <Typography variant="h6" component="div">
            Total Project: {totalProject} Total Budget: {totalBudget}
          </Typography>
        </Item>
      </Stack>
    </Box>
  );
}
