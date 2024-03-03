<!DOCTYPE html><!-- UPDATE.PHP DATABASE UPDATING PROGRAM

                                @                                
   ::                          =%.                          ::   
 :::::                        *@@@=                        ::::: 
  :::::                       *##*#                       :::::. 
::.::.::.    :             .@%%##%%*@              :.   .::.::.::
 ::::::.::. .:::::%-       *@::::::-@+       +#:::::. .::.:::::: 
 .:::::::::::::             @*:+@@++*             ::.:::::.::::. 
 .:::.:::.:::*:-+           @:#= :+::          .#--+:::.:::.:::. 
   .::::::::.:::::::. :. :  ..:=%-:-   . .: .:::::::.::::::::.   
   .:::::::::::.:.:::::+#:::-#::-::+-:::#=:::::.:::::::::::::.   
     ::::::::::::::::::*+::::#-#++-*::::++::.:::::::::::::::     
      .:.:::::.:::::::::::::::::@-::::::::::::::::.:::::...      
           .:::::::.:.:::::::::::::::::::::.:.:::::::.           
             :::.:::::::::.%+#*%@#**#@::::::::::.:::             
              .:::::::::::::#%#%@%#@%::::::::::.:::              
                .:::::.:::::::::::::::::::::::::.                
                   ...::::: ::::::::: ::.::...                   
                      =  ..+-::...::#*.. .=                      
                   ::::%+...*#==%++##...*#::::.                  
                 .:::::::@%:....#..+.:%%:::::::.                 
                 :::::::.:.:#%+.@.+%*:::.:::::::.                
                 .:::::.:::*::-...=::*::.::::::.                 
                          #@@=..@-.=@@@.                         
                  +-*%   +%@....:....@@*   +%**                  
                 :-.*@@@@% %-...*...=# %@@@@%==#                 
                   %=+@@@@ :@%..:..#@: @@@@%+*                   
                   .     ::::::@.@:::::-.    .                   
                         ::::::.%.::::::                         
                           ..:::::::::                           
                                :                                

 ____________________________________________________
|\\\1\\\\\\2\\\\\\3\\\\\\||//////5///////6///////7///|
|\\\\\\: : : :: :DEVELOPER INFORMATION : : :::://////|
| Copyright © 2023 MNRE-SLC  All rights reserved.    |
| Contact: servicelinkcenter@mnre.go.th              |
| Author: Montri Kiatphaophan (monte.k@gmnre.go.th)  |
| version 1.0.1 | Sep. 22, 2023 .     .     .     ...|
|////////||\\\\\\\\\/////////||\\\\\\\///////||\\\\\\|
TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
                                                                                                        
               
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
    <script src="info/js/main.js"></script>


<title>MNRE | Hash</title>

</head>

<body>
    	<nav>
        <div class="navbar">
            <img class="dpimg" onclick="openFullScreenDP()" src="info/img/mnre.png" alt="">
            <div class="personalInfo">
                <label id="name">ศูนย์บริการร่วม ทส.</label>
                <label 
			id="lastseen">&copy; 2024 MNRE-SLC
		
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
		value="Hashing Machine" 
		title="ID">

 	<div 
		class="scrollable" 
		id="myScrollable">
      	<div 
		id="chatting" 
		class="chatting">

		<ul id="Answer">
   			<li><a href="#">
<?php
$pin = '1310';
?>
			เลขประจำตัวประชาชน (13 หลัก) : <div id="required" style="color:red;size=-1"></div> 
			<input 
				type="password" 
				pattern="[0-9]*" 
				inputmode="numeric" 
				id="input" 
				maxlength="13" 
				name="userID"
				required 
				placeholder="1234567890123" 
				size="13" 
				style="width:50%" 
				value=<?php echo hash('sha256', $pin)?> />
   			 <i 
				class="bi bi-eye-slash" 
				id="togglePassword">
			</i>
			<br>
	
		


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

<!HASH THE ID NUMBER WITH SHA3 512>	
    <script src="info/js/sha3.min.js"></script>
    <script>method = sha3_512;</script>

<!REPORT THE PROGRESS>
    	<script type='text/javascript' src="info/js/progress.js"></script>
    	<script type='text/javascript'>
		function progress(){
			let nid = document.getElementById('input').value;
			let nidh = document.getElementById('output').value;
			let progress = document.getElementById('progress').value;
			let dataCode = "'"+progress+"'=>" + "'"+nidh+"',\n);?>"
			if(nid=='' || nidh==''){
				document.getElementById("required").innerHTML = "* ข้อมูลจำเป็น กรอกแล้วกด ยืนยัน อีกครั้ง";
				alert('โปรดกรอกหมายเลขประจำตัวประชาชน');
			}
			else if(progress==''){alert('โปรดกรอกข้อมูลความคืบหน้า');}
			else {document.getElementById('outputCode').value = dataCode;}
			}
	</script>

<!HIDE NATIONAL ID NUMBER>
	<script type='text/javascript'>
        	const togglePassword = document.querySelector("#togglePassword");
	        const password = document.querySelector("#input");
        	togglePassword.addEventListener("click", function () {
	            const type = password.getAttribute("type") === "password" ? "text" : "password";
        	    password.setAttribute("type", type);
                    this.classList.toggle("bi-eye");
	        });
    		const form = document.querySelector("form");
        	form.addEventListener('submit', function (e) {
	        e.preventDefault();
	        });
    	</script>
		
</body>
</html>
