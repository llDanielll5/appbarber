import { atom } from "recoil";

interface authStatus {
  isAuth: boolean;
}

const AuthStatus = atom<authStatus>({
  key: "AuthStatus",
  default: {
    isAuth: false,
  },
});

export default AuthStatus;
