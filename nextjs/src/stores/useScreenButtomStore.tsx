import { create } from 'zustand'

interface screenState {
    isScreenButtom: boolean
}
interface AlertStoreState extends screenState {
    setIsScreenButtom: (newState: boolean) => void
}

const initialState: screenState = {
    isScreenButtom: false
}

export const useScreenButtomStore = create<AlertStoreState>()((set) => ({
    ...initialState,
    setIsScreenButtom: (newState) => set({ isScreenButtom: newState })
}))