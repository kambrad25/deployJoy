const { assert, error, log} = console;
let bl = document.querySelector(".pre > * > h4");
let hd = document.querySelector(".hd")
let pgg = [...document.querySelectorAll(".pgg")];
let lo = [...document.querySelectorAll(".log > * > h3")];
let li = [...document.querySelectorAll(".lin > * > * > * > a")];
let pggs = [...document.querySelectorAll(".pgg > *")];
let ta = document.querySelector(".ta");
let ti = [...document.querySelectorAll(".ti")];


let pos = 0;


function lerp (start, end, t) {
    return start + (end - start) * t;
}


const data = async () => {
    let path = "/data.json";
    let origin = window.location.origin
    let url = new URL(path, origin);

    let dta = await fetch(url);
    let dtaj = await dta.json();

    // log (dtaj)
}

// log (data());
// data()





let pre = () => {
    let blf = bl.getBoundingClientRect();

    function s1() {
        let bs;
        let bid;
        function bf (t) {
            if (!bs) bs = t;
            let m = Math.min((t-bs)/850,1);
            let mo = Math.min((t-bs)/800, 1);

            let e = ease()[4](m);
            let e2 = ease()[1](mo);

            let d = 110 + (0 - 110) * e;
            let o = 0 + (1-0) *e2;

            bl.style.transform=`translate3d(0,${d}%,0)`

            setTimeout(() => {
                pgg.map((u, idx) => {
                    setTimeout(() => {
                        u.style.opacity =o 
                    }, idx * 100);
                })
            }, 500)
            if (m < 1) {
                bid = requestAnimationFrame(bf);
            }
        }

        setTimeout(() => {
            bid = requestAnimationFrame(bf);
            setTimeout(() => {
                cancelAnimationFrame(bid);
            },1000);
        }, 150)

    
        let bll = bl.getBoundingClientRect();


        let bli = blf.top - bll.top;

        bl.style.transform=`translate3d(0,${bli}%,0)`;
        bl.style.transform="";
    }
    function s2 (){
        let hdf = hd.getBoundingClientRect();

        let id, s;
        function a (t) {
            if (!s) s = t;
            let m = Math.min((t-s)/1500, 1);
            let e = ease()[4](m);
            let d = 50 + (5 - 50) * e;

            hd.style.top = `${d}%`;

            if (m < 1) {
                id = requestAnimationFrame(a);
            }

        }

        id = requestAnimationFrame(a);
        setTimeout(() => {
            cancelAnimationFrame(id)
        }, 1500)


        let hdl = hd.getBoundingClientRect();


        let hinv = hdf.top - hdl.top;

        hd.style.top=`${hinv}rem`;
        hd.style.top='';




        pgg.map((u, idx) => {
            let uf = u.getBoundingClientRect();

            let s;
            function ufu (t) {
                if (!s) s = t;
                let m = Math.min((t-s)/1050, 1);
                let e = ease()[4](m);
                let x = 0 + ((window.innerWidth / 2.2 - 10) - 0) * e;
                let y = 0 + ((window.innerHeight / 2.5 + 10) - 0) * e
                setTimeout(() => {
                    u.style.transform=`translate3d(${-x}px, ${y}px,0)`;
                    u.style.background='black'
                }, idx * 150)
                
                if(m < 1) {
                    requestAnimationFrame(ufu);
                }

            }

            requestAnimationFrame(ufu);
            let ul = u.getBoundingClientRect();

            let uivl =uf.left - ul.left;
            let uivt = uf.top - ul.top;

            u.style.transform=`translate3d(${uivl}px, ${uivt}px, 0)`;
            u.style.transform='';



            function pgga (ele, sty, dur, from, to) {
                let id, s;
                function pa (t) {
                    if (!s) s = t;
                    let m = Math.min((t-s)/dur, 1);
                    let e = ease()[3](m);
                    let e2 = ease()[4](m);

                    let d = lerp(from, to, e);
                    let d2 = lerp(from, to, e2);


                    if (ele.length < 2 && sty == "transform") {
                        ele[0].style.transform=`translate3d(0,${d2}%,0)`;
                    }else

                    if (ele.length > 1 && sty == "transform") {
                        ele.forEach((u, idx) => {
                            setTimeout(() => {
                                u.style.transform=`translate3d(-50%,${d}%,0)`;
                            }, idx * 80)
                        })
                    }

                    if (sty == "opacity") {
                        ele.forEach((u) => {
                            u.style.opacity = d;
                        })
                    }
                    if (m < 2) {
                        id = requestAnimationFrame(pa);
                    }
                }

                id = requestAnimationFrame(pa);

                setTimeout(() => {
                    cancelAnimationFrame(id);
                }, dur+50);
            }

            // blog content

            function ptiy (ele, dur, from, to, timeVal) {
                let s, id;
                function pti (t) {
                    if (!s) s = t;
                    let m = Math.min((t-s)/dur, 1);
                    let e = ease()[3](m);
                    let d =lerp(from, to, e);

                    ele.forEach((u,idx) => {
                        setTimeout(() => {
                            u.style.transform=`translate3d(0,${d}%,0)`;
                        }, idx*timeVal);
                    })
                    if (m < 2) {
                        id=requestAnimationFrame(pti);
                    }
                }
                id = requestAnimationFrame(pti);

                setTimeout(() => {
                    cancelAnimationFrame(id);
                }, dur);
            }

            setTimeout(() => {
                pgga(document.querySelectorAll(".pgg > *"), "opacity", 300, 0, 1);
                setTimeout(() => {
                    pgga(document.querySelectorAll(".pgg > *"), "transform", 850, 110, 0);
                    setTimeout(() => {
                        pgga(document.querySelectorAll(".pgn > * > *"), "transform", 550, 110, 0)

                        setTimeout(() => {
                            ptiy(document.querySelectorAll(".ti > * > *"), 350, 110, 0, 60)

                            setTimeout(() =>{
                                lia(".tbb", 1000, 0, 100,2,20,0,1,200,0)
                            }, 50);


                        })
                    },400)
                }, 300);
            }, 500);



        })
    }

    function s3 (){
        let id;
        let s;

        function iio (t) {
            if (!s) s = t;
            let m = Math.min((t-s)/1950, 1);
            let e = ease()[4](m);
            
            let logd, lid, pggsd;

            logd = 120 + (0 - 120) * e;
            lid = 150 + (0 - 150) * e;

            lo.map((u, idx) => {
                setTimeout(() => {
                    u.style.transform=`translate3d(0,${logd}%,0)`
                }, idx * 50);
            })

            li.map((u, idx) => {
                setTimeout(()=> {
                    u.style.transform=`translate3d(0,${lid}%,0)`
                }, idx * 50);
            })

            

            if (m < 1.4) {
                id = requestAnimationFrame(iio);
            }

        }

        id = requestAnimationFrame(iio);

        setTimeout(() => {
            cancelAnimationFrame(id);
        }, 2050)
    }

    s1()
    setTimeout(() => {
        s2();
        setTimeout(() => {
            s3()
        }, 35);
    },1800);
}


