const userNamePattern: RegExp = /^[a-z]{1}[a-z0-9]{2,}(_[a-z0-9]+)*?$/;
const emailPattern: RegExp = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/;

export { userNamePattern, emailPattern };
