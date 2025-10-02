document.addEventListener('click', e=>{
  if(e.target.classList.contains('play-btn')){
    const src = e.target.dataset.src;
    const player = document.getElementById('player');
    player.querySelector('source').src = src;
    player.load();
    document.getElementById('player-modal').classList.remove('hidden');
  }
  if(e.target.id === 'close'){
    const player = document.getElementById('player');
    player.pause();
    player.currentTime = 0;
    document.getElementById('player-modal').classList.add('hidden');
  }
});
