const no_ph = document.getElementById('for_pc');
const yes_ph = document.getElementById('for_phone');

if (window.innerWidth > 1000) {
    yes_ph.style.display = 'none';
} else {
    no_ph.style.display = 'none';
}



const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");
const paper8 = document.querySelector("#p8");
const paper9 = document.querySelector("#p9");
const paper10 = document.querySelector("#p10");
const paper11 = document.querySelector("#p11");
const paper12 = document.querySelector("#p12");
const paper13 = document.querySelector("#p13");
const paper14 = document.querySelector("#p14");
const paper15 = document.querySelector("#p15");
const paper16 = document.querySelector("#p16");
const paper17 = document.querySelector("#p17");
const paper18 = document.querySelector("#p18");
const paper19 = document.querySelector("#p19");
const paper20 = document.querySelector("#p20");
const paper21 = document.querySelector("#p21");
const paper22 = document.querySelector("#p22");
const paper23 = document.querySelector("#p23");
const paper24 = document.querySelector("#p24");
const paper25 = document.querySelector("#p25");
const paper26 = document.querySelector("#p26");
const paper27 = document.querySelector("#p27");
const paper28 = document.querySelector("#p28");
const paper29 = document.querySelector("#p29");
const paper30 = document.querySelector("#p30");

//Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
//Logic
let currentlocation = 1;
let numOfPapers = 30;
let maxLocation = numOfPapers + 1;

function openBook() {
    if (window.innerWidth < 1000 || window.innerWidth == 2048) {
        prevBtn.style.transform = 'translateX(0)';
        nextBtn.style.transform = 'translateX(0)';
        //  book.style.transform = 'translateX(0%)';
    } else {
        //  console.log("IAM OUT");
        book.style.transform = 'translateX(50%)';
        prevBtn.style.transform = 'translateX(-100px)';
        nextBtn.style.transform = 'translateX(100px)';
    }
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else if (window.innerWidth < 1000 || window.innerWidth == 2048) {
        book.style.transform = "translateX(0%)"
    } else {
        book.style.transform = "translateX(100%)"
    }

    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if (currentlocation < maxLocation) {
        switch (currentlocation) {
            case 1:
                openBook();
                paper1.classList.add('flipped');
                paper1.style.zIndex = 1;
                break;

            case 2:
                paper2.classList.add('flipped');
                paper2.style.zIndex = 2;
                break;

            case 3:
                paper3.classList.add('flipped');
                paper3.style.zIndex = 3;
                break;

            case 4:
                paper4.classList.add('flipped');
                paper4.style.zIndex = 4;
                break;

            case 5:
                paper5.classList.add('flipped');
                paper5.style.zIndex = 5;
                break;

            case 6:
                paper6.classList.add('flipped');
                paper6.style.zIndex = 6;
                break;

            case 7:
                paper7.classList.add('flipped');
                paper7.style.zIndex = 7;
                break;

            case 8:
                paper8.classList.add('flipped');
                paper8.style.zIndex = 8;
                break;

            case 9:
                paper9.classList.add('flipped');
                paper9.style.zIndex = 9;
                break;

            case 10:
                paper10.classList.add('flipped');
                paper10.style.zIndex = 10;
                break;

            case 11:
                paper11.classList.add('flipped');
                paper11.style.zIndex = 11;
                break;

            case 12:
                paper12.classList.add('flipped');
                paper12.style.zIndex = 12;
                break;

            case 13:
                paper13.classList.add('flipped');
                paper13.style.zIndex = 13;
                break;

            case 14:
                paper14.classList.add('flipped');
                paper14.style.zIndex = 14;
                break;

            case 15:
                paper15.classList.add('flipped');
                paper15.style.zIndex = 15;
                break;

            case 16:
                paper16.classList.add('flipped');
                paper16.style.zIndex = 16;
                break;

            case 17:
                paper17.classList.add('flipped');
                paper17.style.zIndex = 17;
                break;

            case 18:
                paper18.classList.add('flipped');
                paper18.style.zIndex = 18;
                break;

            case 19:
                paper19.classList.add('flipped');
                paper19.style.zIndex = 19;
                break;

            case 20:
                paper20.classList.add('flipped');
                paper20.style.zIndex = 20;
                break;

            case 21:
                paper21.classList.add('flipped');
                paper21.style.zIndex = 21;
                break;

            case 22:
                paper22.classList.add('flipped');
                paper22.style.zIndex = 22;
                break;

            case 23:
                paper23.classList.add('flipped');
                paper23.style.zIndex = 23;
                break;

            case 24:
                paper24.classList.add('flipped');
                paper24.style.zIndex = 24;
                break;

            case 25:
                paper25.classList.add('flipped');
                paper25.style.zIndex = 25;
                break;

            case 26:
                paper26.classList.add('flipped');
                paper26.style.zIndex = 26;
                break;

            case 27:
                paper27.classList.add('flipped');
                paper27.style.zIndex = 27;
                break;

            case 28:
                paper28.classList.add('flipped');
                paper28.style.zIndex = 28;
                break;

            case 29:
                paper29.classList.add('flipped');
                paper29.style.zIndex = 29;
                break;

            case 30:
                paper30.classList.add('flipped');
                paper30.style.zIndex = 30;
                closeBook(false);
                break;

            default:
                throw new Error("Unkown State");
                break;
        }

        currentlocation++;

    }
}