// log(document.querySelectorAll(".tbb")[0].previousElementSibling)
function lia (ele, dur, f1, t1, f2=null, t2=null, f3=null, t3=null,d1=0,d2=0) {
    let s, id;
    function a (t) {
        if (!s) s = t;
        let m = Math.min((t-s)/dur,1);
        let e = ease()[3](m);
        let w = f1 + (t1 - f1) * e;
        let h = f2 + (t2-f2)*e;
        let o = f3 + (t3 - f3) * e;

        [...document.querySelectorAll(ele)].map((u,idx)=> {
            setTimeout(() =>{
                u.style.width = `${w}%`;

                setTimeout(()=>{
                    u.style.height = `${h}px`;

                    setTimeout(() => {
                        u.previousElementSibling.style.opacity=o;
                    }, 200);
                }, 1000);
            },idx*d1);
        })
        if (m < 2) {
            id =requestAnimationFrame(a);
        }
    }

    id=requestAnimationFrame(a);

    setTimeout(() => {
        cancelAnimationFrame(id);
        s = null;
    }, dur * [...document.querySelectorAll(ele)].length);
    s=null;
}

function update() {
    let resizeTimeout;
    let animationFrameId;
    let height;

    function handleResizeRAF() {
    // Cancel any pending animation frame
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }

    // Request a new frame for the actual work (e.g., recalculating layout)
    animationFrameId = requestAnimationFrame(() => {
        console.log('Performing resize calculations...');
        pgg.map((u) => {
            u.style.transform=`translate3d(${-window.innerWidth / 2.5}px,${window.innerHeight / 2.3}px,0)`;
        })

        if (window.innerWidth < 400) {
            pgg.map((u) => {
                u.style.transform=`translate3d(-${window.innerWidth / 3}px, ${window.innerHeight / 2.3}px, 0)`;
            })
        }


        if (window.innerWidth >= 700) {
             pgg.map((u) => {
                u.style.transform=`translate3d(-${window.innerWidth / 2.3}px, ${window.innerHeight / 2.4}px, 0)`;
            })
        }

        animationFrameId = null; 
    });
    }
    window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
        handleResizeRAF();
    }, 50);
});

}






