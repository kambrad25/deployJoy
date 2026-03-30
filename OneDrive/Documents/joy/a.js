// const { log, error, assert } = console;

function ease () {
    function easeOutCubic(x) {
        return 1 - Math.pow(1 - x, 3);
    }
    function easeInOutCubic(x){
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }
    function easeOutQuint(x) {
        return 1 - Math.pow(1 - x, 5);
    }
    function easeInOutQuint(x) {
        return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
    }
    function easeInOutCirc(x) {
        return x < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
    }

    return [easeOutCubic,easeInOutCubic,easeOutQuint,easeInOutQuint,easeInOutCirc]
}

function init() {


    function pre () {
        let pr = document.querySelector(".pre");
        let p = document.querySelector("path");

        function ap (dur) {
            let s,id;
            function a(t) {
                if (!s) s = t;
                let m = Math.min((t-s)/dur, 1);
                let e = ease()[3](m);
                let d = 0 + (150 - 0) * e;
                p.style.transform=`translate3d(0,${-d}%,0)`;
                if (m < 1) {
                    requestAnimationFrame(a);
                }
            }
            id=requestAnimationFrame(a);
            setTimeout(() => {
                cancelAnimationFrame(a);
            }, dur);
        }


        function apr (dur) {
            let s,id;
            function a(t) {
                if (!s) s = t;
                let m = Math.min((t-s)/dur, 1);
                let e = ease()[3](m);
                let d = 0 + (100 - 0) * e;
                pr.style.clipPath=`inset(0 0 ${d}%)`;
                if (m < 1) {
                    requestAnimationFrame(a);
                }
            }
            id=requestAnimationFrame(a);
            setTimeout(() => {
                cancelAnimationFrame(a);
            }, dur);
        }
        let id, ot = 1000;
        function a (t) {
            ot = ot - 1 * 1.5
            p.style.strokeDashoffset = ot;
            if (ot > 0) {
                id=requestAnimationFrame(a);
            }
            if (ot < 830) {
                ap(1000);
            } 
            if (ot < 800) {
                apr(1000)
            }
        }
        id = requestAnimationFrame(a); 
    }
    function t () {
        const ti = document.querySelector(".t > *");
        let getTi = ti.textContent;
        if (getTi.length > 0) {
            ti.innerHTML = "";

            let len = getTi.split(" ");

            len.map((u,idx) => {
                let cd = document.createElement("div");

                cd.className='ti';
                cd.innerHTML = u;

                ti.append(cd);
            });


            if (document.querySelector(".ti")) {
                let tii = [...document.querySelectorAll(".ti")];

                tii.map((u, idx) => {
                    if (idx == (tii.length - 1)) {
                        u.style.transform=`skew(-15deg)`
                    }

                    u.style.display="inline-block";
                    u.style.margin="0 .9vw"
                })
                
            }

            

        }
    }


    t();
    pre();
};


window.onload = function () {
    init();
}