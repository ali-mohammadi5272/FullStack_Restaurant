import React from "react";
import image from "./../../assets/images/map_image.png";
import icon_image from "./../../assets/images/Icon_Direction.png";
import "./contactUsMap.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = (): React.ReactNode => {
  return (
    <>
      <div className="h-[600px] w-full map">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={true}
          className="h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup minWidth={450}>
              <div className="flex items-center gap-5">
                <div className="w-1/5">
                  <img
                    src={image}
                    alt="Restaurant's Image"
                    className="w-full h-auto"
                  />
                </div>
                <div className="w-2/5 flex-grow">
                  <h3 className="text-lg font-bold !mb-2">
                    Delizioso Restaurant
                  </h3>
                  <p className="text-sm !m-0">
                    Bronx, NY 10463, Amerika Serikat
                  </p>
                  <p className="text-sm !m-0">40.885147,-73.9220459</p>
                </div>
                <div className="w-1/5">
                  <img
                    src={icon_image}
                    alt="Icon's Image"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
