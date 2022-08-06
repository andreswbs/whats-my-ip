import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState({
    "ip": "88.196.28.13",
    "location": {
        "country": "EE",
        "region": "Harjumaa",
        "city": "Tallinn",
        "lat": 59.43696,
        "lng": 24.75353,
        "postalCode": "",
        "timezone": "+03:00",
        "geonameId": 588409
    },
    "as": {
        "asn": 3249,
        "name": "ESTPAK",
        "route": "88.196.0.0/16",
        "domain": "http://www.telia.ee",
        "type": "Cable/DSL/ISP"
    },
    "isp": "Telia Eesti AS",
    "proxy": {
        "proxy": false,
        "vpn": false,
        "tor": false
    }
})
  const loadIpData = async function() {
    console.log(process.env.REACT_APP_API_KEY)
    const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}`)
    const result = await response.json()
    console.log(result)
    setUserData(result)
  }

  useEffect(()=> {
    //loadIpData()
  }, [])

  let ipData = <div>Loading ...</div>

  if (userData) {
    ipData = (
      <div>
        <p><span>User IP:</span>{userData.ip}</p>
        <p><span>ISP:</span>{userData.isp}</p>
        <p><span>Country:</span>{userData.location?.country}</p>
        <p><span>City:</span>{userData.location?.city}</p>
        <p><span>Lat:</span>{userData.location?.lat}</p>
        <p><span>Long:</span>{userData.location?.lng}</p>
      </div>
    )
  }
  
  return (
    <div className="App">
      <h1>Your ip is</h1>
      {ipData}

    </div>
  );
}

export default App;
