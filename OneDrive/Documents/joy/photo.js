const { log } = console;

let touched = false;
let reveal = false;
let pos = 0;
let isIndicator = true;
let img_f = [...document.querySelectorAll(".img-f")];


function setMiniImgDimensions() {
    img_f.map((u, idx, arr) => {
        if (idx == 0) {
            let indicator = u.parentElement.parentElement.querySelector(".indicator")
            if (!indicator) {
                isIndicator = false;
                return;
            };
            indicator.style.width = `${u.getBoundingClientRect().width}px`;
        }
    })
    requestAnimationFrame(setMiniImgDimensions);
}

if (isIndicator) {
    setMiniImgDimensions();
}

document.addEventListener("DOMContentLoaded", (e) => {
    init()
});


function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
}

function easeInOutCirc(x) {
    return x < 0.5
    ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
    : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
}

function easeOutQuint(x) {
    return 1 - Math.pow(1 - x, 5);
}


function easeInOutQuint(x) {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
}
function easeInOutBack(x) {
    const c1 = 1.70158;
    const c2 = c1 * 1.525;

    return x < 0.5
    ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
    : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
}

function easeOutElastic(x) {
    const c4 = (2 * Math.PI) / 3;

    return x === 0
    ? 0
    : x === 1
    ? 1
    : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
}

