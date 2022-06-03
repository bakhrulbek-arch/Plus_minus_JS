let num = document.querySelector(".s.value")
let h1 = document.querySelector("h1")


let min = document.querySelector(".min")
min.onclick = () => {
    h1.innerHTML = num--
    console.log(num);
}

let max = document.querySelector(".max")
max.onclick = () => {
    h1.innerHTML = num ++
    console.log(num);
}


let min_5 = document.querySelector(".min_5")
min_5.onclick = () => {
    num = num - 5
    h1.innerHTML = num
    console.log(num);
}

let min_10 = document.querySelector(".min_10")
min_10.onclick = () => {
    num = num - 10
    h1.innerHTML = num
    console.log(num);
}

let min_100 = document.querySelector("#clc_min")
min_100.onclick = () => {
    num = num - 100
    h1.innerHTML = num
    console.log(num);
}




let max_5 = document.querySelector(".max_5")
max_5.onclick = () => {
    num = num + 5
    h1.innerHTML = num
    console.log(num);
}

let max_10 = document.querySelector(".max_10")
max_10.onclick = () => {
    num = num + 10
    h1.innerHTML = num
    console.log(num);
}

let max_100 = document.querySelector("#clc_max")
max_100.onclick = () => {
    num = num + 100
    h1.innerHTML = num
    console.log(num);
}

let clr = document.querySelector(".clr")
clr.onclick = () => {
    num = 0
    h1.innerHTML = "0"
}