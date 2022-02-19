import axios from "axios";

// userId which comes from local storage
// export const url = "https://calm-falls-84962.herokuapp.com";
export const url = "http://localhost:5000";
export async function getData(...endpoints) {
  const final_url = `${url}${endpoints}`;
  try {
    const response = await axios.get(final_url);
    const resultData = response.data;
    return resultData;
  } catch (e) {
    console.log("Error in catch ", e);
  }
}

export async function postData(body, ...endpoints) {
  const final_url = `${url}${endpoints}`;
  try {
    const response = await axios.post(final_url, body);
    const resultData = response.data;
    return resultData;
  } catch (e) {
    console.log("Error in catch ", e);
  }
}
