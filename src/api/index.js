import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

var options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": "06ee4b6136msh6cb1b8791610af2p1d75abjsne1f3624463d7",
  },
};

export const getPlacesDate = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};
