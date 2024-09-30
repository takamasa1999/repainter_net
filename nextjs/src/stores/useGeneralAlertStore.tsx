import { AlertProps } from '@mui/material'
import { create } from 'zustand'

interface AlertState {
  alertMessage: string
  showAlert: boolean
  alertSeverity: AlertProps["severity"]
}
interface AlertStoreState extends AlertState {
  setGeneralAlertStates: ({ alertMessage, showAlert, alertSeverity }: AlertState) => void
  resetGeneralAlertStates: () => void
}

const initialState: AlertState = {
  alertMessage: "",
  showAlert: false,
  alertSeverity: "success",
}
export const useGeneralAlertStore = create<AlertStoreState>()((set) => ({
  ...initialState,
  setGeneralAlertStates: ({
    alertMessage, showAlert, alertSeverity
  }) => set({
    alertMessage, showAlert, alertSeverity
  }),
  resetGeneralAlertStates: () => set(initialState)
}))