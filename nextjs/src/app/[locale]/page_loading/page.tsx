import { Box, LinearProgress } from "@mui/material";

export default function PageLoading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <Box
            sx={{
                alignContent: "center",
                height: "80vh"
            }}
        >
                <LinearProgress/>
        </Box>
    )
}