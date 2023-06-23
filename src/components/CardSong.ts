import { TSong } from "../services"

type TCardSong = {
  data: TSong,
  eventPlay: () => void,
  eventLike: () => void
}

export const CardSong = ({
  data,
  eventLike,
  eventPlay
}: TCardSong) => {

  const song = document.createElement('div')
  song.classList.add('shadow-lg','shadow-[#f7258450]','py-3','w-64','px-6','ring-custom','relative')
  song.innerHTML = `
  <div class="h-52 w-full"></div>
  <div class="h-52 w-60 -top-3 -right-3 absolute">
    <img class="object-cover w-full h-full" src="${data.path.front}" alt="">
  </div>
  <div>
    <h4 class="font-semibold py-2">${data.title}</h4>
    <div class="flex justify-between opacity-60 text-sm whitespace-nowrap overflow-clip">
      <p>${data.author}</p>
      <p>${data.album}</p>
    </div>
  </div>
  `;

  const buttonsContainer = document.createElement('div')
  buttonsContainer.classList.add('flex','justify-between','py-2')

  const buttonPlay = document.createElement('button');
  buttonPlay.classList.add('text-sm','ring-1','ring-white','py-1','px-6','rounded-full')
  buttonPlay.innerHTML = 'Play'
  buttonPlay.addEventListener('click', eventPlay)

  const buttonLike = document.createElement('button');
  buttonLike.classList.add('py-1','px-6','rounded-full','bg-gradient-to-tl','to-pink','from-blue','font-bold')
  buttonLike.innerHTML = 'Like'
  buttonLike.addEventListener('click', eventLike)


  buttonsContainer.appendChild(buttonPlay)
  buttonsContainer.appendChild(buttonLike)

  song.appendChild(buttonsContainer)
  return song
}