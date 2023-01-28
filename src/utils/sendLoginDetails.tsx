import axios from "axios";

const sendLoginDetails = async (e: object) => {
  const url = process.env.REACT_APP_API;

  let sendDetails = await axios({
    method: "post",
    url: `${url}/login`,
    data: e,
  });

  return sendDetails;
};

export default sendLoginDetails;
