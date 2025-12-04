

import axios from "axios";
import {useState } from "react";


const App = () => {
  const [userData, setUserData] = useState([]);


  const getData = () => {
    axios
      .get("https://picsum.photos/v2/list?page=3&limit=30")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log("error====>", err);
      });
  };

  let printUsersData = <h3>No Users Available</h3>

  if (userData.length > 0) {
    printUsersData = userData.map((item, idx) => {
   return (
  <div
    key={idx}
    className="w-full sm:w-[48%] md:w-[31%] lg:w-[23%] xl:w-[19%] bg-neutral-900 p-3 rounded-xl shadow"
  >
    <img
      className="w-full h-48 object-cover rounded-lg"
      src={item.download_url}
      alt=""
    />
    <h2 className="text-white text-center mt-2">{item.author}</h2>
  </div>
);

    });
  }

  return (
    <>
      <div className="min-h-screen bg-black text-amber-50 p-5">
        <button
          onClick={getData}
          className="bg-green-400 text-black px-10 py-5 mb-5 rounded font-bold"
        >
          Get Data
        </button>

        
        <div className="flex flex-wrap gap-5 justify-center">
          {printUsersData}
        </div>
      </div>
    </>
  );
};

export default App