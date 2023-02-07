import axios from "axios";

const getUserDetails = async (e: string) => {
  const url = process.env.REACT_APP_API;

  let user = await axios({
    method: "post",
    url: `${url}/get-user`,
    data: { email: e },
  });

  return user;
};

export default getUserDetails;
