import React from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // Import Leaflet

// Sample district-wise data
const emergencyData = {
  "North Delhi": { medical: 120, fire: 30, police: 50 },
  "South Delhi": { medical: 150, fire: 20, police: 40 },
  // Add other districts
};

// Sample GeoJSON data (you'll need the actual GeoJSON for Delhi districts)
const geoJsonData = {
  type: "FeatureCollection",
  features: [
    // GeoJSON features for each district
  ],
};

// Sample locations data
const locations = [
    { name: "Hospital A", position: [28.6139, 77.2090], type: "hospital" },
    { name: "Hospital B", position: [28.6562, 77.2410], type: "hospital" },
    { name: "Clinic C", position: [28.6841, 77.2050], type: "clinic" },
    { name: "Emergency Center D", position: [28.6517, 77.2167], type: "emergency" },
    { name: "Hospital E", position: [28.7041, 77.1025], type: "hospital" },
    { name: "Primary Care Clinic F", position: [28.6013, 77.2031], type: "clinic" },
    { name: "Specialized Hospital G", position: [28.5542, 77.1866], type: "hospital" },
    { name: "Trauma Center H", position: [28.6692, 77.2115], type: "emergency" },
    { name: "Hospital I", position: [28.6193, 77.2966], type: "hospital" },
    { name: "Emergency Unit J", position: [28.5846, 77.2310], type: "emergency" },
    { name: "Clinic K", position: [28.6304, 77.2177], type: "clinic" },
    { name: "Hospital L", position: [28.6783, 77.2884], type: "hospital" },
    { name: "Ambulance Station M", position: [28.6431, 77.2220], type: "emergency" },
    { name: "Hospital N", position: [28.6439, 77.1181], type: "hospital" },
    { name: "Medical Center O", position: [28.6345, 77.2758], type: "clinic" },
    { name: "Hospital P", position: [28.6267, 77.2254], type: "hospital" },
    { name: "Clinic Q", position: [28.6480, 77.3244], type: "clinic" },
    { name: "Hospital R", position: [28.6791, 77.1825], type: "hospital" },
    { name: "Emergency Response Unit S", position: [28.6256, 77.2947], type: "emergency" },
    { name: "Clinic T", position: [28.6586, 77.1259], type: "clinic" }
  ];
  

// Custom Icon using the provided image
const customIcon = L.icon({
  iconUrl: "https://img.icons8.com/isometric/50/garage-closed.png", // Your custom icon URL
  iconSize: [40, 40], // Size of the icon
  iconAnchor: [20, 40], // Anchor point of the icon
  popupAnchor: [0, -40], // Anchor point for the popup relative to the icon
});

// Function to get the color based on the number of medical emergencies
const getColor = (district) => {
  const medicalCases = emergencyData[district]?.medical || 0;
  return medicalCases > 150 ? '#800026' :
         medicalCases > 100 ? '#BD0026' :
         medicalCases > 50  ? '#E31A1C' :
                              '#FFEDA0';
};

const DistrictMap = () => {
  return (
    <div>
      <div>
              <a href="/"><button className='login-home' type='button'>HOME</button></a>
            </div>
    <MapContainer center={[28.6139, 77.2090]} zoom={10} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON
        data={geoJsonData}
        style={(feature) => ({
          fillColor: getColor(feature.properties.District),
          weight: 2,
          opacity: 1,
          color: 'white',
          dashArray: '3',
          fillOpacity: 0.7,
        })}
        onEachFeature={(feature, layer) => {
          layer.bindPopup(`District: ${feature.properties.District}<br>Medical Emergencies: ${emergencyData[feature.properties.District]?.medical || 0}`);
        }}
      />
      
      {/* Add markers for the locations with custom icons */}
      {locations.map((location, index) => (
        <Marker key={index} position={location.position} icon={customIcon}>
          <Popup>
            {location.name} <br /> Type: {location.type}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
};

export default DistrictMap;
