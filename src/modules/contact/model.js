import { fetchAll, fetch } from "../../lib/postgres.js";
import {
  GETCONTACT,
  POSTCONTACT,
  GETCONTACTA,
  PUTCONTACT,
  DELETECONTACT
} from "./query.js";

const GET =  async ({contactId=0}) => {
  try {
    return await fetchAll(GETCONTACT, [contactId])
  } catch (error) {
    console.log(error);
  }
};

const GETADMIN =  async ({contactId=0}) => {
  try {
    return await fetchAll(GETCONTACTA, [contactId])
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

const PUT=async ({contactId})=>{
  try {
    return await fetch(PUTCONTACT,[contactId])
  } catch (error) {
    console.log(error);
  }
}

const DELETE=async ({contactId})=>{
  try {
    return await fetch(DELETECONTACT,[contactId])
  } catch (error) {
    console.log(error);
  }
}

export default {
  GET,
  GETADMIN,
  POST,
  PUT,
  DELETE
};
