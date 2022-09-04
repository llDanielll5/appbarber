export enum RegisterErrors {
  EMAIL_ALREADY_IN_USE = "auth/email-already-in-use",
  INVALID_EMAIL = "auth/invalid-email",
  OPERATION_NOT_ALLOWED = "auth/operation-not-allowed",
  WEAK_PASSWORD = "auth/weak-password",
  INVALID_PASSWORD = "auth/invalid-password",
  USER_NOT_FOUND = "auth/user-not-found",
  WRONG_PASSWORD = "auth/wrong-password",
  USER_DISABLED = "auth/user-disabled",
  TOO_MANY_REQUESTS = "auth/too-many-requests",
  UNEXPECTED_ERROR = "auth/unexpected-error",
  INVALID_REFERENCE_COLLECTION = "invalid-argument",
}

export enum LoginErrors {
  INVALID_EMAIL = "auth/invalid-email",
  USER_NOT_FOUND = "auth/user-not-found",
  WRONG_PASSWORD = "auth/wrong-password",
}

export enum ClientType {
  BARBER = "Barbeiro",
  MANAGER = "Gerente",
}
