window.addEventListener('scroll', function(event) {
    const pos = window.pageYOffset;
    const sticky = document.getElementById('sticky');
    let contents = document.getElementsByClassName('button');
    contents = Array.from(contents);
    // console.log(pos);
    if (pos >= 400) {
      console.log('表示');
      sticky.classList.add('stickyAfter');
      contents.forEach(function(event) {
        event.classList.add('black')
      });
    } else {
      console.log('非表示');
      sticky.classList.remove('stickyAfter');
      contents.forEach(function(event) {
        console.log(event);
        event.classList.remove('black')
      });
  };
});

const item01 = document.getElementById('item01');
const item02 = document.getElementById('item02');
const item03 = document.getElementById('item03');
const modal01 = document.getElementById('modal01');
const modal02 = document.getElementById('modal02');
const modal03 = document.getElementById('modal03');
const mask = document.getElementById('mask');

item01.addEventListener('click', () => {
    console.log('happy!');
    modal01.classList.remove('disappear');
    modal01.classList.add('appear');
    mask.classList.remove('disappear');
    mask.classList.add('m_appear');
})

modal01.addEventListener('click',() => {
    console.log('close!');
    modal01.classList.remove('appear');
    modal01.classList.add('disappear');
    mask.classList.remove('m_appear');
    mask.classList.add('disappear');
})

item02.addEventListener('click', () => {
    console.log('happy!');
    modal02.classList.remove('disappear');
    modal02.classList.add('appear');
    mask.classList.remove('disappear');
    mask.classList.add('m_appear');
})

modal02.addEventListener('click',() => {
    console.log('close!');
    modal02.classList.remove('appear');
    modal02.classList.add('disappear');
    mask.classList.remove('m_appear');
    mask.classList.add('disappear');
})

item03.addEventListener('click', () => {
    console.log('happy!');
    modal03.classList.remove('disappear');
    modal03.classList.add('appear');
    mask.classList.remove('disappear');
    mask.classList.add('m_appear');
})

modal03.addEventListener('click',() => {
    console.log('close!');
    modal03.classList.remove('appear');
    modal03.classList.add('disappear');
    mask.classList.remove('m_appear');
    mask.classList.add('disappear');
})

mask.addEventListener('click', () => {
    modal01.classList.remove('appear');
    modal01.classList.add('disappear');
    modal02.classList.remove('appear');
    modal02.classList.add('disappear');
    modal03.classList.remove('appear');
    modal03.classList.add('disappear');
    mask.classList.add('disappear');
})