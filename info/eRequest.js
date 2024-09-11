/* (c) 2023 MNRE-SLC | MIT License
 * iRequest.js | v2.0 | May 17, 2024
 * servicelinkcenter@mnre.go.th
 */


// Get data from Form 1
function myFunction() {
  var x = document.getElementById("frm1");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value;
  }
 
// Get data from Form 2
  var y = document.getElementById("frm2");
  var text2 = "";
  var j;
  for (j = 0; j < y.length ;j++) {
    text2 += y.elements[j].value;
  }
 

// Get data from Form 3
  var z = document.getElementById("frm3");
  var text3 = "";
  var j1;
  for (j1 = 0; j1 < z.length ;j1++) {
    text3 += z.elements[j1].value;
  }


var d = document.getElementById("frm4");
  var obj = "";
  var k;
  for (k = 0; k < d.length ;k++) {
    obj += d.elements[k].value;
  }
 
var e = document.getElementById("frm5");
  var info1 = "";
  var l;
  for (l = 0; l < e.length ;l++) {
    info1 += e.elements[l].value;
  }

var e2 = document.getElementById("frm52");
  var info2 = "";
  var l2;
  for (l2 = 0; l2 < e2.length ;l2++) {
    info2 += e2.elements[l2].value;
  }

var e3 = document.getElementById("frm53");
  var info3 = "";
  var l3;
  for (l3 = 0; l3 < e3.length ;l3++) {
    info3 += e3.elements[l3].value;
  }

var e4 = document.getElementById("frm54");
  var tel = "";
  var l4;
  for (l4 = 0; l4 < e4.length ;l4++) {
    tel += e4.elements[l4].value;
  }

var a1 = document.getElementById("frm7");
  var house = "";
  var h1;
  for (h1 = 0; h1 < a1.length ;h1++) {
    house += a1.elements[h1].value;
  }

var a2 = document.getElementById("frm6");
  var checkType = "";
  var h2;
  for (h2 = 0; h2 < a2.length ;h2++) {
    checkType += a2.elements[h2].value;
  }

var opener = "โปรดระบุชื่อผู้รับ";
if(text3=="สำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม"){opener = "ปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม";}
else if(text3=="องค์การสวนสัตว์แห่งประเทศไทย"){opener = "ผู้อำนวยการองค์การสวนสัตว์";}
else if(text3=="กรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช"){opener = "อธิบดีกรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช";}
else if(text3=="กรมควบคุมมลพิษ"){opener = "อธิบดีกรมควบคุมมลพิษ";}
else if(text3=="กรมการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม"){opener = "อธิบดีกรมการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม";}
else if(text3=="สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม"){opener = "เลขาธิการสำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม";}
else if(text3=="กรมป่าไม้"){opener = "อธิบดีกรมป่าไม้";}
else if(text3=="กรมทรัพยากรทางทะเลและชายฝั่ง"){opener = "อธิบดีกรมทรัพยากรทางทะเลและชายฝั่ง";}
else if(text3=="กรมทรัพยากรธรณี"){opener = "อธิบดีกรมทรัพยากรธรณี";}
else if(text3=="กรมทรัพยากรน้ำ"){opener = "อธิบดีกรมทรัพยากรน้ำ";}
else if(text3=="กรมทรัพยากรน้ำบาดาล"){opener = "อธิบดีกรมทรัพยากรน้ำบาดาล";}
else if(text3=="องค์การอุตสาหกรรมป่าไม้"){opener = "ผู้อำนวยการองค์การอุตสาหกรรมป่าไม้";}
else if(text3=="องค์การสวนพฤกษศาสตร์"){opener = "ผู้อำนวยการองค์การสวนพฤกษศาสตร์";}
else if(text3=="องค์การบริหารจัดการก๊าซเรือนกระจก"){opener = "ผู้อำนวยการองค์การบริหารจัดการก๊าซเรือนกระจก";}
else if(text3=="สำนักงานพัฒนาเศรษฐกิจจากฐานชีวภาพ"){opener = "ผู้อำนวยการสำนักงานพัฒนาเศรษฐกิจจากฐานชีวภาพ";}
else{opener = "มนตรี";}

