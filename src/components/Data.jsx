import React, { useEffect, useState } from "react";
import axios from "axios";
import Showdata from "./Showdata";

function Data() {
  const [users, setUsers] = useState([]);

  async function fetchPhotos() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    fetchPhotos();
  }, []);

  return <Showdata users={users} />;
}

export default Data;
