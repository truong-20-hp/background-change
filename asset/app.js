var rangeBar = document.querySelector('.range-bar')

rangeBar.oninput = function() {
    var val = this.value
    pageChange(val)
}

function pageChange(val) {
    var span = document.querySelector('span')
    span.innerText =`${val}%`
    var body = document.querySelector('body')
    body.style.backgroundColor = `rgba(${val * 2.5} ,${val * 2.5} ,${val * 2.5} `
}

pageChange(30)