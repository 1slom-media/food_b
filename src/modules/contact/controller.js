import model from './model.js'


const GET = async (req, res) => {
    try {
        const contact = await model.GET(req.params)
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


export default {
  GET,
  POST
};