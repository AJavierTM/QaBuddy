import dotenv from 'dotenv'
dotenv.config()

export const USER_EMAIL = process.env.USER_EMAIL
export const USER_PASSWORD = process.env.USER_PASSWORD
export const WRONGEMAIL = process.env.WRONG_USER_EMAIL
export const WRONGPASSWORD = process.env.WRONG_PASSWORD
export const EMPTY=""
export const TASK_NAME=process.env.TASK_NAME
export const WEBHOOK = process.env.WEBHOOK