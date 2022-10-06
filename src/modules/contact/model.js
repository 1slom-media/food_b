import { fetchAll, fetch } from "../../lib/postgres.js";
import {
  GETCONTACT,
  POSTCONTACT,
} from "./query.js";

const GET =  async ({contactId=0}) => {
  try {
    return await fetchAll(GETCONTACT, [contactId])
  } catch (error) {
    console.log(error);
  }
};


const POST = async ({username,phone,email,message,subject}) => {
    try {
        return await fetch(POSTCONTACT, [username,phone,email,message,subject])
    } catch (error) {
        console.log(error);
    }
}

export default {
  GET,
  POST,
};
