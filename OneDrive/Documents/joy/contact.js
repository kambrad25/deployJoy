const { log } = console;
let pr = [...document.querySelectorAll(".pr")];
let pres= document.querySelector(".pre");
let fs = document.querySelector(".f > * > * > h1");
let ts = document.querySelectorAll(".t > * > h1");
let tll = [...document.querySelectorAll(".tl * > * > a")];
let tt = document.querySelector(".tt > * > *");
let yy = document.querySelector(".yy > * > *");
let oph = [...document.querySelectorAll(".oph > * > * > h2")];
let con = [...document.querySelectorAll(".bez > .con > .h > *")];
let fo = document.querySelector(".fo > button");
let fos = [...document.querySelectorAll(".fo > * > * > *")];
let foc = fo.parentElement;
let lex = document.querySelector(".line > .hl > * > *");
let frnh2 = [...document.querySelectorAll(".frn > * > h2 ")];
let frnp = document.querySelector(".frt > * > p ");
let frnh3 = [...document.querySelectorAll(".frtn > *>h3 ")];
let fotf = document.querySelector(".fot");

let hli = [...document.querySelectorAll(".hli > *")];
let fhli = [...hli].slice(23,);
hli = hli.slice(0,22)
log (hli)
function splitWords (ele) {
    let s = ele.textContent.split("");
    fs.innerHTML = "";
    s.map((u) => {
        let sp = document.createElement("span");
        sp.textContent = u;
        sp.className="fsf"


        fs.appendChild(sp);
    })


    if (fs.children.length > 1) {
        setTimeout(() => {
        let id;
        let s;

        function a (t) {
            if (!s) s = t;
            let m = Math.min(Math.max(0, (t-s)/1200), 1);
            let m2 = Math.min((t-s)/1800,1);
            let e = easings()[3](m);
            let e2 = easings()[1](m2);
            let e3 = easings()[5](m2);
            let d = 110 + (0 - 110) * e;
            let d2 = 1 + (0 - 1) * e3;
        

            if (m < 2) {
                [...document.querySelectorAll(".fsf")].map((u, idx) => {
                    u.style.transform=`translate3d(0,${d}%,0)`
                })

                ts.forEach((u, idx) => {
                    u.style.transform=`translate3d(0,${d}%,0)`
                });


                tll.map((u) => {
                    u.style.transform=`translate3d(0,${d}%,0)`;
                })

                tt.style.transform=`translate3d(0,${d}%,0)`
                yy.style.transform=`translate3d(0,${d}%,0)`;

                id=requestAnimationFrame(a);
            }
        }

        if (id !== null) {
            id = requestAnimationFrame(a)


            setTimeout(() => {
                cancelAnimationFrame(id)
            }, 1500);
        }
    }, 4900)
    }
}

function qmsg () {
    
    let id;
    let s;
    function msg (t) {
        if (!s) s = t;
        let m = Math.min(Math.max(0, (t-s)/1500), 1);
        let e = easings()[3](m);
        let e2 = easings()[5](m);
        let d = 150 + (0 - 150) * e;
        let d2 = 1 + (0 - 1) * e2;

        if (m < 2) {
            setTimeout(() => {
                oph.map((u, idx) => {
                    setTimeout(() => {
                        u.style.transform=`translate3d(0,${d}%,0)`;
                    }, idx * 150);
                });

            setTimeout(() => {
                    document.querySelector(".oph").style.opacity = Math.max(0, d2)
                }, 1800);
            }, 1600);
            id = requestAnimationFrame(msg);
        }
    }

    if (id !== null) {
        id = requestAnimationFrame(msg);

        setTimeout(() => {
            cancelAnimationFrame(id)
        }, 2000);
    }

}


