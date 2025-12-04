

import axios from "axios";
import {useEffect, useState } from "react";


const App = () => {
  const [userData, setUserData] = useState([]);
  const [index,setIndex] = useState(1)

  const getData = () => {
    "https://picsum.photos/v2/list?page=3&limit=30"
    axios
      .get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log("error====>", err);
      });
  };
 useEffect(() => {
   getData()
 }, [index])
 

  let printUsersData = <h3 className="text-gray-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
>Loading.......</h3>

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
    <h2 className="bg-black text-white text-6xl fixed">{index}</h2>
      <div className="min-h-screen bg-black text-amber-50 p-5">
     
        
        <div className="flex flex-wrap gap-5 justify-center">
          {printUsersData}
        </div>
        <div className=" flex justify-center items-center p-4 gap-4">
          <  button className=" bg-amber-300 text-black py-4 px-6 rounded text-2xl" onClick={()=>{
            if(index > 1){
              setUserData([])
               setIndex(index - 1)
            }
          }
          }>Prev</ button>
          <  button className=" bg-amber-300 text-black py-4 px-6 rounded text-2xl" onClick={()=>{
          setIndex(index + 1)
          setUserData([])
          }}>Next</ button >
        </div>

      </div>
    </>
  );
};

export default App