import { atom } from "recoil";

export const userFormStateAtom = atom({
  key: "userFormState",
  default: {
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    password: "",
  },
});
