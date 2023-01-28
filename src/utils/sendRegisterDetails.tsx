import axios from "axios";

const sendRegisterDetails = async (e: object) => {
  const url = process.env.REACT_APP_API;

  let sendDetails = await axios({
    method: "post",
    url: `${url}/register`,
    data: e,
  });

  return sendDetails;
};

export default sendRegisterDetails;