function bez () {
    let id;
    let s;
    function a (t) {
        if (!s) s=t;
        let m = Math.min(Math.max(0, (t-s)/1050), 1);
        let m2 = Math.min(Math.max(0, (t-s)/850), 1);
        let e = easings()[3](m);
        let e2 = easings()[4](m);
        let e3 = easings()[2](m2);

        let d = 150 + (0 - 150) * e;




        let d2 = 0 + (1 - 0) * e2;
        let d3 = 110 + (0 - 110) * e3;


        if (m < 2) {
            con.map((u,idx) => {
                setTimeout(() => {
                    u.style.transform=`translate3d(0,${d}%,0)`;
                }, idx * 105);
            });

            setTimeout(() => {
                fo.style.opacity = d2;
                setTimeout(() => {
                    fos.map((u,idx) =>{
                        setTimeout(() => {
                            u.style.transform=`translate3d(0,${d3}%,0)`
                        }, idx * 65)
                    })
                }, 200);
            }, 535); 

            id = requestAnimationFrame(a);
        }
    }

    
    if (id !== null) {
        setTimeout(() => {
            id = requestAnimationFrame(a);

            setTimeout(() => {
                cancelAnimationFrame(id);
            }, 1000);
        }, 4900) 
    }
}


function af () {
    foc.addEventListener("click", (e) => {
        let id;
        let s;
        function a(t) {
            if (!s) s= t;
            let m = Math.min((t-s)/1000,1);
            let e = easings()[3](m);
            let d = 0 + (100 - 0) * e;
            let d2 = 110 + (0 - 110) * e;

            if (m < 2) {
                document.querySelector(".line").style.maxWidth = `${d}%`;
                

                setTimeout(() => {
                    hli.map((u) => u.style.opacity=1)
                    document.querySelector(".line").style.height = `${d}%`;

                    lex.style.transform = `translate3d(0,${d2}%,0)`
                }, 900);
                id = requestAnimationFrame(a);
            }
        }

        if (id !== null) {
            id = requestAnimationFrame(a);
            
            setTimeout(() => {
                frma()
            }, 500)

            setTimeout(() => {
                cancelAnimationFrame(id);
            }, 1000);
        }

        

        s = null;
    })



    lex.addEventListener("click", (e) => {
        
        if (document.querySelector(".err")) {
            document.querySelector(".err").remove()
        }
        let id;
        let s;
        function a(t) {
            if (!s) s= t;
            let m = Math.min((t-s)/1000,1);
            let m2 = Math.min((t-s)/450,1);
            let e = easings()[3](m);
            let e2 = easings()[2](m2);
            let d = 100 + (0 - 100) * e;
            let d2 = 100 + (.3 - 100) * e;
            let d3 = 0 + (110 - 0) * e2;
            let d4 = 1 + (0 - 1) * m2;


            setTimeout(() => {
                hli.map((u) => u.style.opacity = d4);
                fotf.style.opacity = d4;

                setTimeout(() => {
                    document.querySelectorAll(".frtn > * > * > h3").forEach((u, idx) => u.style.transform=`translate3d(0,350%,0)`)
                }, 500);
            }, 100);
            if (m < 2) {
                setTimeout(() => {
                    document.querySelector(".line").style.height = `${d2}%`;
                }, 900)
                setTimeout(() => {
                    document.querySelector(".line").style.maxWidth = `${d}%`;
                }, 2000);
                id = requestAnimationFrame(a);
            }
        }

        if (id !== null) {
            id = requestAnimationFrame(a);

            setTimeout(() => {
                cancelAnimationFrame(id);
            }, 1000);
        }

        s = null;
    })
}


function frma () {
    let id;
    let s;

    let isAnimated = false;
    function a (t) {
        if (isAnimated) return;
        if (!s) s = t;

        let m = Math.min((t - s) / 2000,1);

        let e = easings()[4](m);
        

        let d1, d2, d3, d4;

        d1 = 250 + (0 - 250) * e;

        d4 = 0 + (1 - 0) * e;


        if (m < 2) {
            hli.map((u, idx) => {
                if (idx > 0) {
                    setTimeout(() => {
                        u.style.transform=`translate3d(0,${d1}%,0)`;
                    }, idx * 60);
                }
            })

            setTimeout(() => {
                fotf.style.opacity=d4
            }, 1520)
            id = requestAnimationFrame(a);
        }
    }
    

    if (id !== null) {
        id = requestAnimationFrame(a);


        setTimeout(() => {
            cancelAnimationFrame(id);
        }, 2500);
    }


    // s = null;
}


splitWords(fs)
qmsg();
bez();
af()

