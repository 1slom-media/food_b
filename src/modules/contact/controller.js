import model from './model.js'


const GET = async (req, res) => {
    try {
        const contact = await model.GET(req.params)
        res.send(contact)
    } catch (error) {
        console.error(error);
    }
}

const GETADMIN = async (req, res) => {
  try {
      const contact = await model.GETADMIN(req.params)
      res.send(contact)
  } catch (error) {
      console.error(error);
  }
}


const POST = async (req, res) => {
  try {
    const contact = await model.POST(req.body);
    res.status(201).send(contact);
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res) => {
  try {
    const contact = await model.PUT(req.params);
    res.status(201).send(contact);
  } catch (error) {
    console.error(error);
  }
};

const DELETE = async (req, res) => {
  try {
    const contact = await model.DELETE(req.params);
    res.status(201).send(contact);
  } catch (error) {
    console.error(error);
  }
};


export default {
  GET,
  GETADMIN,
  POST,
  PUT,
  DELETE
};