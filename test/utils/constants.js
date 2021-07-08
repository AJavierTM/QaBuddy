import dotenv from 'dotenv';

dotenv.config();

const {USER_EMAIL} = process.env;
const {USER_PASSWORD} = process.env;
const WRONGEMAIL = process.env.WRONG_USER_EMAIL;
const WRONGPASSWORD = process.env.WRONG_PASSWORD;
const EMPTY = '';
const {TASK_NAME} = process.env;
const {WEBHOOK} = process.env;
const constants = {
  USER_EMAIL, USER_PASSWORD, WRONGEMAIL, WRONGPASSWORD, EMPTY, TASK_NAME, WEBHOOK,
};
export {constants};
