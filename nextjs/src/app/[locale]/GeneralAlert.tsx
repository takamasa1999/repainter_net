"use client"

import { useGeneralAlertStore } from "@/stores/useGeneralAlertStore";
import { Alert, Snackbar } from "@mui/material";


export default function GeneralAlert() {
    const { alertMessage, alertSeverity, showAlert, resetGeneralAlertStates } = useGeneralAlertStore()
    return (
        <Snackbar open={showAlert}
            autoHideDuration={6000} onClose={resetGeneralAlertStates}
        >
            <Alert severity={alertSeverity}>{alertMessage}</Alert>
        </Snackbar>
    )
}