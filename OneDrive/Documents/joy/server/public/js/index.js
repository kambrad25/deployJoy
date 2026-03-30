const { log } = console;


function lerp (s, e, t) {
    return s + (e - s) * t;
}

function ease (t) {
    return {
        li: t,
        i1: Math.cos(t * (.5 * Math.PI)),
        o1: Math.sin(t * (.5 * Math.PI)),
        io1: -.5 * (Math.cos(Math.PI * t) - 1),
        i2: t * t, 
        o2: t * (2 - t),
        io2: t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1
    }
}

function init () {

    function pre () {
        let s, id
        function a (t) {
            if (!s) s = t;
            let m = Math.min((t-s)/650, 1);
            let e = ease(m).o1;
            let d = lerp(100, 0, e);
            let d2 = lerp(110,0,e);
            let d3 = lerp(100, 0, e);
            let d4 = lerp(150,0,e);

            document.querySelector(".s").style.clipPath=`inset(0 0 ${d}%)`;
            document.querySelector(".t > * ").style.transform=`translate3d(0,${d2}%,0)`;

            setTimeout(()=>{
                document.querySelector(".pw").style.clipPath=`inset(0% ${d3}% 0 0)`;
                setTimeout(() => {
                    document.querySelector(".l > *").style.transform=`translate3d(0,${d4}%,0)`
                }, 350);
            }, 350);
            if (m < 1) {
                id =requestAnimationFrame(a);
            }
        }
        id = requestAnimationFrame(a);

        setTimeout(() => {
            cancelAnimationFrame(id)
        }, 2000);
    }
    setTimeout(() => {
        pre(650);
    }, 600);


    function c () {
        let s, id
        function a(t) {
            if (!s) s = t;
            let m = Math.min((t-s)/200, 1);
            let e = ease(m).o2;
            let d = lerp(0,.9,e);
            let bo1 = lerp(100, 98, e);
            let bo2 = lerp(100, 98, e);


            document.querySelector(".bg").style.opacity=d;   
            
            document.querySelector(".bo > *:nth-child(1)").style.transform=`translate3d(${-bo1}%,0,0)`;
            document.querySelector(".bo > *:nth-child(2)").style.transform=`translate3d(${bo2}%,0,0)`
            if (m < 1) {
                id=requestAnimationFrame(a);
            }
        }
        id=requestAnimationFrame(a);
        setTimeout(()=>{
            cancelAnimationFrame(id);
        },1500);
    }

    function y (ele, dur) {
        let s, id
        function a(t) {
            if (!s) s = t;
            let m = Math.min((t-s)/dur, 1);
            let e = ease(m).o2;
            let d = lerp(110,0,e);
 

            document.querySelector(ele).style.transform=`translate3d(0,${d}%,0)`;


            setTimeout(() => {
            if (document.querySelector(".d")) {
                [...document.querySelectorAll(".d")].map((u, idx) => {
                    setTimeout(() => {
                        u.style.transform=`translate3d(0,${d}%, 0)`
                    }, idx * 150);
                })
            }
        }, 600)

         


            if (m < 1) {
                id=requestAnimationFrame(a);
            }
        }
        id=requestAnimationFrame(a);
        setTimeout(()=>{
            cancelAnimationFrame(id);
        },1500);
    }

    let co = async () => {
        let w = window.location.origin + "/mail";
        let p = await fetch(w,{ method: "GET" });
        let pd = await p.text();

        log (pd)

        let pattern=/<div[^>]class="p"*>((.|\n|\r)*)<\/div>/im;
        let matches = pattern.exec(pd);
        let bodyCount = matches ? matches[1] : '';

        let ce = document.createElement("div");
        ce.className ="p";
        ce.innerHTML=bodyCount

        // let ce2 = document.createElement("div");
        // ce2.textContent="Kam";
        // ce2.className="p2"
        // ce.append(ce2);

        document.querySelector(".a").insertAdjacentElement("beforeend", ce);
        y(".p",600)
    }





    document.querySelector(".pw").addEventListener("click", (e) => {
        document.querySelector(".l").style.opacity=0;
    })

    document.addEventListener("keydown", async (e) => {
        let n = document.querySelector(".pw > *:first-child");
        if (e.key == "Enter") {
            if (n.value.length <= 0 || n.value == "" || !n.value) {
                e.preventDefault();
            } else {
                let f = await fetch("http://localhost:6500/auth", { method: "POST", body: JSON.stringify({ pw: n.value}), headers: {"Content-Type": "application/json"} });
                let d = await f.json();
                d = d.msg.toLowerCase();
                
                if (d == "incorrect") {
                    document.querySelector(".pw > input").style.border="3px solid red";
                } else{
                    document.querySelector(".pw > input").style.border="3px solid green";
                    c();
                    co()
                    
                }
            }
        }
    })

}


document.addEventListener("DOMContentLoaded", init);
