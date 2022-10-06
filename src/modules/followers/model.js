import { fetch } from "../../lib/postgres.js";
import {
  POSTEMAIL,
} from "./query.js";


const POST = async ({email}) => {
    try {
        return await fetch(POSTEMAIL, [email])
    } catch (error) {
        console.log(error);
    }
}


export default {
  POST,
};