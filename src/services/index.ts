import axios from "axios"

type Callback = (res: TSong[]) => void

export type TSong = {
  album: string,
  author: string,
  duration: string,
  path: {
    audio: string,
    front: string
  },
  title: string, 
  _id: {
    $oid: string
  }
}

export const getData = async (callback: Callback): Promise<TSong[]> => {
  const response = 
    await axios.get('https://leonardoapi.onrender.com/music')
      .then(res => {
        callback(res.data)
        return res.data
      })
      
  return response
}