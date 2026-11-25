const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{10,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function validateEntry(entry: string): boolean {
  return entry.trim().length > 0;
}
export function validateEmail(email: string): boolean {
  return emailRegex.test(email);
}
export function validatePassword(password: string): boolean {
  return passwordRegex.test(password);
}
export function validateEqual(entry: string, confirmEntry:string): boolean {
  return entry === confirmEntry;
}