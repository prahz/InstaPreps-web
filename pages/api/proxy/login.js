


import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.post(
      "https://staging.instapreps.com/api/studentlogin",
      req.body,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      message: error.response?.data || "Something went wrong",
    });
  }
}
