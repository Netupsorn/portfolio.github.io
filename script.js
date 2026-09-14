const portfolioImages = [

    "portfolio1.png",
    "portfolio2.png",
    "portfolio3.png",
    "portfolio4.png",
    "portfolio5.png",
    "portfolio6.png",
    "portfolio7.png",
    "portfolio8.png",
    "portfolio9.png",
    "portfolio10.png",
    "portfolio11.png",
    "portfolio12.png"

];


const portfolioTitles = [

    "หน้าปก Portfolio",

    "Statement of Purpose",

    "Profile",

    "Education",

    "Transcript",

    "ประสบการณ์ฝึกงาน",

    "STEM Education",

    "กิจกรรมโรงเรียน",

    "กิจกรรมและการทำงานร่วมกับผู้อื่น",

    "กิจกรรมเพื่อสังคม",

    "Certificates",

    "Thank You"

];


let currentPortfolio = 1;



function openPortfolio(number) {

    currentPortfolio = number;

    showPortfolio();

    document
        .getElementById("portfolioModal")
        .classList
        .add("show");

}



function showPortfolio() {

    document
        .getElementById("modalImage")
        .src =
        portfolioImages[currentPortfolio - 1];


    document
        .getElementById("modalTitle")
        .textContent =
        portfolioTitles[currentPortfolio - 1];

}



function closePortfolio() {

    document
        .getElementById("portfolioModal")
        .classList
        .remove("show");

}



function nextPortfolio() {

    currentPortfolio++;


    if (
        currentPortfolio >
        portfolioImages.length
    ) {

        currentPortfolio = 1;

    }


    showPortfolio();

}



function previousPortfolio() {

    currentPortfolio--;


    if (currentPortfolio < 1) {

        currentPortfolio =
            portfolioImages.length;

    }


    showPortfolio();

}



/* คลิกพื้นหลังเพื่อปิด */

document
    .getElementById("portfolioModal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closePortfolio();

            }

        }
    );



/* ปุ่มคีย์บอร์ด */

document.addEventListener(
    "keydown",
    function(event) {

        const modal =
            document
            .getElementById(
                "portfolioModal"
            );


        if (
            !modal
                .classList
                .contains("show")
        ) {

            return;

        }


        if (
            event.key === "Escape"
        ) {

            closePortfolio();

        }


        if (
            event.key === "ArrowRight"
        ) {

            nextPortfolio();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            previousPortfolio();

        }

    }
);