function easeInOutSine(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;
}
function init() {
    function pre () {
        let navcontent = [...document.querySelector("nav").children];
        let precontent = [...document.querySelector(".pre").children];

    

        let s;
        let id;
        let showView = true;
        let isClickedView = false;

        function pa (t) {
            if (!s)s=t;
            let c=Math.min((t-s)/1000, 1);
            let e = easeInOutCirc(c);
            let e2 = easeOutQuint(c);
            let d = 110 + (0 - 110) * e;
            let cd = 50 + (0 - 50) * e;
            let od = 500 + (0 - 500) * e2;
            if (c < 2) {
                navcontent.map((u,idx) => {
                    if (idx <= 0) {
                        let h = u.querySelector("h2");
                        h.style.transform=`translate3d(0,${d}%,0)`
                    } else {
                        setTimeout(() => {
                            let a = [...u.querySelectorAll("a")];
                            a.map((u, idx) => {
                                setTimeout(() => {
                                    u.style.transform=`translate3d(0,${d}%,0)`
                                },idx*80);
                            })
                        },60);
                    }
                })
                precontent.map((u,idx)=>{
                    if (idx == 1) {
                        u.children[0].style.clipPath = `inset(${cd}% ${cd}%)`;
                    } else if (idx == 0){
                        u.children[0].style.transform=`translate3d(0,${d}%,0)`
                    } else if (u.className!="bg"){
                        setTimeout(() => {
                            u.children[0].style.transform=`translate3d(-50%, ${od}%, 0)`
                        },400)
                    }
                })




                id=requestAnimationFrame(pa);
            }
        }

        if (id !== null) {
            id = requestAnimationFrame(pa);
            setTimeout(()=>{
                cancelAnimationFrame(id)
            },1200)
        }

        function resizepa() {
            if (window.innerWidth > 400) {
                showView = false;
            } else {
                showView = true;
            }

            if (!showView) {
                document.querySelector(".views > button").style.opacity=0;
            }

            if (showView) {
                document.querySelector(".views > button").style.opacity=1;
            }
        }

        function click () {
            document.querySelector(".views > button").addEventListener("click", (e) => {
             
                isClickedView = true;
                let id;
                let s;

                setTimeout(() => {
                    touched = true;
                }, 4500)


                function va (t) {
                    if (!s) s = t;
                    let c = Math.min((t-s)/1000,1);
                    let c2 = Math.min((t-s)/500,1);
                    let c3 = Math.min((t-s)/1050,1)
                    let e = easeOutCirc(c);
                    let e2 = easeOutQuint(c2);
                    let e3 = easeInOutBack(c3);
                    let e4 = easeInOutSine(c2);
                    let op = 0 + (0.7 - 0) * e;
                    let pop = 1 + (0.9 - 1) * e;
                    let uop = 100 + (0 - 100) * e;
                    let top = 0 + (-110 - 0) * e2;
                    let iop = 0 + (1 - 0) * c;
                    let top2 = 10 + (30 - 10) * e3;
                    let top3 = 80 + (30 - 80) * e3;
                    let ins = 25 + (100 - 25) * e4;
                    let op1 = 0 + (.8 - 0) * e;
                    



                    if (c<2) {
                        document.querySelector(".bg").style.opacity =op;
                        document.querySelector(".logo > h2").style.transform=`translate3d(0,${top}%,0)`;
                        document.querySelectorAll(".links > a").forEach((u) => u.style.transform=`translate3d(0,${top}%,0)`);


                        setTimeout(() => {
                            document.querySelector(".head-c > * > *").style.transform=`translate3d(0,${uop}%,0)`;

                            document.querySelector(".exit > * > *").style.transform=`translate3d(0,${uop}%,0)`;

                            document.querySelector(".links").style.pointerEvents = "none"

                            document.querySelectorAll(".img-c > *").forEach((u, idx) => {
                                setTimeout(()=>{
                                    u.style.opacity=iop;
                                }, idx * 300);

                                  setTimeout(() => {
                                        if (idx % 2 == 0) {
                                            u.style.top=`${top2}%`
                                        }  else {
                                            u.style.top=`${top3}%`
                                        }

                                        setTimeout(() => {
                                            document.querySelectorAll(".img-c").forEach((u) => {
                                                u.style.flex=`0 0 ${ins}%`;


                                                setTimeout(() => {
                                                    document.querySelector(".follow-img-content").style.transform=`translate3d(0,${uop}%,0)`;
                                                    document.querySelector(".indicator").style.opacity = op1;
                                                }, 50);
                                            })
                                        }, 1500);
                                        // u.style.top=idx % 3 == 0 ? `${top2}%` : `${top3}%`
                                    },1500);
                            })
                        },1000)
                        setTimeout(() => {
                            document.querySelector(".pre").style.transform=`scale(${pop})`;
                            setTimeout(() => {
                                document.querySelector(".content").style.transform=`translate3d(0,${uop}%,0)`;
                            }, 10);
                        }, 80);


                        id=requestAnimationFrame(va);
                    }

                }

                if (reveal == true) {
                    cancelAnimationFrame(id);
                    id = null;
                }

                    if (id !== null) {
                        reveal = true;
                        id = requestAnimationFrame(va);
                        setTimeout(() => {
                            document.querySelector(".bg").style.opacity=0;
                            cancelAnimationFrame(id);
                            id = null;
                        }, 1090);
                    }
            })
        }


        // window.addEventListener("resize", resizepa);

        let y2=0;
        document.addEventListener("wheel", (e) => {
            if (!isClickedView) return;

            let img = document.querySelectorAll(".img-c")[0];
            let imgW = img.clientWidth;
            let totalImg = imgW * document.querySelectorAll(".img-c").length;
            // log (totalImg);

            pos += (e.deltaY / 120 * 20) / 5;

            // pos = Math.min(0, pos);
            pos = Math.min(Math.max(0, pos), 1600)

            document.querySelector(".slider").style.transform=`translate3d(${-pos}%,0%,0)`;
        })


        document.addEventListener("touchstart", (e) => {
            y2 = e.touches[0].clientY;

        }, { passive: false});

        document.addEventListener("touchmove", (e) => {
            if (!touched) return;        
            let y = e.touches[0].clientY;

            let diff = y - y2;

            let threshold = 10;

            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    pos -= 1 * 5;
                } else {
                    pos +=1 * 5;
                }
                y2 = y;
            }


            if (pos > 1600) {
                pos = 1600;
            }
            if (pos < 0) {
                pos = 0;
            }
            pos = Math.min(pos, 1600);


            document.querySelector(".slider").style.transform=`translate3d(${-pos}%, 0,0)`;
        }, { passive: false});



      
       
        click()

    }

    function gal () {
        function back () {
            let content = document.querySelector(".content");
            let hide_h = document.querySelector(".hide > h4");
            let exit_h = document.querySelector(".exit  > .hide > p");

            let logo_h = document.querySelector(".logo > h2");
            let links_h = document.querySelectorAll(".links > a");


            

            let s;
            let id;


            let prevPage = (t) => {
                if (!s) s = t;
                let c = Math.min((t-s)/650, 1);
                let c2 = Math.min((t-s)/ 1000, 1);
                let e = easeInOutBack(c);
                let io = easeOutCirc(c2);
                let d = 0 + (-100 - 0) * e;
                let d2 = 100 + (0 - 100) * e;
                let d3 = 110 + (0 - 110) * e;
                let d4 = 0 + (100 - 0) * io;
                let d5 = .9 + (1 - .9) * e;
    
                if (c < 2) {
                    hide_h.style.transform = `translate3d(0,${d}%, 0)`;
                    exit_h.style.transform=`translate3d(0,${d}%,0)`;

                    content.style.transform = `translate3d(0,${d4}%,0)`;


                    setTimeout(() => {
                        logo_h.style.transform=`translate3d(0,${d2}%,0)`;
                        links_h[0].parentElement.style.pointerEvents = "all";
                        links_h.forEach((u) => {
                            u.style.transform=`translate3d(0,${d3}%,0)`;
                        });
                        setTimeout(() => {
                            document.querySelector(".pre").style.transform=`scale(${d5})`;
                        }, 200);
                    }, 100);


                    id = requestAnimationFrame(prevPage);
                }
            }

        

            exit_h.addEventListener('click', (e) => {
                reveal = true;
                if (id !== null) {
                    id = requestAnimationFrame(prevPage);

                    setTimeout(() => {
                        s=null;
                        cancelAnimationFrame(id);
                    }, 1050);
                 }
            });

        }
        back();
    }

    pre();
    gal();





    function revealReverse () {
        let id;
        let s;


        let hide_h = document.querySelector(".hide > h4");
        let exit_h = document.querySelector(".exit  > .hide > p");

        let logo_h = document.querySelector(".logo > h2");
        let links_h = document.querySelectorAll(".links > a");

        function rr (t) {
            if (!s) s = t;
            let c = Math.min((t-s)/1000,1);
            let c2 = Math.min((t-s)/650, 1);
            let e = easeOutCirc(c);
            let e2 = easeInOutBack(c2)
            let d = 100 + (0 - 100) * e;
            let d2 = 0 + (-100 - 0) * e2;
            let d3 = 1 + (.9 - 1) * c2;
            if (c < 2) {
                logo_h.style.transform=`translate3d(0,${d2}%,0)`;
                links_h.forEach(u => u.style.transform=`translate3d(0,${d2}%,0)`);
                links_h[0].parentElement.style.pointerEvents = "none"

                document.querySelector(".pre").style.transform=`scale(${d3})`;

                


                setTimeout(() => {
                    hide_h.style.transform = `translate3d(0,${d}%, 0)`;
                    exit_h.style.transform=`translate3d(0,${d}%,0)`;

                    

                }, 1000)
               

                document.querySelector(".content").style.transform=`translate3d(0,${d}%,0)`;
                id = requestAnimationFrame(rr);
            } 
        }

        
        document.querySelector(".views > button > span").addEventListener("click", (e) => {
            if (!reveal) return;
            if (id !== null) {
                id = requestAnimationFrame(rr);
                

                setTimeout(() => {
                    s = null;
                    cancelAnimationFrame(id)
                }, 1650);
            }
        })
    }

    function navigateHeaderTitle () {
        let logo = document.querySelector(".logo > h2");

        let path = "/";
        let url = window.location.origin;

        let nUrl = new URL(path, url);

        logo.addEventListener("click", (e) => {
            location.href = nUrl.href;
        })
    }


    function slideIndicator () {
        let follow = document.querySelector(".follow");
        let slideIndic=document.querySelector(".indicator");
        let slideWidth = slideIndic.clientWidth;
        let followWidth = follow.clientWidth;
        let dimensionWidth = 1000;
        let isStopped = false;

        let offset = 0;

        if (dimensionWidth <= 1000) {
            offset =offset* .3;
        } else {
            offset = offset *.2;
        }

    

        if (window.innerWidth <= 500) {
            offset = offset * .1;
        }
        let isEnd = false;

        let isScroll = true;
        let isClicked = false;
        let slideDiff = Math.ceil(followWidth - slideWidth);

        let imgIndicImg = [...document.querySelectorAll(".img-f")];
        let slider = document.querySelector(".slider");

        imgIndicImg.map((u, idx) => {
            u.addEventListener("click", (e) => {
                if (isStopped) return;
                // slideIndic.style.width = `${u.clientWidth}px`;
                let xPos = idx * 100;
                slideIndic.style.transform=`translate3d(${xPos}%,0,0)`;
                slider.style.transform = `translate3d(${-xPos}%,0,0)`;
                pos = xPos;
            
            })
        });

        document.addEventListener("wheel", (e) => {
            if (!isScroll) { isClicked = true; return;};

            let delta = e.deltaY;

            if (Math.abs(delta) > 1) {


                offset = pos;
                let width = follow.clientWidth - slideIndic.clientWidth;
                let totalWidth = follow.querySelectorAll("* > .img-f > *")[0].getBoundingClientRect().width * follow.clientWidth;
                
                offset = Math.min(Math.max(0, offset), totalWidth);

                log (offset, width);
                
        
                slideIndic.style.transform=`translate3d(${offset}%,0,0)`;
            } else {
                isStopped = true;
                // isClicked = true;
            }
        });

        window.addEventListener("resize", (e) => {
            let width = window.innerWidth;

            if (width < 1000) {
                offset = offset * .3;
            }
        })

        
    
    }
    navigateHeaderTitle()
    revealReverse();
    slideIndicator()
}




