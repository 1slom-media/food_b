import { fetch, fetchAll } from "../../lib/postgres.js";

import {
    GETNEWS,POSTNEWS,PUTNEWS,DELETENEWS
} from "./query.js";

const GET = async ({newsId=0}) => {
    try {
        return await fetchAll(GETNEWS, [newsId])
    } catch (error) {
        console.log(error);
    }
};

const POST = async ({ title, description},image) => {
    try {
      return await fetch(POSTNEWS, [title,description,image.filename]);
    } catch (error) {
        console.log(error);
    }
};

const PUT = async ({newsId},{ title='', description=''}) => {
    try {
      return await fetch(PUTNEWS, [newsId, title, description]);
    } catch (error) {
        console.log(error);
    }
};  

const DELETE = async ({newsId}) => {
    try {
      return await fetch(DELETENEWS, [newsId]);
    } catch (error) {
        console.log(error);
    }
};


export default {
    GET,
    POST,
    PUT,
    DELETE
};