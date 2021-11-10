import axios from "axios";

// userId which comes from local storage
export const url = "https://fathomless-temple-28282.herokuapp.com";
// export const url = "http://localhost:5000";
export async function getData(...endpoints) {
  let final_url = `${url}${endpoints}`;
  console.log(final_url);
  try {
    let response = await axios.get(final_url);
    const resultData = response.data;
    return resultData;
  } catch (e) {
    console.log("Error in catch ", e);
  }
}

export async function postData(body, ...endpoints) {
  let final_url = `${url}${endpoints}`;
  console.log(final_url);
  try {
    let response = await axios.post(final_url, body);
    const resultData = response.data;
    return resultData;
  } catch (e) {
    console.log("Error in catch ", e);
  }
}