var eMail ="โปรดระบุอีเมล";
if(text3=="สำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม"){eMail = "servicelinkcenter@mnre.go.th";}
else if(text3=="องค์การสวนสัตว์แห่งประเทศไทย"){eMail = "saraban@zoothailand.org";}
else if(text3=="กรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช"){eMail = "saraban@dnp.mail.go.th";}
else if(text3=="กรมควบคุมมลพิษ"){eMail = "saraban@pcd.go.th";}
else if(text3=="กรมการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม"){eMail = "saraban@dcce.mail.go.th";}
else if(text3=="สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม"){eMail = "saraban@onep.go.th";}
else if(text3=="กรมป่าไม้"){eMail = "sarabun@forest.go.th";}
else if(text3=="กรมทรัพยากรทางทะเลและชายฝั่ง"){eMail = "saraban@dmcr.mail.go.th";}
else if(text3=="กรมทรัพยากรธรณี"){eMail = "saraban@dmr.mail.go.th";}
else if(text3=="กรมทรัพยากรน้ำ"){eMail = "saraban@dwr.mail.go.th";}
else if(text3=="กรมทรัพยากรน้ำบาดาล"){eMail = "saraban@dgr.mail.go.th";}
else if(text3=="องค์การอุตสาหกรรมป่าไม้"){eMail = "saraban@fio.co.th";}
else if(text3=="องค์การสวนพฤกษศาสตร์"){eMail = "document@qsbg.mail.go.th";}
else if(text3=="องค์การบริหารจัดการก๊าซเรือนกระจก"){eMail = "saraban_tgo@tgo.or.th";}
else if(text3=="สำนักงานพัฒนาเศรษฐกิจจากฐานชีวภาพ"){eMail = "saraban@bedo.or.th";}
else{eMail = "";}

var oTel ="โปรดระบุอีเมล";
if(text3=="สำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม"){oTel = "0 2265 6223-5 และ สายด่วน 1310";}
else if(text3=="องค์การสวนสัตว์แห่งประเทศไทย"){oTel = "0 2163 4955";}
else if(text3=="กรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช"){oTel = "0 2579 6666 ต่อ 1123 และ 1124";}
else if(text3=="กรมควบคุมมลพิษ"){oTel = "0 2298 2000";}
else if(text3=="กรมการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม"){oTel = "0 2298 5607";}
else if(text3=="สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม"){oTel = "0 2265 6515 และ 0 2265 6653";}
else if(text3=="กรมป่าไม้"){oTel = "0 2561 4292 ต่อ 5185";}
else if(text3=="กรมทรัพยากรทางทะเลและชายฝั่ง"){oTel = "0 2141 1246-7";}
else if(text3=="กรมทรัพยากรธรณี"){oTel = "0 2621 9500";}
else if(text3=="กรมทรัพยากรน้ำ"){oTel = "0 2271 6000, 0 2271 6003";}
else if(text3=="กรมทรัพยากรน้ำบาดาล"){oTel = "0 2666 7056-8";}
else if(text3=="องค์การอุตสาหกรรมป่าไม้"){oTel = "0 2282 3243-7";}
else if(text3=="องค์การสวนพฤกษศาสตร์"){oTel = "0 5311 4630";}
else if(text3=="องค์การบริหารจัดการก๊าซเรือนกระจก"){oTel = "0 2142 7466";}
else if(text3=="สำนักงานพัฒนาเศรษฐกิจจากฐานชีวภาพ"){oTel = "0 2141 7800";}
else{oTel = "";}

var idNo = Array.from(text2);
if(text=="" || text2=="" || house=="" || text3=="" || info1=="" || checkType=="" || obj=="" || tel==""){alert("โปรดกรอกข้อมูลให้ครบถ้วน");}
else if(text2.length!==13){alert("หมายเลขประจำตัวประชาชนไม่ถูกต้อง");}
else{document.getElementById("iRequest").value =
            "เรียน " + opener + "\n\nข้าพเจ้า " + text + " หมายเลขประจำตัวประชาชน " + text2 + " ที่อยู่ " + house + " มีความประสงค์ขอข้อมูลข่าวสารของ" + text3 +
                        " ดังต่อไปนี้\n" +
            "1. " + info1 +
            "\n2. " + info2 +
            "\n3. " + info3 +
                        "\nโดย" + checkType + " เพื่อนำไปใช้ในการ" + obj +
            "\n\nจึงเรียนมาเพื่อดำเนินการให้ตามความประสงค์ของข้าพเจ้าต่อไปด้วย จักขอบคุณมาก" +
            "\n\nขอแสดงความนับถือ" + "\n" + text + " ผู้ขอ\nโทร. " + tel;

       document.getElementById("orgEmail").innerHTML =
            "โปรดกดปุ่มคัดลอก ส่งอีเมลไปยัง" + text3 + " ที่ "+ eMail + " และสามารถตรวจสอบการได้รับคำขอที่ โทร. " + oTel;

       document.getElementById("emailForCopy").innerHTML = eMail;

document.getElementById("copySLC").innerHTML =
            "เรียน " + opener + "\n\nข้าพเจ้า " + text + " หมายเลขประจำตัวประชาชน " + text2 + " ที่อยู่ " + house + " มีความประสงค์ขอข้อมูลข่าวสารของ" + text3 +
                        " ดังต่อไปนี้\n" +
            "1. " + info1 +
            "\n2. " + info2 +
            "\n3. " + info3 +
                        "\nโดย" + checkType + " เพื่อนำไปใช้ในการ" + obj +
            "\n\nจึงเรียนมาเพื่อดำเนินการให้ตามความประสงค์ของข้าพเจ้าต่อไปด้วย จักขอบคุณมาก" +
            "\n\nขอแสดงความนับถือ" + "\n" + text + " ผู้ขอ\nโทร. " + tel;

}
}

