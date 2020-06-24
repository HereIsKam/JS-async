const slider = new Swiper ('.swiper-container', {
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

search.addEventListener('submit', async function (ev) {
    ev.preventDefault();
    let value = this.term.value;
    this.term.value = '';
    let res = await fetch(`https://itunes.apple.com/search?term=${value}&entity=musicVideo&limit=3`)
    let clips = await res.json()
    console.log(clips);
    clips.results.forEach(clip =>{
        let slide = renderVideoSlide(clip)
        slider.appendSlide(slide);
    })
})



function renderVideoSlide(object) {
    return `<div class="swiper-slide"><video src="${object.previewUrl}" controls></video></div>`
}