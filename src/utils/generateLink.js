export const generateLink = (to, amount, message) => {
  const baseUrl = "https:localhost:5174/send";
  const params = new URLSearchParams({ to, amount, msg: message });
  return `${baseUrl}?${params.toString()}`;
};
