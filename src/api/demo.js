import { get , post} from "../../utils/request";

export const getUserInfo = () => post("/api/login");
