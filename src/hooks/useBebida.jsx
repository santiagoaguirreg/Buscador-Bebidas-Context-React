import { useContext } from "react";
import BebidasContext from "../context/Bebidasprovider";

const useBebidas = () => {
    return useContext(BebidasContext)
}

export default useBebidas