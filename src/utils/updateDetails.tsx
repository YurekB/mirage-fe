import axios from "axios";

const updateDetails = async (e: any) => {
  const url = process.env.REACT_APP_API;

  let sendData = await axios({
    method: "post",
    url: `${url}/update-details`,
    data: e,
  });

  return sendData;
};

export default updateDetails;
