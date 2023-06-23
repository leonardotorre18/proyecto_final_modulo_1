import { CardSong } from './components/CardSong'
import { getData } from './services'
import './style.css'

const track_list = document.getElementById('track_list')

getData(data => {
  data.map(song => {
    track_list?.appendChild(CardSong({
      data: song,
      eventPlay: () => console.log('Play'),
      eventLike: () => console.log('Like'),
    }))

  })
})
