import React, { useEffect } from "react";
import Head from "next/head";

function Maps() {
  useEffect(() => {
    const NaverMap = () => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.231576, 127.183602),
        zoom: 15,
      });
    };
    NaverMap();
  }, []);

  const mapStyle = {
    width: "80%",
    height: "600px",
  };

  return (
    <>
      <Head>
        <script src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=pzlujnn5zt" />
      </Head>
      <div id="map" style={mapStyle}></div>
    </>
  );
}

export default Maps;
