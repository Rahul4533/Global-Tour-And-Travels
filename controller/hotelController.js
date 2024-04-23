import hotel from "../models/hotel.js";

//save hotels data
const saveHotels = async (req, res) => {
 console.log(req.body);
  try {
    const result = await hotel.create(req.body);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default { saveHotels };
