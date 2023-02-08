import { fetch, fetchAll } from "../../lib/postgres.js"
import {
  GETPRODUCTS,
  POSTPRODUCTS,
  PUTPRODUCTS,
  DELETEPRODUCTS,
  POSTIMAGEQUERY,
} from "./query.js";


const GET = async ({productId=0}) => {
    try {
        return await fetchAll(GETPRODUCTS, [productId])
    } catch (error) {
        console.log(error);
    }
}


const POST = async ({ product_name, description,price, category_id },image) => {
  try {
    return await fetch(POSTPRODUCTS, [product_name, description, price, category_id,image.filename]);
  } catch (error) {
    console.log(error);
  }
};


const PUT = async ({productId},{ product_name='', description='', price=0},image) => {
  try {
    return await fetch(PUTPRODUCTS, [productId, product_name, description, price,image?.filename]);
  } catch (error) {
    console.log(error);
  }
};

const DELETE = async ({productId}) => {
  try {
    return await fetch(DELETEPRODUCTS, [productId]);
  } catch (error) {
    console.log(error);
  }
};

const POSTIMAGES = async ({ productId }, {mainImage: [main], image = []}) => {
  try {
    const images = []
    images[0] = await fetch(POSTIMAGEQUERY, [productId, main.filename])
    for(let value of image){
        images[images.length] = await fetch(POSTIMAGEQUERY, [productId, value.filename]);
    }
    return images
  } catch (error) {}
};


export default {
  GET,
  POST,
  PUT,
  DELETE,
  POSTIMAGES,
};