<!DOCTYPE html><!-- UPDATE.PHP DATABASE UPDATING PROGRAM
               
--><html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
  <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="info/css/iRequest.css">
    <link rel="stylesheet" href="info/css/chat.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="icon" type="image/png" href="../img/krut.png">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
    <script src="https://code.jquery.com/jquery-1.10.1.min.js"></script>
    <script src="../js/main.js"></script>


<title>MNRE | e-Invoice</title>

</head>

<body>
    	<nav>
        <div class="navbar">
            <img class="dpimg" onclick="openFullScreenDP()" src="info/img/mnre.png" alt="">
            <div class="personalInfo">
                <label id="name">ศูนย์บริการร่วม ทส.</label>
                <label 
			id="lastseen">&copy; 2024 
			
			<font color='#94bab3'>MNRE-SLC
			</font>
			</a>
		</label>
		<br>
           </div>
    </div>
    </nav>
	<input 
		style='color:black;
			background-color:lightgrey;
			border-color:grey' 
		type="text" 
		id="Question" 
		value="ระบบออกใบแจ้งค่าธรรมเนียม e-Invoice" 
		title="ID">

 	<div 
		class="scrollable" 
		id="myScrollable">
      	<div 
		id="chatting" 
		class="chatting">

		<ul id="Answer">
   			<li><a href="#">

<form method="post" action="fee2.php">

			ชื่อ-นามสกุล ผู้ขอ: <div id="customer" style="color:red;size=-1"></div> 
			<input 
				inputmode="text" 
				id="customerName" 
				maxlength="100" 
				name="name"
				required 
				placeholder="นายมนตรี เกียรติเผ่าพันธ์" 
				size="50" 
				style="width:80%" 
				/>
   			
			<br>
			<br>
			จำนวนหน้าของเอกสาร: <div id="pageNumber" style="color:red;size=-1"></div> 
			<input 
				type="" 
				pattern="[0-9]*" 
				inputmode="numeric" 
				id="customerName" 
				maxlength="13" 
				name="page"
				required 
				placeholder="128" 
				size="13" 
				style="width:50%" 
				oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');" />
   			 
			<br>
			<br>
			จำนวนคำรับรอง : <div id="signNumber" style="color:red;size=-1"></div> 
			<input 
				type="" 
				pattern="[0-9]*" 
				inputmode="numeric" 
				id="customerName" 
				maxlength="13" 
				name="sign"
				required 
				placeholder="12" 
				size="13" 
				style="width:50%" 
				oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');" />
   	
			<br>
	        <br>	
				เจ้าหน้าที่: <div id="required" style="color:red;size=-1"></div> 
			<select id="required" name='officer' required>
				<option value=""></option> 
				<option value="นายมนตรี เกียรติเผ่าพันธ์">นายมนตรี เกียรติเผ่าพันธ์</option> 
				<option value="นายประจักษ์ชัย อาจคงหาญ">นายประจักษ์ชัย อาจคงหาญ</option> 
				<option value="นางสาวทัศนีย์ เดชปรารมย์">นางสาวทัศนีย์ เดชปรารมย์</option> 
				<option value="นายพิพัฒน์ พึ่งบุญ">นายพิพัฒน์ พึ่งบุญ</option> 
				<option value="นางจิราพร กาญจนาอร่ามวงศ์">นางจิราพร กาญจนาอร่ามวงศ์</option> 
				<option value="นางสาวจิราภา ฮะซุ่นเฮง">นางสาวจิราภา ฮะซุ่นเฮง</option> 
		</select>
		<br>
	        <br>	
				ตำแหน่ง: <div id="required" style="color:red;size=-1"></div> 
			<select id="required" name='position' required>
				<option value=""></option> 
				<option value="นักวิเคราะห์นโยบายและแผนชำนาญการพิเศษ">นักวิเคราะห์นโยบายและแผนชำนาญการพิเศษ</option> 
				<option value="นักวิเคราะห์นโยบายและแผนชำนาญการ">นักวิเคราะห์นโยบายและแผนชำนาญการ</option> 
				<option value="นักวิชาการสิ่งแวดล้อม">นักวิชาการสิ่งแวดล้อม</option> 
				<option value="นักวิชาการเผยแพร่">นักวิชาการเผยแพร่</option> 
				<option value=">เจ้าหน้าที่ธุรการ">เจ้าหน้าที่ธุรการ</option> 
			
		</select>
			<br>
	        <br>	
				PIN Code: <div id="required" style="color:red;size=-1"></div> 
			<input 
				type="password" 
				pattern="[0-9]*" 
				inputmode="numeric" 
				id="input" 
				maxlength="13" 
				name="pin"
				required 
				placeholder="********" 
				size="13" 
				style="width:50%" 
				oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');" />
   			 <i 
				class="bi bi-eye-slash" 
				id="togglePassword">
			</i>
			<br>

		
			<br>

	<input type="submit" name="update" value="OK" 
		style="width:100px;
			background-color:DodgerBlue;	
			cursor: pointer;
			border:none;
 			color: white;
			padding: 12px 16px;
			font-size: 16px;"
	>

</form>


</div><br>

<br>


</div>
       	</a>
	</li>
        <li><center><div id="copyRight"></div></center></li>
</div>
</div>

<br>
<!HIDE PIN CODE>
	<script type='text/javascript'>
        	const togglePassword = document.querySelector("#togglePassword");
	        const password = document.querySelector("#input");
        	togglePassword.addEventListener("click", function () {
	            const type = password.getAttribute("type") === "password" ? "text" : "password";
        	    password.setAttribute("type", type);
                    this.classList.toggle("bi-eye");
	        });
    	
    	</script>


</body>
</html>
