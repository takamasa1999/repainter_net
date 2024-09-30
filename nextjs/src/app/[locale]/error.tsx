'use client'

import { Alert, Snackbar } from "@mui/material"
import { useState } from "react"

export default function error({error}:{error:Error}) {

    // const [alert, setAlert] = useState<{ "show": boolean, "message": string }>({
    //     "show": true,
    //     "message": ""
    // })

    // function handleSnackbarOnClose() {
    //     setAlert({
    //         "show": false,
    //         "message": ""
    //     })
    // }

    return (
        <div>error.message</div>
        // <Snackbar open={alert.show} autoHideDuration={6000} onClose={handleSnackbarOnClose}>
        //     <Alert severity="warning">{alert.message}</Alert>
        // </Snackbar>
    )
}