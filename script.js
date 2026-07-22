// =========================
// Portfolio JS
// =========================

// AOS
AOS.init({
    duration: 1000,
    once: false
});

// =========================
// Loading Screen
// =========================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader").style.opacity="0";

        setTimeout(()=>{

            document.getElementById("loader").style.display="none";

        },500);

    },800);

});

// =========================
// Back To Top
// =========================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// =========================
// Lightbox
// =========================

const gallery=document.querySelectorAll(".gallery img");

const lightbox=document.getElementById("lightbox");

const lightImg=document.getElementById("lightbox-img");

const close=document.getElementById("close");

gallery.forEach(img=>{

    img.onclick=()=>{

        lightbox.style.display="flex";

        lightImg.src=img.src;

    }

});

close.onclick=()=>{

    lightbox.style.display="none";

}

lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

}

// =========================
// Navbar Glow
// =========================

window.addEventListener("scroll",()=>{

    const nav=document.querySelector("nav");

    if(window.scrollY>80){

        nav.style.boxShadow="0 0 25px #FFD700";

    }else{

        nav.style.boxShadow="none";

    }

});

// =========================
// Active Menu
// =========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(sec=>{

        const top=sec.offsetTop-120;

        const height=sec.clientHeight;

        if(scrollY>=top){

            current=sec.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});
// =========================
// Animated Star Background
// =========================

const starContainer = document.createElement("div");

starContainer.className = "stars";

document.body.appendChild(starContainer);


for(let i = 0; i < 80; i++){

    const star = document.createElement("span");

    star.className = "star";

    star.style.left = Math.random()*100 + "%";

    star.style.top = Math.random()*100 + "%";

    star.style.animationDelay = 
    Math.random()*5 + "s";

    star.style.animationDuration =
    (3 + Math.random()*5) + "s";

    starContainer.appendChild(star);

}


// =========================
// Mouse Glow Effect
// =========================

const glow = document.createElement("div");

glow.className="mouse-glow";

document.body.appendChild(glow);


document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});


// =========================
// Scroll Reveal
// =========================

const revealElements =
document.querySelectorAll(
".glass,.title,.activity,.gallery img"
);


const revealObserver =
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }

});

},
{
    threshold:0.15
});


revealElements.forEach(el=>{

    el.classList.add("hidden");

    revealObserver.observe(el);

});


// =========================
// Mobile Menu
// =========================

const menuBtn=document.createElement("div");

menuBtn.className="menu-btn";

menuBtn.innerHTML=
`
<i class="fa-solid fa-bars"></i>
`;

document.querySelector("nav")
.appendChild(menuBtn);



menuBtn.onclick=()=>{

    document.querySelector("nav ul")
    .classList.toggle("open");

};
