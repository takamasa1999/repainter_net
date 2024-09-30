import { Box, LinearProgress } from "@mui/material";
import {Skeleton} from "@mui/material";

// Here is the test page to check how the loading view will be shown
export default function LoadingView() {
    return (
        <Box
            sx={{
                alignContent: "center",
                height: "80vh"
            }}
        >
                <Skeleton/>
        </Box>
    )
}