function easings () {
    function easeOutCirc(x) {
        return Math.sqrt(1 - Math.pow(x - 1, 2));
    }


    function easeInCirc(x) {
        return 1 - Math.sqrt(1 - Math.pow(x, 2));
    }

    function easeInOutCubic(x) {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }


    function easeOutCubic(x) {
        return 1 - Math.pow(1 - x, 3);
    }

    function easeInOutQuint(x) {
        return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
    }

    function easeInSine(x) {
        return 1 - Math.cos((x * Math.PI) / 2);
    }
    return [easeOutCirc, easeInCirc, easeInOutCubic, easeOutCubic, easeInOutQuint, easeInSine];
}

function animate () {
    let id;
    let s;

    function pre (t) {
        if (!s) s = t;
        let m = Math.min(Math.max(0, (t-s)/550), 1);
        let m2 = Math.min(Math.max(0, (t-s)/1000),1);
        let e = easings()[2](m);
        let e2 = easings()[easings().length - 2](m2);
        let d = 100 + (0 - 100) * e;
        let d2 = 0 + (50 - 0) * e2;
        let d3 = 0 + (100 - 0) * e2;


        if (m < 2) {
            pr.map((u, idx) => {
                setTimeout(() => {
                    u.style.transform=`translate3d(0,${d}%,0)`;
                }, idx * 60);
            })


            setTimeout(() => {
                    pres.style.clipPath=`inset(0% ${d2}%)`;

                    setTimeout(() => {
                        pr.map((u) => {
                            u.style.transform=`translate3d(0,${d3}%,0)`
                        })
                    }, 50)
            }, 1000);
            id = requestAnimationFrame(pre);
        }
    }

    if (id !== null) {
        id = requestAnimationFrame(pre);

        setTimeout(() => {
            cancelAnimationFrame(id);
        }, 1050)
    }
}

function init() {
   animate()
}

document.addEventListener("DOMContentLoaded", init)



let u = "http://localhost:6500";
let p = "/mail/joypowell/v1/1";

let pa = new URL(p, u);
let ne = document.createElement("div");
ne.className="err"
log(pa)
const postA = async (e) => {
    e.preventDefault();
    let body = {
        fname: document.querySelector(".fname").value,
        lname: document.querySelector(".lname").value,
        email: document.querySelector(".email").value,
        msg: document.querySelector(".msg").value
    }


    for (let i in body) {
        if (body[i] === "" || body[i].split("").length <= 0) {

            ne.textContent="Fill in required fields.";
            ne.style.color='red';
        
            document.querySelector(".fot").prepend(ne);
            return;
        } else {
            ne.textContent=`Thanks ${body.fname}! We will get back with you shortly.`;
            ne.style.color='green';
            document.querySelector(".fot").prepend(ne);
        }
    }
    try {
        let t = await fetch(pa.href, { method: "POST",headers: {"Content-Type": "application/json"}, body: JSON.stringify(body) });
        let d = await t.json();

        log(d);



        setTimeout(() => {
            let fields = ['.fname', '.lname', '.email', '.msg'];

            fields.map((u, idx) => {
                document.querySelector(u).value='';
            })
        }, 1000);
    } catch(e) {
        log (e.message);
    }

    // log (d)
}


let b = document.querySelector(".fotb");
b.addEventListener("click", (e) => {
    postA(e)
});

// EXAMPLE 1

// let raid;
// let p1 = 0;

// function a () {
//     p1 += 1;

//     log (p1);
//     if (p1 >= 100) {
//         p1 = 100;
//         cancelAnimationFrame(raid)
//     }

//     raid = requestAnimationFrame(a)
// }

// a()
// setTimeout(() => {
//     cancelAnimationFrame(raid);
// }, 1630);



// EXAMPLE 2

// let r = 0;
// let e = 0;
// let rid;
// function b () {
//     r+=1;
//     if (r <= 200) {
//         log (r);
//         rid = requestAnimationFrame(b);
//     }
// }

// rid = requestAnimationFrame(b);


// let pos = 0;

// let isScrolling = true;

// let start = 0;
// let end = 100;
// document.addEventListener("wheel", (e) => {
//     if (!isScrolling) return;
//     e.preventDefault();

//     let y = e.deltaY / 50;
    
//     let threshold = .6;

//     pos += y;

//     pos = Math.min(Math.max(start, pos), end);

//     document.querySelector(".f").style.transform=`translate3d(0,${-pos}%,0)`;

    
// }, { passive: false});

