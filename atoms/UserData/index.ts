import { atom } from "recoil";
import { ClientType } from "../../enums";

const UserData = atom({
  key: "UserData",
  default: {
    id: "",
    name: "",
    email: "",
    age: "",
    clientType: ClientType,
    appointments: [],
  },
});

export default UserData;
