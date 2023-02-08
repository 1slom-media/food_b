import model from "./model.js";


const GET = async (req, res) => {
  try {
    const products = await model.GET(req.params);
    res.send(products);
  } catch (error) {
    console.error(error);
  }
};


const POST = async (req, res) => {
  try {
    const product = await model.POST(req.body,req.file);
    res.send(product);
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const product = await model.PUT(req.params, req.body,req.file);
    res.send(product);
  } catch (error) {
    console.error(error);
  }
};


const DELETE = async (req, res) => {
  try {
    const product = await model.DELETE(req.params);
    res.send(product);
  } catch (error) {
    console.error(error);
  }
};


export default {
  GET,
  POST,
  PUT,
  DELETE,
};