import { useCallback, useState, } from "react";
import axios from "axios"
import { DataInterface, EmailDataInterface } from "../Types/types";
const client = axios.create({
    baseURL: "https://alexportafolio.xyz/api/",
  });

  const client2 = axios.create({
    baseURL: "https://alexportafolio.xyz/api/",
  });

export default function useRequestResource() {
    const [data, setData] = useState<DataInterface>()
    const getResourceList = useCallback(
        (type:string,query:string)=>{

          client.get(`${type}/${query}`)
          .then((res)=>{
            setData(res.data)
          })
          .catch((err)=>console.log(err,'err'))
        },[setData]
            )

    const sendEmail = useCallback(
      (data:EmailDataInterface)=>{
        client2.post('send_email/',data)
        .then((res)=>{
          console.log(res.data)
        })
        .catch((err)=>console.log(err,'err'))
      },[]
    )
          return {data, getResourceList, sendEmail}
}
