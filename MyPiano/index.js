//white keys sounds
let a = new Audio("A.mp3");
let s = new Audio("S.mp3");
let d = new Audio("D.mp3");
let f = new Audio("F.mp3");
let g = new Audio("G.mp3");
let h = new Audio("H.mp3");
let j = new Audio("J.mp3");
//black keys sounds
let w = new Audio("W.mp3");
let e = new Audio("E.mp3");
let t = new Audio("T.mp3");
let y = new Audio("Y.mp3");
let u = new Audio("U.mp3");
//нажатие клавиш с клавиатуры
document.addEventListener("keydown", function (event) {
    //for white keys
    if (event.code === "KeyA") {
        a.play();
    }
    else if (event.code === "KeyS") {
        s.play();
    }
    else if (event.code === "KeyD") {
        d.play();
    }
    else if (event.code === "KeyF") {
        f.play();
    }
    else if (event.code === "KeyG") {
        g.play();
    }
    else if (event.code === "KeyH") {
        h.play();
    }
    else if (event.code === "KeyJ") {
        j.play();
    }
    else {
        console.log("Warning! Undefined key.");
    }
});
    //for black keys
document.addEventListener("keydown", function (event) {
    if (event.code === "KeyW") {
        w.play();
    }
    else if (event.code === "KeyE") {
        e.play();
    }
    else if (event.code === "KeyT") {
        t.play();
    }
    else if (event.code === "KeyY") {
        y.play();
    }
    else if (event.code === "KeyU") {
        u.play();
    }
    else {
        console.log("Warning! Undefined key.");
    }
});
//нажатие клавиш кликом
//for white keys
document.getElementById("a").addEventListener("click", function () {
    a.play();
});
document.getElementById("s").addEventListener("click", function () {
    s.play();
});
document.getElementById("d").addEventListener("click", function () {
    d.play();
});
document.getElementById("f").addEventListener("click", function () {
    f.play();
});
document.getElementById("g").addEventListener("click", function () {
    g.play();
});
document.getElementById("h").addEventListener("click", function () {
    h.play();
});
document.getElementById("j").addEventListener("click", function () {
    j.play();
});
//for black keys
document.getElementById("w").addEventListener("click", function () {
    w.play();
});
document.getElementById("e").addEventListener("click", function () {
    e.play();
});
document.getElementById("t").addEventListener("click", function () {
    t.play();
});
document.getElementById("y").addEventListener("click", function () {
    y.play();
});
document.getElementById("u").addEventListener("click", function () {
    u.play();
});