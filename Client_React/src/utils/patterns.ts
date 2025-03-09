const authLayoutRoutePattern: RegExp = /^\/auth\/?$/;
const userNamePattern: RegExp = /^[aA-zZ]{1}[aA-zZ0-9]{2,}(_[aA-zZ0-9]+)*?$/;
const fullNamePattern: RegExp = /^[aA-zA]+( [aA-zA]+)?$/;

export { authLayoutRoutePattern, userNamePattern, fullNamePattern };
