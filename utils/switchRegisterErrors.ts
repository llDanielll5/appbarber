import { RegisterErrors } from "../enums";

export const SwitchRegisterErrors = (error: any) => {
  switch (error.code) {
    case RegisterErrors.EMAIL_ALREADY_IN_USE:
      alert("O email já está em uso!");
      return;
    case RegisterErrors.INVALID_EMAIL:
      alert("O email é inválido!");
      return;
    case RegisterErrors.OPERATION_NOT_ALLOWED:
      alert("O cadastro não está habilitado!");
      return;
    case RegisterErrors.WEAK_PASSWORD:
      alert("A senha é muito fraca!");
      return;
  }
};