function dy (ele, dur, easing, style, from, to, delay=0) {
    let s, id;
    function y (t) {
        if (!s) s = t;
        let m = Math.min((t-s)/dur, 1);
        let e = ease()[easing](m);
        
        let dyy = lerp(from, to, e);
        let dop = lerp(from, to, e);

        
        [...document.querySelectorAll(ele)].map((u, idx) => {
            if (style == "transform") {
               setTimeout(() => {
                  u.style[style]=`translate3d(0,${dyy}%,0)`;
                }, idx * delay);
            } 
            
            if (style == "opacity") {
               setTimeout(() => {
                  u.style[style] = dop;
               }, (idx + 1) * delay);
            }
        })

        if (m < 2) {
            id = requestAnimationFrame(y);
        }
    }

    id = requestAnimationFrame(y);

    setTimeout(() => {
        cancelAnimationFrame(id);
    }, dur);
}

document.querySelector(".pg1").addEventListener("click",(E) => {
    E.target.style.pointerEvents="none";
})



function click () {
    let pg = [...document.querySelectorAll(".pgg")];
    let s = document.querySelector(".s");
    let c = document.querySelector(".c");
    let origin = window.location.origin;
    let path;

    let pages = ["page1.html", "page2.html", "page3.html", "page4.html"];

    if (pg.length > 1) {
        pg = pg.map((u, idx) => {
            u.addEventListener("click", async (e) => {
               e.preventDefault();
               setTimeout(() => {
                pos=0;
               }, 1000);


            //    e.target.style.pointerEvents='none';
                            
                dy(".p > .s", 1050,3,"transform", 110, 0);
                dy(".pgn > * > *", 650, 3, "opacity", 1, 0);
                dy(".bg", 800, 3, "opacity", 0, 1)

                
                path = window.location.pathname + "?page="+ u.querySelector("span").textContent;
                let url = new URL(path, origin);

                window.history.pushState(null, null, url.href);

                let tpath;

                if (!window.location.href.split("/").includes("joy")) {
                    tpath = `${window.location.origin}/templates/${pages[idx]}`;
                } else {
                    tpath = `${window.location.origin}/joy/joy/templates/${pages[idx]}`;

                }


                // log (url.href.split("blog.html").join(`templates/${pages[idx]}`).split("?")[0])
                // let tpath = `${window.location.origin}/templates/${pages[idx]}`;
                tpath = tpath.split(",")[0];
                // log (tpath)
                

                let page = await fetch(tpath, { method: "GET" });
                page = await page.text();

                let pattern = /<div[^>]class="p"*>((.|\n|\r)*)<\/div>/im;
                let match = pattern.exec(page)[1];

                log (match)

                let p = document.createElement("div");
                p.className='p m';
                c.insertAdjacentElement("beforeend", p)
                p.innerHTML = match;


                setTimeout(() => {
                    dy(".ti > * >  *", 600, 3, "transform", 110, 0, 50);
                     setTimeout(() =>{
                        log (true)
                                // lia(".tbb", 1000, 0, 100,2,20,0,1,200,0)
                            }, 50);
                }, 1000);


                 
                let pgns = document.querySelector(".pgn > * > *")
                
                setTimeout(() => {
                   pgns.textContent = u.querySelector("span").textContent;
                }, 850)
                
                setTimeout(() => {
                    dy(".pgn > * > *", 250, 3, "opacity", 0,1, 500);
                    dy(".bg", 300, 3, "opacity", 1, 0)

                    setTimeout(() => {
                      dy(".pgn > * > *", 1050, 3, "transform", 110, 0);
                    }, 100)
                }, 500);




                 setTimeout(() => {
                    [...document.querySelectorAll(".p")][0].remove();
                    setTimeout(() => {
                        [...document.querySelectorAll(".p")][0].querySelector(".s").remove()
                    }, 500);
                }, 800);

            })
        })
    }
}