function display_iss () {
    let iss = document.querySelector(".iss");
    let t;

    let s = iss.children;
    if (s.length > 0) {
        s = s[0];
        t = s.textContent.split(" ");
        let gt = [...t];

        s.innerHTML = "";
        
        gt.map((u,idx) => {
            let c = document.createElement("span");
            c.style.display="inline-block";

            c.textContent = u;

            iss.children[0].appendChild(c);

        })
    }



    let id;
    let st;

    function a (t) {
        if (!st) st = t;
        let m = Math.min(Math.max(0, (t - st)/650),1);
        let e = easeInOutCirc(m);
        let d = 100 + (0 - 100) * e;
        if (m < 2) {
            [...document.querySelectorAll(".iss > h3 > span")].map((u, idx) => {
                setTimeout(() => {
                    u.style.transform=`translate3d(0,${d}%,0)`;
                }, idx * 100);
            })
            id = requestAnimationFrame(a);
        }
    }

    if (id !== null) {
        window.addEventListener('resize', (e) => {
            let h = window.innerHeight;
            if (h < 550) {
                id = requestAnimationFrame(a);

                setTimeout(() => {
                    cancelAnimationFrame(id)
                }, 650);
            }
        })

        if (window.innerHeight < 550) {
            id = requestAnimationFrame(a);

            setTimeout(() => {
                cancelAnimationFrame(id);
            }, 650)
            st = null;
        }
    }
}




display_iss()



// const horizontalContainer = document.querySelector('.slider');

// const options = {
//   root: null, 
//   rootMargin: '0px',
//   threshold: 0.5 
// };

// const callback = (entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       console.log(`${entry.target.id} is now visible horizontally!`);
//     } else {
//       console.log(`${entry.target.id} is no longer visible.`);
//     }
//   });
// };

// const observer = new IntersectionObserver(callback, options);

//   horizontalContainer.querySelectorAll(".img-c").forEach(u => {
//     observer.observe(u)
//   })

