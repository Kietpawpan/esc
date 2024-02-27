// This code was modified from https://github.com/Varshithvhegde/chatbot

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "MNRE e-Service Center at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "Loading...";
    var name="";
    if(inputText.toLowerCase().includes("my name is")){
        name=inputText.substring(inputText.indexOf("is")+2);
        if(name.toLowerCase().includes("varshith")){
            sendTextMessage("Ohh! That's my name too");
            
        }
        inputText="input";
    }
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("สวัสดีค่ะ<br><br><span class='bold'><a class='alink'>ศูนย์บริการร่วม กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม</a></span> ยินดีให้บริการค่ะ<span class='bold'><br>โปรดกด</span><span class='bold'><a class='alink'> เมนู</a></span> ด้านล่าง หรือพิมพ์ว่า <span class='bold'><a class='alink'> help</a></span> เพื่อเลือกบริการค่ะ<br>");
            }, 2000);
            break;

        case "help":
            sendTextMessage("<span class='sk'>วิธีใช้บริการ<br> พิมพ์ว่า<br><span class='bold'>'info'</span> - ขอข้อมูล <br><span class='bold'>'see'</span> - ติดตามความคืบหน้า<br><span class='bold'>'go'</span> - นัดวันรับข้อมูล<br><span class='bold'>'fee'</span> - ชำระค่าสำเนาข้อมูล<br><span class='bold'>'fix'</span> - แจ้งปัญหาการใช้งาน<br><span class='bold'>'faq'</span> - ขอคำปรึกษา<br><span class='bold'>'call'</span> - ติดต่อเจ้าหน้าที่<br><span class='bold'>'clear'</span> - ลบข้อความสนทนา<br>");
            break;

        case "resume":
            sendTextMessage(resumeString);
            break;

        case "info":
            sendTextMessage("ยื่นคำขอออนไลน์ได้เลยค่ะ<div class='social'><a target='_blank' href='https://kietpawpan.github.io/iRequest/index.html'> <div class='socialItem'><img class='socialItemI' src='images/info.svg' alt=''></div> </a></div>");
            break;

        case "see":
            sendTextMessage("ขอทราบรหัสคำขอที่ สป.ทส. ได้แจ้งท่านค่ะ เช่น nn650412356");
            break;
   
        case "ควาย":
            sendTextMessage("ขอบคุณสำหรับคำติชม ดิฉันจะปรับปรุงบริการให้ดีขึ้นค่ะ");
            break;

        case "ขอบคุณ":
            sendTextMessage("ยินดีค่ะ หวังว่าจะได้บริการท่านอีกนะคะ");
            break;

        case "ขอบคุณค่ะ":
            sendTextMessage("ยินดีค่ะ หวังว่าจะได้บริการท่านอีกนะคะ");
            break;
	case "ขอบคุณครับ":
            sendTextMessage("ยินดีค่ะ หวังว่าจะได้บริการท่านอีกนะคะ");
            break;
        case "nn650412356":
            sendTextMessage("รหัสคำขอนี้เป็นเพียงตัวอย่าง ไม่มีข้อมูลความคืบหน้าค่ะ");
            break;

        case "fee":
           sendTextMessage("โอนผ่านธนาคารได้ค่ะ<div class='social'><a target='_blank' href='https://kietpawpan.github.io/iRequest/CopyFee.html'> <div class='socialItem'><img class='socialItemI' src='images/pay.svg' alt=''></div> </a></div>");
            break;

	 case "call":
            sendTextMessage("โทร. 1310 (ไม่พักกลางวัน) หรือ <br>สนทนากับเจ้าหน้าที่ทางไลน์นี้ค่ะ <div class='social'><a target='_blank' href='https://lin.ee/O9TyPRw'><div class='socialItem'><img class='socialItemI' src='images/officer.svg' alt=''></div></a></div>");
            break;
        case "clear":
            clearChat();
            break;
        // case "about":

        //     break;

        case "contact":
            sendTextMessage(contactString);
            break;

        case "go":
            sendTextMessage("นัดหมายได้เลยค่ะ<div class='social'><a target='_blank' href='https://kietpawpan.github.io/iRequest/SeeMe.html'> <div class='socialItem'><img class='socialItemI' src='images/go.svg' alt=''></div> </a></div>");
            break;

        case "fix":
            sendTextMessage("เชิญแจ้งปัญหาที่นี่ค่ะ | กดปุ่ม New Issue<div class='social'><a target='_blank' href='https://github.com/Kietpawpan/chatBot/issues'> <div class='socialItem'><img class='socialItemI' src='images/comment.svg' alt=''></div> </a></div>");
            break;
 
        case "faq":
            sendTextMessage("เชิญปรึกษาที่นี่ค่ะ<div class='social'><a target='_blank' href='FAQ.html'> <div class='socialItem'><img class='socialItemI' src='images/faq.svg' alt=''></div> </a></div>");
            break;

        case "time":
            var date = new Date();
            sendTextMessage("Current time is " + date.getHours() + ":" + date.getMinutes());
            break;

        case "date":
            var date = new Date();
            sendTextMessage("Current date is " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
            break;

        case "hai":
            sendTextMessage("สวัสดีค่ะ ต้องการติดต่อเรื่องใดค่ะ?");
            break;

        case "hello":
            sendTextMessage("สวัสดีค่ะ ต้องการติดต่อเรื่องใดค่ะ?");
            break;
        
        case "hi":
            sendTextMessage("สวัสดีค่ะ ต้องการติดต่อเรื่องใดค่ะ?");
            break;
        
        case "hey":
            sendTextMessage("สวัสดีค่ะ ต้องการติดต่อเรื่องใดค่ะ?");
            break;
       
        case "website":
            sendTextMessage("<a target='_blank' href='http://slc.mnre.go.th/'>เว็บไซต์ศูนย์บริการร่วม ทส.</a>");
            break;

        default:
            setTimeout(() => {
                sendTextMessage("โปรดตรวจสอบข้อความอีกครั้ง หรือพิมพ์ว่า <a class='alink'> 'help'</a></span> ค่ะ");
            }, 2000);
            break;
    }


}


function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