let pages = ["page1.html", "page2.html", "page3.html", "page4.html"];


// window.addEventListener("popstate", async (e) => {
//     // window.location.reload()

//     let c = document.querySelector(".c");

//     dy(".p > .s", 1050,3,"transform", 110, 0);
//     dy(".pgn > * > *", 650, 3, "opacity", 1, 0);
//     dy(".bg", 800, 3, "opacity", 0, 1)

    
//     path = window.location.pathname + "?page=3"
//     let url = new URL(path, origin);

//     window.history.pushState(null, null, url.href);


//     // log (url.href.split("blog.html").join(`templates/${pages[idx]}`).split("?")[0])
//     let tpath = `${window.location.origin}/templates/${pages[(parseInt(window.location.href.split("=")[1]) - 1)]}`;
//     tpath = tpath.split(",")[0];
//     log (tpath)
    

//     let page = await fetch(tpath, { method: "GET" });
//     page = await page.text();

//     let pattern = /<div[^>]class="p"*>((.|\n|\r)*)<\/div>/im;
//     let match = pattern.exec(page)[1];

//     log (match)

//     let p = document.createElement("div");
//     p.className='p m';
//     c.insertAdjacentElement("beforeend", p)
//     p.innerHTML = match;


//     setTimeout(() => {
//         dy(".ti > * >  *", 600, 3, "transform", 110, 0, 50);
//         setTimeout(() => {
//             // u.style.pointerEvents = "all";
//         }, 1500);
//     }, 1000);


        
//     let pgns = document.querySelector(".pgn > * > *")
    
//     setTimeout(() => {
//         pgns.textContent = window.location.href.split("=")[1];
//     }, 850)
    
//     setTimeout(() => {
//         dy(".pgn > * > *", 250, 3, "opacity", 0,1, 500);
//         dy(".bg", 300, 3, "opacity", 1, 0)

//         setTimeout(() => {
//             dy(".pgn > * > *", 1050, 3, "transform", 110, 0);
//         }, 100)
//     }, 500);




//             setTimeout(() => {
//             [...document.querySelectorAll(".p")][0].remove();
//             setTimeout(() => {
//                 [...document.querySelectorAll(".p")][0].querySelector(".s").remove()
//             }, 500);
//         }, 800);
// })

let ow = window.location.href;
window.addEventListener("popstate", (e) => {
    let w = window.location;
    
    log (w)
    // production
    // let 


    // development
    
    let path = "/blog.html";
    let ori = window.location.origin;

    let url = new URL(path, ori);

    history.pushState(null,null,url);

    location.reload()


})


function updatesh () {
    let id;
    let timeout;
    let h;

    function hraf () {
        cancelAnimationFrame(id);

        id = requestAnimationFrame(() => {

            h = window.innerHeight;
            // document.addEventListener("touchstart", (e) => {
            //     log (h);
            // })

        })

        id = null;
    }

    window.addEventListener("resize", (e) => {
        clearTimeout(timeout);


        setTimeout(() => {
            hraf();
        }, 100);
    })

}