function copyForm() {
  const element = document.querySelector('#iRequest');
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  window.alert("คุณได้คัดลอกร่างคำขอไว้บน clipboard แล้ว สามารถวางในอีเมล เพื่อส่งต่อไปได้เลยค่ะ");
}

function copyEmail() {
  const element = document.querySelector('#emailForCopy');
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  window.alert("คุณได้คัดลอก Email Address ไว้บน clipboard แล้ว สามารถวางในอีเมล เพื่อส่งต่อไปได้เลยค่ะ");
}

function sendGmail() {
// Get data from Form 3
  var z = document.getElementById("frm3");
  var text3 = "";
  var j1;
  for (j1 = 0; j1 < z.length ;j1++) {
    text3 += z.elements[j1].value;
  }
// Send by Gmail
   if(text3=="สำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม"){
   window.open("https://mail.google.com/mail/?view=cm&fs=1&to=servicelinkcenter@mnre.go.th&cc=&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

   if(text3=="กรมควบคุมมลพิษ"){
   window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@pcd.go.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

  if(text3=="กรมการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม"){
   window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@dcce.mail.go.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

if(text3=="สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม"){
   window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@onep.go.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}


  else if(text3=="องค์การสวนสัตว์แห่งประเทศไทย"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@zoothailand.org&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

  else if(text3=="กรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@dnp.mail.go.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

 else if(text3=="กรมป่าไม้"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=sarabun@forest.go.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

else if(text3=="กรมทรัพยากรทางทะเลและชายฝั่ง"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@dmcr.mail.go.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

else if(text3=="กรมทรัพยากรธรณี"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@dmr.mail.go.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

else if(text3=="กรมทรัพยากรน้ำ"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@dwr.mail.go.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

else if(text3=="กรมทรัพยากรน้ำบาดาล"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@dgr.mail.go.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

else if(text3=="องค์การอุตสาหกรรมป่าไม้"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@fio.co.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

else if(text3=="องค์การสวนพฤกษศาสตร์"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=document@qsbg.mail.go.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

else if(text3=="องค์การบริหารจัดการก๊าซเรือนกระจก"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban_tgo@tgo.or.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

else if(text3=="สำนักงานพัฒนาเศรษฐกิจจากฐานชีวภาพ"){
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=saraban@bedo.or.th&cc=servicelinkcenter@mnre.go.th&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

else{
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=&cc=&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}
}


function sendiMail() {
// Get data from Form 3
  var z = document.getElementById("frm3");
  var text3 = "";
  var j1;
  for (j1 = 0; j1 < z.length ;j1++) {
    text3 += z.elements[j1].value;
  }
// Send by iPhone
   if(text3=="สำนักงานปลัดกระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม"){
   window.open("mailto:servicelinkcenter@mnre.go.th?subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

 else if(text3=="สำนักงานนโยบายและแผนทรัพยากรธรรมชาติและสิ่งแวดล้อม"){
   window.open("mailto:saraban@onep.go.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

  else if(text3=="กรมควบคุมมลพิษ"){
   window.open("mailto:saraban@pcd.go.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

  else if(text3=="กรมการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม"){
   window.open("mailto:saraban@dcce.mail.go.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

else if(text3=="องค์การสวนสัตว์แห่งประเทศไทย"){
   window.open("mailto:saraban@zoothailand.org?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

  else if(text3=="กรมอุทยานแห่งชาติ สัตว์ป่า และพันธุ์พืช"){
   window.open("mailto:saraban@dnp.mail.go.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

  else if(text3=="กรมป่าไม้"){
   window.open("mailto:sarabun@forest.go.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

  else if(text3=="กรมทรัพยากรทางทะเลและชายฝั่ง"){
   window.open("mailto:saraban@dmcr.mail.go.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}


  else if(text3=="กรมทรัพยากรธรณี"){
   window.open("mailto:saraban@dmr.mail.go.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

  else if(text3=="กรมทรัพยากรน้ำ"){
   window.open("mailto:saraban@dwr.mail.go.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

 else if(text3=="กรมทรัพยากรน้ำบาดาล"){
   window.open("mailto:saraban@dgr.mail.go.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

 else if(text3=="องค์การอุตสาหกรรมป่าไม้"){
   window.open("mailto:saraban@fio.co.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

 else if(text3=="องค์การสวนพฤกษศาสตร์"){
   window.open("mailto:document@qsbg.mail.go.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

 else if(text3=="องค์การบริหารจัดการก๊าซเรือนกระจก"){
   window.open("mailto:saraban_tgo@tgo.or.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

 else if(text3=="สำนักงานพัฒนาเศรษฐกิจจากฐานชีวภาพ"){
   window.open("mailto:saraban@bedo.or.th?cc=servicelinkcenter@mnre.go.th&subject=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}

  else{
 window.open("https://mail.google.com/mail/?view=cm&fs=1&to=&cc=&su=ขอข้อมูลข่าวสารของราชการ&body=[วางข้อความตรงนี้ค่ะ]");}
}

function tracking() {
window.open("https://esc.mnre.go.th/app/e-tracking.php");
}
