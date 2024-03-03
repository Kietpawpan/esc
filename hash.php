<!DOCTYPE html>
<html>
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
		value="ระบบเข้ารหัส PIN Code" 
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
$pin = $_POST['pin'];
?>
			Hashed PIN (SHA3-512): <div id="required" style="color:red;size=-1"></div> 
			<input 
				pattern="[0-9]*" 
				inputmode="numeric" 
				id="input" 
				maxlength="1000" 
				name="userID"
				required 
				placeholder="1234567890123" 
				size="13" 
				style="width:100%" 
				value=<?php echo hash('sha3-512', $pin)?> />
   			 
			<br>
			<br>
				<input class='btn' type='button' value='Copy' style='width:100px' onclick="copyForm()">
	
		


</form>



</div><br>


<br>


</div>
       	</a>
	</li>
      
</div>
</div>

<br>


		
<!COPY TEXT>
	<script type='text/javascript'>
function copyForm() {
  const element = document.querySelector('#input');
  element.select();
  element.setSelectionRange(0, 99999);
  document.execCommand('copy');
  window.alert("Copied!");
}		
</script>
		
</body>
</html>