function mscroll() {
    let ops = { passive: false};

    let o = 0, n = 0,id;
    let st,nt,vel;


    document.addEventListener("touchstart",(e) => {
        // e.preventDefault();
        const touch= e.touches[0];
        o = touch.screenY;
        st = Date.now();
        if (id) cancelAnimationFrame(id);


        [...document.querySelectorAll(".pgg")].map(u => {
            u.addEventListener("click", (e) => {
                setTimeout(() => {
                    pos=0;
                }, 1000);
            })
        })
    }, ops);

    document.addEventListener("touchmove",(e) => {
        const touch=e.touches[0];
        nt=Date.now();
        n = touch.screenY;
        let td = nt - st;
        let dy = n - o;
        o =n;

        if (td > 5) {
            vel = dy / td;
            st = Date.now();
        }

    }, ops);
    
    document.addEventListener("touchend", (e)=> {
        requestAnimationFrame(ma)
    },ops);

    function ma () {
        vel*=.95;
        pos-=vel;

        pos=Math.min(Math.max(0, pos),60);

        document.querySelector(".r").style.transform=`translate3d(0,${-pos}%,0)`;

        [...document.querySelectorAll(".ti")].map((u, idx) => {
            if (idx>=0) {
                let ta = document.querySelector(".ta");
                tat = ta.getBoundingClientRect().top;
                let ut = u.getBoundingClientRect().top;

            

                let dif = (tat - ut) / u.getBoundingClientRect().height;

                if (dif > .5) {
                    u.style.opacity=1;
                } else {
                    u.style.opacity=0;
                }
            }


        })

        if (Math.abs(vel) > .001) {
            id=requestAnimationFrame(ma);
        }
    }


}


