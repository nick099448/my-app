import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import MapView from "react-native-maps";
import { postData } from "../utils/api";
import PepleMarkers from "./PepleMarkers";
import UniversityMarkers from "./UniversityMarkers";
const items = require("./peple.json");

export default function MyMapView(props: any) {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;
  const [universities, setUniversities] = useState([]);
    const [peoples, setPeoples] = useState([]);
  const loadUniversities = async () => {
    let url_endpoint =
      "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week10/universities.json";
    try {
      let response = await fetch(url_endpoint);
      let items = await response.json();
      //   console.log(items);
      setUniversities(items);
    } catch (error) {
      console.log(error);
    }
  };
   const loadPeple = async () => {
    try {
      setPeoples(items); // <-- เก็บใน state แยก ไม่ทับ universities
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadUniversities();
    loadPeple();
  }, []);
  if (props.location) {
    //DISPLAY MAP ON YOUR LOCATION
    return (
      <MapView
        style={{ width: width, height: height }}
        initialRegion={{
          latitude: props.location.coords.latitude,
          longitude: props.location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        showsUserLocation={true}
        onUserLocationChange={(event) => {
          // console.log("LOCATION CHANGED : " , event);
          if (event.nativeEvent.coordinate) {
            let new_location = {
              coords: event.nativeEvent.coordinate,
              mocked: false,
              timestamp: event.nativeEvent.coordinate.timestamp,
            };
            //SET LOCATION
            props.setLocation(new_location);
            //SEND TO SERVER
            //if (props.recordLocation) {
              console.log("SEND TO SERVER");
              postData("/location" , {
                user_id: "Worapot taveesin",
                latitude: event.nativeEvent.coordinate.latitude,
                longitude: event.nativeEvent.coordinate.longitude,
              });
            //}

          }
        }}
      >
        <UniversityMarkers items={universities} />
        <PepleMarkers items={peoples}/>
      </MapView>
    );
  } else {
    //DISPLAY DEFAULT MAP on 0,0
    return <MapView style={{ width: width, height: height }}></MapView>;
  }
}
