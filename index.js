window.onscroll = function () {
    var top = window.scrollY;
    console.log(top);
    if (top > 240) {
        document.querySelector("#txt2").style.display = "flex"
    }
    else {
        document.querySelector("#txt2").style.display = "none"
    }
}

document.querySelector('#menubtn').addEventListener('click', function () {
    document.querySelector('#menupannel').style.top = "0"
    document.querySelector('body').style.overflow = 'hidden'
    gsap.from('#lftlinks a', {
        y: 10,
        opacity: 0,
        stagger: .1,
        delay: .3

    })

    gsap.from('#rgtlinks #lft a', {
        y: 10,
        opacity: 0,
        stagger: .1,
        delay: .3
    })

    gsap.from('#rgtlinks #mid a', {
        y: 10,
        opacity: 0,
        stagger: .1,
        delay: .3
    })

    gsap.from('#rgtlinks #rgt a', {
        y: 10,
        opacity: 0,
        stagger: .1,
        delay: .3
    })
})

document.querySelector('#overlay i').addEventListener('click', function () {
    document.querySelector('#menupannel').style.top = "-100%"
    document.querySelector('body').style.overflow = 'initial'
})

