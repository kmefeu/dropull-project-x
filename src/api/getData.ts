import axios from "axios";

const getData = async (url: string) => {
  return await axios({
    url: url,
    method: "get",
  }).then((result: any) => {
    return result.data;
  });
};

export default getData;
