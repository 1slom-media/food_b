import model from './model.js'

const POST = async (req, res) => {
  try {
    const followers = await model.POST(req.body);
    res.status(201).send(followers);
  } catch (error) {
    console.error(error);
  }
};


export default {
  POST,
};