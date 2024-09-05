import { TSong } from "../services"


export const setCurrentSong = (song: TSong) => {
  
  const title = document.getElementById('current-song-title')
  const author = document.getElementById('current-song-author')
  const audio = document.getElementById('current-song-audio')
  const img = document.getElementById('current-song-img')
  
  title ? title.innerText = song.title : null
  author ? author.innerText = song.author : null
  audio?.setAttribute('src', `https://api.institutoalfa.org/api/songs/audio/${song.audio.filename}`)
  img?.setAttribute('src', `https://api.institutoalfa.org/api/songs/image/${song.image.filename}`)


  const buttonPlay = document.getElementById('current-song-play')
  buttonPlay?.addEventListener('click', playCurrentSong)

}

export const playCurrentSong = () => {
  const audio = document.getElementById('current-song-audio')
  const imgButtonPlay = document.getElementById('current-song-play-img')

  if (audio && audio instanceof HTMLAudioElement) {
    if (audio.paused) {
      audio?.play()
      imgButtonPlay?.setAttribute('src', '/pause.svg')
    } else {
      audio?.pause()
      imgButtonPlay?.setAttribute('src', '/play.svg')

    }
  }

}

export const reloadButtonPlay = () => {
  const imgButtonPlay = document.getElementById('current-song-play-img')
  imgButtonPlay?.setAttribute('src', '/pause.svg')
}