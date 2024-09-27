import { Button, Dialog, TextField, Alert, AlertProps, Snackbar } from "@mui/material";
import { useState } from "react";
import registerNewSpace from "./functions/registerNewSpace";
import { useGeneralAlertStore } from "@/stores/useGeneralAlertStore";

export default function CreateNewSpaceDialog({ isOpenDialog, closeDialog, onRegisteredNew }: {
    isOpenDialog: boolean,
    closeDialog: () => void,
    onRegisteredNew: () => void
}) {
    const [spaceName, setSpaceName] = useState<string>("")

    const { setGeneralAlertStates } = useGeneralAlertStore()

    function exitDialog() {
        closeDialog()
        setSpaceName("")
    }

    function textOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newInput = event.target.value
        setSpaceName(newInput)
    }

    async function handleOnRegisterClick() {
        if (spaceName.length < 5) {
            setGeneralAlertStates({ "showAlert": true, "alertMessage": "input length should be longer than 5", alertSeverity: "info" })
            return
        }
        // check if there's the same name in the pace
        try {
            const newSpace = await registerNewSpace(spaceName)
            setGeneralAlertStates(
                {
                    "showAlert": true,
                    "alertMessage": `${newSpace.space_name} is registered! Let's start your speak!`,
                    "alertSeverity": "success"
                }
            )
            exitDialog()
            onRegisteredNew()
        } catch (error: any) {
            setGeneralAlertStates(
                {
                    "showAlert": true,
                    "alertMessage": error.message,
                    "alertSeverity": "warning"
                }
            )
        }
    }

    return (
        <Dialog open={isOpenDialog}>
            <TextField id="standard-basic" label="New space name" variant="standard" onChange={textOnChange} />
            <Button variant='contained' onClick={handleOnRegisterClick}>
                Register
            </Button>
            <Button variant='contained' onClick={exitDialog}>
                Cancel
            </Button>
        </Dialog>
    )
}