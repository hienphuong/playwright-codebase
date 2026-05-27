import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../.env') });

export const USERNAME = process.env.USERNAME ?? '';

export const PASSWORD = process.env.PASSWORD ?? ''; 

export const BASE_URL = process.env.BASE_URL ?? ''; 

