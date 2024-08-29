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
        role: "Sentinel",
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
    }




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
    match.textContent = `Matches: ${item.match}`;

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