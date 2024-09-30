import { CircularProgress } from "@mui/material";
import { CircularProgressProps } from "@mui/material";
import {Box} from "@mui/material";

export function CenteredCircularProgress(props: CircularProgressProps) {
  return (
    <Box style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
      <CircularProgress {...props} />
    </Box>
  );
}
