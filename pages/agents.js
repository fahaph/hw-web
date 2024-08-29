// ข้อมูลเมนูอาหารในรูปแบบ Array ของ Object รวมถึงรูปภาพ
const agentItems = [
    {   
        name: "Sova",
        role: "Initiator",
        match: "36",
        win: "41.7%",
        kd: "0.99",
        hs: "22.8%",
        img: "../img/sova.webp"
    },
    { 
        name: "Raze",
        role: "Duelist",
        match: "36",
        win: "52.8%",
        kd: "0.95",
        hs: "16.0%",
        img: "../img/raze.webp"
    },
    {
        name: "Gekko",
        role: "Initiator",
        match: "24",
        win: "62.5%",
        kd: "1.01",
        hs: "23.2%",
        img: "../img/gekko.webp"
    },
    {
        name: "Omen",
        role: "Controller",
        match: "25",
        win: "44.0%",
        kd: "1.08",
        hs: "28.7%",
        img: "../img/omen.webp"
    },
    {
        name: "Jett",
        role: "Duelist",
        match: "50",
        win: "45.0%",
        kd: "1.05",
        hs: "21.6%",
        img: "../img/jett.webp"
    },
    {
        name: "Breach",
        role: "Initiator",
        match: "21",
        win: "42.9%",
        kd: "0.91",
        hs: "24.3%",
        img: "../img/breach.webp"
    },
    {
        name: "Yoru",
        role: "Duelist",
        match: "19",
        win: "52.6%",
        kd: "1.11",
        hs: "22.8%",
        img: "../img/yoru.webp"
    },
    {
        name: "Fade",
        role: "Initiator",
        match: "17",
        win: "47.1%",
        kd: "0.87",
        hs: "21.8%",
        img: "../img/fade.webp"
    },
    {
        name: "Reyna",
        role: "Duelist",
        match: "14",
        win: "64.3%",
        kd: "0.96",
        hs: "22.7%",
        img: "../img/reyna.webp"
    },
    {
        name: "KAY/O",
        role: "Initiator",
        match: "14",
        win: "50.0%",
        kd: "1.02",
        hs: "19.9%",
        img: "../img/kayo.webp"
    },
    {
        name: "Neon",
        role: "Duelist",
        match: "14",
        win: "42.9%",
        kd: "1.03",
        hs: "21.0%",
        img: "../img/neon.webp"
    },
    {
        name: "Cypher",
        role: "Sentinel",
        match: "10",
        win: "50.0%",
        kd: "1.03",
        hs: "27.6%",
        img: "../img/cypher.webp"
    },
    {
        name: "Deadlock",
        role: "Sentinel",
        match: "9",
        win: "1.29%",
        kd: "1.05",
        hs: "24.9%",
        img: "../img/deadlock.webp"
    },
    {
        name: "Killjoy",
        role: "Sentinel",
        match: "9",
        win: "66.7%",
        kd: "1.14",
        hs: "21.6%",
        img: "../img/kj.webp"
    },
    {
        name: "Skye",
        role: "Initiator",
        match: "7",
        win: "57.1%",
        kd: "0.97",
        hs: "24.2%",
        img: "../img/skye.webp"
    },
    {
        name: "Clove",
        role: "Controller",
        match: "6",
        win: "66.7%",
        kd: "1.11",
        hs: "30.4%",
        img: "../img/clove.webp"
    },
    {
        name: "Pheonix",
        role: "Duelist",
        match: "5",
        win: "20.0%",
        kd: "0.90",
        hs: "25.9%",
        img: "../img/pheonix.webp"
    },
    {
        name: "Harbor",
        role: "Controller",
        match: "5",
        win: "60.0%",
        kd: "1.10",
        hs: "25.2%",
        img: "../img/harbor.webp"
    },
    {
        name: "Viper",
        role: "Controller",
        match: "4",
        win: "25.0%",
        kd: "1.00",
        hs: "22.2%",
        img: "../img/viper.webp"
    },
    {
        name: "Iso",
        role: "Duelist",
        match: "4",
        win: "25.0%",
        kd: "1.04",
        hs: "21.0%",
        img: "../img/iso.webp"
    },
    {
        name: "Sage",
        role: "Sentinel",
        match: "3",
        win: "33.3%",
        kd: "1.17",
        hs: "25.0%",
        img: "../img/sage.webp"
    },
    {
        name: "Astra",
        role: "Controller",
        match: "1",
        win: "0.0%",
        kd: "0.80",
        hs: "22.2%",
        img: "../img/astra.webp"
    },
    {
        name: "Brimstone",
        role: "Controller",
        match: "1",
        win: "100.0%",
        kd: "1.44",
        hs: "27.9%",
        img: "../img/brim.webp"
    },
    {
        name: "Chamber",
        role: "Sentinel",
        match: "0",
        win: "0.0%",
        kd: "0.00",
        hs: "0.0",
        img: "../img/chamber.webp"
    },
    {
        name: "Vyse",
        role: "Sentinel",
        match: "--",
        win: "--%",
        kd: "--",
        hs: "--%",
        img: "../img/vyse.webp"
    },



];

// เลือก element ที่เราต้องการจะเพิ่มรายการ
const agentContainer = document.getElementById('agent-container');

// ลูปผ่านรายการในเมนูและเพิ่มลงใน HTML
agentItems.forEach(item => {
    // สร้าง element div สำหรับแต่ละเมนู
    const agentDiv = document.createElement('div');
    agentDiv.classList.add('agent-container');

    // สร้าง element img สำหรับรูปภาพ agent
    const imgElement = document.createElement('img');
    imgElement.src = item.img;
    imgElement.alt = item.name;

    // สร้าง element div สำหรับข้อมูล agent
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('agent-info-container');

    // สร้าง element span สำหรับชื่อ agent
    const name = document.createElement('span');
    name.classList.add('agent-name');
    name.textContent = item.name;

    // สร้าง element span สำหรับชนิด agent
    const role = document.createElement('span');
    role.classList.add('agent-info');
    role.textContent = `Role: ${item.role}`;

    const match = document.createElement('span');
    match.classList.add('agent-info');
    match.textContent = `Match: ${item.match}`;

    const win = document.createElement('span');
    win.classList.add('agent-info');
    win.textContent = `Win: ${item.win}`;

    const kd = document.createElement('span');
    kd.classList.add('agent-info');
    kd.textContent = `K/D: ${item.kd}`;

    const hs = document.createElement('span');
    hs.classList.add('agent-info');
    hs.textContent = `HS: ${item.hs}`;

    // เพิ่ม name และ type เข้าไปใน infoDiv
    infoDiv.appendChild(name);
    infoDiv.appendChild(role);
    infoDiv.appendChild(match);
    infoDiv.appendChild(win);
    infoDiv.appendChild(kd);
    infoDiv.appendChild(hs);
    

    // เพิ่ม imgElement และ infoDiv เข้าไปใน agentDiv
    agentDiv.appendChild(imgElement);
    agentDiv.appendChild(infoDiv);

    // เพิ่ม menuItemDiv เข้าไปใน menuContainer
    agentContainer.appendChild(agentDiv);
});