function more () {
    let tb = [...document.querySelectorAll(".tb")];
    let hd = document.querySelector(".hd");
    let lo = document.querySelector(".log");
    let pgg = [...document.querySelectorAll(".pgg")];
    let pgn = document.querySelector(".pgn > * > *");
    let lin = [...document.querySelectorAll(".lin > * > * > * > *")];
    let clb = document.querySelector(".clb > * > *");
    // let p = document.querySelector(".p");
    let c = document.querySelector(".c");

    let thtd = document?.querySelector(".thdt > * > *");
    let shtd = document.querySelector(".shtd > * > *");

    pgg = pgg.reverse();
    function move(dur) {
        let s, id;
        function a (t) {
            if (!s) s = t;
            let m = Math.min((t-s)/dur, .95);
            let m2 = Math.min((t-s)/650, 1);
            let e = ease()[3](m);

            let e2 = ease()[4](m2);
            let d = 50 + (92 - 50) * e;
            let d2 = 4 + (90 - 4) * e;
            let d3 = 1 + (0 - 1) * e;
            let d4 = 0 + (150 - 0) * e;
            let d5 = 0 + (-110 + 0) * e;

            let d6 = 110 + (0 - 110) * e;

            let d7p = 1 + (0 - 1) * e;
            let d8 = 110 + (0 - 110) * e;


            setTimeout(() => {
                hd.style.left=`${d}%`;
                setTimeout(() => {
                    clb.style.transform=`translate3d(0, ${d6}%, 0)`;
                    document.querySelector(".p").style.opacity= d7p;
                    setTimeout(()=>{
                        pos=0;
                    },1000);
                }, 50);
            })
            lo.style.top = `${d2}%`;
            pgg.map((u, idx) => {
                setTimeout(() => {
                    u.style.opacity = d3;
                }, idx * 80);
            })

            lin.map((u, idx) => {
                setTimeout(() => {
                    u.style.transform=`translate3d(0,${d5}%,0)`
                }, idx * 80);
            })

            pgn.style.transform = `translate3d(0, ${d4}%, 0)`;


            if (m < 2) {
                id = requestAnimationFrame(a);
            }
        }

         id = requestAnimationFrame(a);

        setTimeout(()=> {
            cancelAnimationFrame(id);
        },dur)
    }


    function move2 () {
        let thtd = document?.querySelector(".thdt > * > *");
        let shtd = document.querySelector(".shdt > * > *");
        let s, id;
        function a (t) {
            if (!s) s = t;
            let m = Math.min((t-s)/1000, 1);
            let e = ease()[3](m);
            let d = 110 + (0 - 110) * e;
            let d2 = 150 + (0 - 150) * e;

            document.querySelector(".p").style.opacity=1;
            setTimeout(() => {
                if (thtd) {
                    thtd.style.transform=`translate3d(0,${d}%,0)`;
                }
                setTimeout(() => {
                    if (shtd) {
                        shtd.style.transform=`translate3d(0,${d}%,0)`;
                    }
                    setTimeout(() => {
                        [...document?.querySelectorAll(".r > * > .h > *")].map((u, idx) => {
                            setTimeout(() => {
                                u.style.transform=`translate3d(0,${d2}%,0)`;
                            }, idx * 50);   
                        })
                    }, 10);
                }, 4);
            }, 2);

            if (m < 2) {
                id=requestAnimationFrame(a);
            }
        }

        id=requestAnimationFrame(a);
        setTimeout(() => {
            cancelAnimationFrame(id);
        }, 1000);
    }

    function atb (ele, dur, from, to) {
        let s, id;
        function a (t) {
            if (!s) s = t;
            let m = Math.min((t-s)/2000, 1);


            if (m < 2) {
                id = requestAnimationFrame(a);
            }            
        }
    }

    // tb.map((u, idx) => {
        document.addEventListener("click", async (e) => {
            if (!e.target.matches(".tbs")) return;
            move(1000);


            let getTitle = e.target.dataset.id;
            
            // let getTitle = "";
            
            // let title = 
            // e.target.parentElement.parentElement.
            // parentElement.children[0].children[0].textContent.toLowerCase();

            // getTitle = title;
            // getTitle = getTitle.split(" ").join("-").toString();
         

            // let origin = window.location.origin;
            
            // let path = !origin.startsWith("https") ? "/blog.html" + "/" + getTitle : `/joy/joy/${getTitle}`;
            // // log (getTitle);

            // let url = new URL(path, origin);

            

            // window.history.pushState(null, null, url.href);
            let tb_path="";

            if (window.location.href.split("/").includes("joy")) {
                tb_path = `/joy/joy/posts/${getTitle}.html`;
            } else {
                tb_path = `/posts/${getTitle}.html`;
            }



            getTitle = "";


            let tb_url = new URL(tb_path, origin);
            let info = await fetch(tb_url.href, { method: "GET" });
            let text = await info.text();

            let pattern=/<body[^>]*>((.|\n|\r)*)<\/body>/im;
            let matches=pattern.exec(text);
            let count = matches ? matches[1] : '';

            let pd = document.createElement("div");
            pd.className="p";
            pd.innerHTML = count;
            c.insertAdjacentElement("beforeend", pd);

       


            setTimeout(() => {
                [...document.querySelectorAll(".p")][0].remove();

                if (document.querySelector(".aa")) {
                    document.querySelector(".aa").style.opacity=1;
                }
                if (document.querySelector(".bimg")) {
                    document.querySelector(".bimg").style.opacity=1;
                }
                if (document.querySelector("iframe")) {
                    document.querySelector("iframe").style.opacity=1;
                }
                if (document.querySelector(".p2b > * > a")) {
                    document.querySelector(".p2b > * > a").style.opacity = 1;
                }

                if (document.querySelector(".pimg")) {
                    document.querySelector(".pimg > *").style.opacity = 1;
                }
                if (document.querySelector(".v")) {
                    document.querySelector(".v").style.opacity=1;
                }
                 move2();
                 [...document.querySelectorAll(".sp")].map((u) => {
                    let trac = document.querySelector(".trac");

                    let topTrac = trac.getBoundingClientRect().top;

                    let uTop = u.getBoundingClientRect().top;

                    let delta = topTrac - uTop;

                    if (delta < 0) {
                        u.style.opacity=0;
                        ta()
                    } 
                 })
            }, 650);


            function ta() {
                
                requestAnimationFrame(ta);
            }



        })
    // })

}

