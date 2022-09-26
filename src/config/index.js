import md5 from "md5";
export const API_URL = process.env.API_URL;
export const API_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
export const HASH = md5(1+PRIVATE_KEY+API_KEY);