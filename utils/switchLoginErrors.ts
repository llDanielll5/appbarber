import { LoginErrors } from "../enums";

export const SwitchLoginErrors = (error: any) => {
  switch (error.code) {
    case LoginErrors.USER_NOT_FOUND:
      alert("Usuário não encontrado!");
      return;
    case LoginErrors.WRONG_PASSWORD:
      alert("Senha incorreta!");
      return;
    case LoginErrors.INVALID_EMAIL:
      alert("O email é inválido!");
      return;
  }
};