function convertPixToPerc (ele, style) {
    // ele = document.querySelectorAll(ele)[0];
    let t = parseInt(window.getComputedStyle(ele)[style].split("px").join(""));
    let m = (t / window.innerWidth) * 100;
    return m;
}
function convertPercToPix(ele, style) {
    // ele = document.querySelectorAll(ele)[0];
     let t = parseInt(window.getComputedStyle(ele)[style].split("px").join(""));
    let percent = (t / window.innerWidth) * 100;

    let pix = (percent * window.innerWidth) / 100;
    return pix;
}

function close () {
    let clse = document.querySelector(".clse");
    let lo = document.querySelector(".log");
    let hd = document.querySelector(".hd");
    let lin = [...document.querySelectorAll(".lin > * > *> * > *")];
    lin = lin.reverse()
    let pgg = [...document.querySelectorAll(".pgg")];

    let pgn = document.querySelector(".pgn > * > *");
    let pgnn;

    function clsA(dur) {
        let convhd = convertPixToPerc(hd, "left");
        let convlo = convertPercToPix(lo, "top");
        clse.classList.add(pgnn)
        let s, id;
        function a (t) {
            if (!s) s = t;
            let m = Math.min((t-s)/dur, 1);
            let m2 = Math.min((t-s)/350,1); 
            let e = ease()[3](m);
            let e2 = ease()[0](m2);

            // close btn
            let d = 0 + (-150 - 0) * e;
            
            // translate blog span
            let d1 = convhd + (50 - convhd) * e;

            // top log span
            let d2 = 89.9 + (4 - 89.9) * e;

            // links 
            let d3 = 150 + (0 - 150) * e;

            // opacity
            let d4 = 1 + (0 - 1) * e2;
            let d5 = 0 + (1 - 0) * e;




            clse.style.transform=`translate3d(0,${d}%,0)`;

            if(document.querySelector(".p")) {
                document.querySelector(".p").style.opacity = d4;
            } 
            setTimeout(() => {
                if (document.querySelector(".m")) {
                    document.querySelector(".m").style.opacity=d5;
                }
            }, 1000);
        
            // [...document.querySelectorAll(".p")].map((u, idx) => {
            //     if (idx == (document.querySelectorAll(".p").length -1)) {
            //         u.style.opacity=d4;
            //     }
            // })
            setTimeout(() => {
                hd.style.left=`${d1}%`;
                lo.style.top=`${d2}%`;
                lin.map((u, idx) => {
                    setTimeout(() => {
                        u.style.transform=`translate3d(0,${d3}%,0)`;
                    }, idx * 50);
                });

                setTimeout(() => {
                    pgg.map((u, idx) => {
                        setTimeout(() => {
                            u.style.opacity=d5;
                        }, idx * 50);
                    })
                    setTimeout(() => {
                        pgn.style.transform=`translate3d(0,${d3}%,0)`
                    }, 55);
                }, 50);
            }, 30);

            if (m < 2) {
                id = requestAnimationFrame(a);
            }
        }
        id = requestAnimationFrame(a);

        setTimeout(() => {
            cancelAnimationFrame(id);
        }, dur);
    }


    let pages = ["", "/page1.html","/page2.html","/page3.html"];
    clse.addEventListener("click", async (e) => {
        pos = 0;
        let w = window.location;
        pgnn = pgn.textContent;
        if(!w.href.split("/").includes("joy")) {
            history.pushState(null, null, "/blog.html")
        } else {
            history.pushState(null, null, "/joy/joy/blog.html")
        }
        clsA(1000);

        setTimeout(() => {
            document.querySelector(".p").remove();

            setTimeout( async () => {
                pages.map( async (u, idx) => {
                   if(idx == parseInt(pgnn)) {
                    // idx -= 1;
                    let w = window.location;
                    if (w.href.split("/").includes("joy")) {
                        w = window.location.origin+"/joy/joy/templates/"+pages[idx];
                    } else {
                        w = window.location.origin+"/templates/"+pages[idx];
                    }
                    let p = await fetch(w);
                    let t = await p.text();

                    let pattern = /<div[^>]class="p"*>((.|\n|\r)*)<\/div>/im;
                    let match = pattern.exec(t)[1];

                    let cp = document.createElement("div");
                    cp.className="p m";
                    cp.innerHTML = match;

                    document.querySelector(".c").insertAdjacentElement("beforeend", cp);

                    setTimeout(() => {
                        let s, id;
                           function cani (t) {
                                if (!s) s= t;
                                let m = Math.min((t-s)/1000,1);
                                let e = ease()[3](m);
                                let d = 110 + (0 - 110) * e;

                                [...document.querySelectorAll(".ti > * > *")].map((u,idx) => {
                                    setTimeout(() => {
                                        u.style.transform=`translate3d(0,${d}%,0)`;
                                    }, idx * 80);
                                });
                                // [...document.querySelectorAll(".tbb")].map((u) => {
                                //     u.style.width = "100%";
                                //     u.style.height = "100%";
                                //     u.parentElement.querySelector("span").style.opacity = 1;
                                // })

                                if (m < 2) {
                                    id=requestAnimationFrame(cani);
                                }
                           }    
                           id = requestAnimationFrame(cani);

                           setTimeout(() => {
                            cancelAnimationFrame(id);
                           }, 1000);
                    }, 10)
                    return;
                   }
                })
            },3);
        },750);
    })
}