function goPrevPage() {
    if (currentlocation > 1) {
        switch (currentlocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove('flipped');
                paper1.style.zIndex = 30;
                break;

            case 3:
                paper2.classList.remove('flipped');
                paper2.style.zIndex = 29;
                break;

            case 4:
                paper3.classList.remove('flipped');
                paper3.style.zIndex = 28;
                break;

            case 5:
                paper4.classList.remove('flipped');
                paper4.style.zIndex = 27;
                break;

            case 6:
                paper5.classList.remove('flipped');
                paper5.style.zIndex = 26;
                break;

            case 7:
                paper6.classList.remove('flipped');
                paper6.style.zIndex = 25;
                break;

            case 8:
                paper7.classList.remove('flipped');
                paper7.style.zIndex = 24;
                break;

            case 9:
                paper8.classList.remove('flipped');
                paper8.style.zIndex = 23;
                break;

            case 10:
                paper9.classList.remove('flipped');
                paper9.style.zIndex = 22;
                break;

            case 11:
                paper10.classList.remove('flipped');
                paper10.style.zIndex = 21;
                break;

            case 12:
                paper11.classList.remove('flipped');
                paper11.style.zIndex = 20;
                break;

            case 13:
                paper12.classList.remove('flipped');
                paper12.style.zIndex = 19;
                break;

            case 14:
                paper13.classList.remove('flipped');
                paper13.style.zIndex = 18;
                break;

            case 15:
                paper14.classList.remove('flipped');
                paper14.style.zIndex = 17;
                break;

            case 16:
                paper15.classList.remove('flipped');
                paper15.style.zIndex = 16;
                break;

            case 17:
                paper16.classList.remove('flipped');
                paper16.style.zIndex = 15;
                break;

            case 18:
                paper17.classList.remove('flipped');
                paper17.style.zIndex = 14;
                break;

            case 19:
                paper18.classList.remove('flipped');
                paper18.style.zIndex = 13;
                break;

            case 20:
                paper19.classList.remove('flipped');
                paper19.style.zIndex = 12;
                break;

            case 21:
                paper20.classList.remove('flipped');
                paper20.style.zIndex = 11;
                break;

            case 22:
                paper21.classList.remove('flipped');
                paper21.style.zIndex = 10;
                break;

            case 23:
                paper22.classList.remove('flipped');
                paper22.style.zIndex = 9;
                break;

            case 24:
                paper23.classList.remove('flipped');
                paper23.style.zIndex = 8;
                break;

            case 25:
                paper24.classList.remove('flipped');
                paper24.style.zIndex = 7;
                break;

            case 26:
                paper25.classList.remove('flipped');
                paper25.style.zIndex = 6;
                break;

            case 27:
                paper26.classList.remove('flipped');
                paper26.style.zIndex = 5;
                break;

            case 28:
                paper27.classList.remove('flipped');
                paper27.style.zIndex = 4;
                break;

            case 29:
                paper28.classList.remove('flipped');
                paper28.style.zIndex = 3;
                break;

            case 30:
                paper29.classList.remove('flipped');
                paper29.style.zIndex = 2;
                break;

            case 31:
                openBook();
                paper30.classList.remove('flipped');
                paper30.style.zIndex = 1;
                break;




            default:
                throw new Error("Unknown State");
                break;
        }

        currentlocation--;

    }
}


// for phone

const img = document.getElementById("page");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

console.log("HELLO");


const page = [{
        name: "0001",
    },
    {
        name: "0002",
    },
    {
        name: "0003",
    },
    {
        name: "0004",
    },
    {
        name: "0005",
    },
    {
        name: "0006",
    },
    {
        name: "0007",
    },
    {
        name: "0008",
    },
    {
        name: "0009",
    },
    {
        name: "0010",
    },
    {
        name: "0011",
    },
    {
        name: "0012",
    },
    {
        name: "0013",
    },
    {
        name: "0014",
    },
    {
        name: "0015",
    },
    {
        name: "0016",
    },
    {
        name: "0017",
    },
    {
        name: "0018",
    },
    {
        name: "0019",
    },
    {
        name: "0020",
    },
    {
        name: "0021",
    },
    {
        name: "0022",
    },
    {
        name: "0023",
    },
    {
        name: "0024",
    },
    {
        name: "0025",
    },
    {
        name: "0026",
    },
    {
        name: "0027",
    },
    {
        name: "0028",
    },
    {
        name: "0029",
    },
    {
        name: "0030",
    },
    {
        name: "0031",
    },
    {
        name: "0032",
    },
    {
        name: "0033",
    },
    {
        name: "0034",
    },
    {
        name: "0035",
    },
    {
        name: "0036",
    },
    {
        name: "0037",
    },
    {
        name: "0038",
    },
    {
        name: "0039",
    },
    {
        name: "0040",
    },
    {
        name: "0041",
    },
    {
        name: "0042",
    },
    {
        name: "0043",
    },
    {
        name: "0044",
    },
    {
        name: "0045",
    },
    {
        name: "0046",
    },
    {
        name: "0047",
    },
    {
        name: "0048",
    },
    {
        name: "0049",
    },
    {
        name: "0050",
    },
    {
        name: "0051",
    },
    {
        name: "0052",
    },
    {
        name: "0053",
    },
    {
        name: "0054",
    },
    {
        name: "0055",
    },
    {
        name: "0056",
    },
    {
        name: "0057",
    },
    {
        name: "0058",
    },
    {
        name: "0059",
    },
    {
        name: "0060",
    },
];
pageIndex = 0;
console.log(pageIndex);
const loadpage = (page) => {
    img.src = "book/CAN CAN Full_page-" + page.name + ".jpg";
};

const nextpg = () => {
    pageIndex = (pageIndex + 1) % page.length;
    loadpage(page[pageIndex]);
}

const prevpg = () => {
    pageIndex = (pageIndex - 1 + page.length) % page.length;
    loadpage(page[pageIndex]);
}

next.addEventListener('click', nextpg);
prev.addEventListener('click', prevpg);