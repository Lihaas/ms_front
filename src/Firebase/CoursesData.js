import firebase from "./firebase";
import { DB } from "./firebase";

export const Paper1YoutubeData = (onDataFetched) => {
  DB.collection("Youtube")
    .doc("Paper1")
    .onSnapshot((doc) => {
      // console.log("Current data: ", doc.data()["youtube-paper1"]);
      onDataFetched(doc.data()["youtube-paper1"])
    });
};

export const Paper2YoutubeData = (onDataFetched) => {
  DB.collection("Youtube")
    .doc("Paper2")
    .onSnapshot((doc) => {
      console.log("Current data: ", doc.data());
    });
};