function init() {
    pre();
    update();
    updatesh();
    mscroll();
    click();
    more();
    close();
  
}

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

document.addEventListener("touchmove", (e) => {
    if (e.scale !== 1) {
        e.preventDefault();
    }
}, {passive: false})




document.addEventListener("wheel", (e) => {
    if (e.ctrlKey || e.metaKey) {
        e.preventDefault()
    }

    let y = e.deltaY / 120;

    pos +=y;

    pos = Math.min(Math.max(0, pos), 60);

    document.querySelector(".r").style.transform=`translate3d(0,${-pos}%,0)`;

    // find ti query inside wheel event so it can target 'new' items;

    let ti = [...document.querySelectorAll(".ti")];
    ti.map((u, idx) => {
        if (idx >= 0) {
            let tatp = ta.getBoundingClientRect().top;
            let utp = u.getBoundingClientRect().top;
            let deltp = (tatp - utp) / u.getBoundingClientRect().height;

            if (deltp > .5) {
                u.style.opacity=1;
            }else {
                u.style.opacity=0
            }
           

           

            
        }

    })


    

    // let options = {
    //     root: null,
    //     rootMargin: '0px',
    //     threshold:1.0

    // }

    // let cb = ((e, obs) => {
    //     e.forEach((u) => {
    //         if(u.isIntersecting) {
    //             u.target.style.opacity = 1;
    //             // e.target.style.opacity = 1;
    //         }
    //     })
    // })

    // let ins = new IntersectionObserver(cb, options);
    // [...document.querySelectorAll(".ti")].map((u, idx) => {
    //     ins.observe(u);
    // })


}, {passive:false})


let id;
function aop (ele, dur, from, to) {
    let s;
    
   function op(t) {
    // if (!r) return;
    if (!s) s = t;
    let m = Math.min((t-s)/dur, 1);
    let e = ease()[3](m);
    let d = from + (to - from) * e;
    
    ele.style.opacity = d;



    if (m < 2) {
        id = requestAnimationFrame(op);
    }
     }
     id = requestAnimationFrame(op);


        setTimeout(() => {
            cancelAnimationFrame(id)    
        }, dur);


   }

 
   
   
     let blsty = {
        zIndex: 999,
        pointerEvents: "all"
    }
    let blstyn = {
        zIndex: -1,
        pointerEvents: "none"
    }
        
   document.addEventListener("click", (e) => {

    if (e.target.matches(".pgg") || e.target.matches(".pgg > *")) {

        document.querySelector(".bl").style.pointerEvents = "all";


        setTimeout(() => {
            document.querySelector(".bl").style.pointerEvents = "none";
        }, 1500)
   
    }

   })



document.addEventListener("DOMContentLoaded", init);













