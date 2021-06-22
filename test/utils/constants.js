import dotenv from 'dotenv'
dotenv.config()

const USER_EMAIL = process.env.USER_EMAIL
const USER_PASSWORD = process.env.USER_PASSWORD
const WRONGEMAIL = process.env.WRONG_USER_EMAIL
const WRONGPASSWORD = process.env.WRONG_PASSWORD
const EMPTY=""
const TASK_NAME=process.env.TASK_NAME
const WEBHOOK = process.env.WEBHOOK
const constants = {USER_EMAIL, USER_PASSWORD, WRONGEMAIL, WRONGPASSWORD, EMPTY, TASK_NAME, WEBHOOK}
export {constants}