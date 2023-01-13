import { useContext  } from "react";
import { DogsContext } from "../context/DogsProvider";

export default function useDogs() {
  return useContext(DogsContext);
}
