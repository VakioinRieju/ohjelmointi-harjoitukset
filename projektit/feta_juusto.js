function LiarDanceKalenteri() {
    const liarDance = new Date("2025-03-08");
    const day = liarDance.getDay();
    const paivat = ["perjantai, lauantai"];

    const valinnat = { viikonpäivä: "tanssiitanssii" };
    console.log(new Intl.DateTimeFormat("Fi", valinnat).format(liarDance));
    console.log(new Intl.DateTimeFormat("Fi", valinnat).format(liarDance));
}

console.log(paivat[day]);
