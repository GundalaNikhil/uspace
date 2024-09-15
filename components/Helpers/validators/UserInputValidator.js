export function emailAddressValidator(email) {
  const validEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const invalidResponse = "Please enter valid email address";

  if (!email) return invalidResponse;

  const emailParts = email.split("@");
  if (emailParts.length !== 2) return invalidResponse;

  const domainParts = emailParts[1].split(".");
  if (domainParts.some((part) => part.length > 63)) return invalidResponse;

  return validEmailRegex.test(email);
}
