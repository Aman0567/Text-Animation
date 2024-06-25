function breakTheText() {
    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent

    var splitText = h1Text.split("")
    var halfText = splitText.length/2

    var name = ""
 
    splitText.forEach(function(elm,idx) {
        if(idx<halfText) {
            name += `<span class="a" >${elm}</span>`
        } else {
            name += `<span class="b" >${elm}</span>`
        }
    })


    h1.innerHTML = name
}

breakTheText()

gsap.from(".a",{
    y: 100,
    duration:0.6,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15
})

gsap.from(".b",{
    y: 100,
    duration:0.6,
    delay: 0.5,
    opacity: 0,
    stagger: -0.15
})