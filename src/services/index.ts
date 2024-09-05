import axios from "axios"

type Callback = (res: TSong[]) => void

export type TSong = {
  album: string,
  author: string,
  duration: string,
  audio: {
    url: string,
    filename: string
  },
  image: {
    url: string,
    filename: string
  },
  title: string, 
  _id: string
}

export const getData = async (callback: Callback): Promise<TSong[]> => {
  const response = 
    await axios.get('https://api.institutoalfa.org/api/songs')
      .then(res => {
        callback(res.data.songs)
        return res.data.songs
      })
      
  return response
}