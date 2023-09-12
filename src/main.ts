import { CardSong } from './components/CardSong'
import { reloadButtonPlay, setCurrentSong } from './components/CurrentSong'
import { getData } from './services'
import './style.css'

const track_list = document.getElementById('track_list')

getData(data => {
  data.map(song => {
    track_list?.appendChild(CardSong({
      data: song,
      eventPlay: () => {
        setCurrentSong(song)
        reloadButtonPlay()
      },
      eventLike: () => console.log('Like'),
    }))

  })
})
