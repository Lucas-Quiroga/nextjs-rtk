import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

// esta funcion dice que cuando quiera usar cada caracteristica de redux, puedo usar estas funciones
export const useAppDispatch = () => useDispatch<AppDispatch>();
//cuando quiera un dato uso este hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
