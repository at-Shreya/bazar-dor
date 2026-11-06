const AUTH_ERRORS_BN = {
  USER_ALREADY_EXISTS: "এই ইমেইল দিয়ে আগেই অ্যাকাউন্ট খোলা আছে। সাইন ইন করুন।",
  USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL:
    "এই ইমেইল দিয়ে আগেই অ্যাকাউন্ট খোলা আছে। অন্য ইমেইল ব্যবহার করুন।",
  INVALID_EMAIL_OR_PASSWORD: "ইমেইল বা পাসওয়ার্ড সঠিক নয়।",
  INVALID_EMAIL: "সঠিক ইমেইল ঠিকানা লিখুন।",
  PASSWORD_TOO_SHORT: "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।",
  PASSWORD_TOO_LONG: "পাসওয়ার্ড অনেক বড় হয়ে গেছে।",
};

export function authErrorMessage(error) {
  return (
    AUTH_ERRORS_BN[error?.code] ??
    "কিছু একটা সমস্যা হয়েছে। একটু পরে আবার চেষ্টা করুন।"
  );
}

export function safeRedirectPath(path) {
  if (typeof path === "string" && path.startsWith("/") && !path.startsWith("//")) {
    return path;
  }
  return "/";
}