
<?php
/*http://habrahabr.ru/post/60420/ отправка html писем http://old.webasyst.ru/support/help/html-in-email.html*/
/* http://www.beluys.com/mail_2.html */
$mydata = $_POST;

if ($_POST['name']) { $name = $_POST['name'];} 

if ($_POST['phone']) {$phone = $_POST['phone'];}

if ($_POST['street']) {$street = $_POST['street'];}

if ($_POST['appt']) {$appt = $_POST['appt'];}

if ($_POST['floor']) {$floor = $_POST['floor'];}

if ($_POST['email']) {$email = $_POST['email'];}

if ($_POST['comment']) {$comment = $_POST['comment'];}

if ($_POST['payment']) {$payment = $_POST['payment'];}

if ($_POST['callback']) {$callback = $_POST['callback'];}


/*$name = '=?UTF-8?B?'.base64_encode($contact->name).'?='; */
$sub = '=?UTF-8?B?'.base64_encode($contact->sub).'?=';
$headers = "From: $name <{$contact->email}>\r\n".
"Reply-To: {$contact->email}\r\n".
"MIME-Version: 1.0\r\n".
"Content-Type: text/html; charset=UTF-8";


$address = $email . ", ";
$address .= "vsenetak88@mail.ru";
 /* отправка на два адреса http://phpclub.ru/detail/article/mail */

$sub = "Запрос"; /*тема письма*/

$mes = '
	<div style="width: 800px; margin: 0 auto;">
		<table class="mimi" style="border: 1px solid; border-collapse: collapse;">
		<tr style="border: 1px solid;">
			<td style="border: 1px solid;" >
			Name:
			</td>
			<td>
			'.$name.'
			</td>
		</tr>
		<tr style="border: 1px solid;">
			<td style="border: 1px solid;" >
			Phone:
			</td>
			<td>
			'.$phone.'
			</td>
		</tr>
		
		<tr  style="border: 1px solid;">
			<td style="border: 1px solid;" >
			Street:
			</td>
			<td>
			'.$street.'
			</td>
		</tr>
		<tr style="border: 1px solid;">
			<td style="border: 1px solid;" >
			Apt:
			</td>
			<td>
			'.$appt.'
			</td>
		</tr>
		<tr style="border: 1px solid;" >
			<td style="border: 1px solid;" >
			Floor:
			</td>
			<td>
			'.$floor.'
			</td>
		</tr>
		<tr style="border: 1px solid;" >
			<td style="border: 1px solid;" >
			Email:
			</td>
			<td>
			'.$email.'
			</td>
		</tr>
		
		</tr>
		<tr style="border: 1px solid;" >
			<td style="border: 1px solid;" >
			Comment:
			</td>
			<td>
			'.$comment.'
			</td>
		</tr>
		<tr style="border: 1px solid;" >
			<td style="border: 1px solid;" >
			Payment:
			</td>
			<td>
			'.$payment.'
			</td>
		</tr>
		
		<tr style="border: 1px solid;" >
			<td style="border: 1px solid;" >
			Callback:
			</td>
			<td>
			'.$callback.'
			</td>
		</tr>
			
		
		</table>
	
	</div>
	';

?>



<?php
	
$mes = wordwrap($mes, 70, "\r\n");	
	
$headers = "From: <".$address.">\r\n";
$headers = $headers."Return-path: <".$address.">\r\n";
$headers = $headers."Reply-To: $email"."\r\n".
							"MIME-Version: 1.0\r\n";    
$headers = $headers."Content-type: text/html; charset=\"utf-8\"\r";




$verify = mail ($address,$sub,$mes, $headers);

if($verify){  
	
		$mydata['status'] = true;
	
	}
	
	else { 

		$mydata['status'] = false;
	}



// if(!$verify->send()) {
//     $mydata['status'] = 'Message could not be sent.';
//     $mydata['status'] .= 'Mailer Error: ' . $mail->ErrorInfo;
// } else {
//     $mydata['status'] = 'Message has been sent';
// }

echo json_encode($mydata);
	

	/* обращение к БД начало */
	

	/*mysql_connect("topdetal.mysql.ukraine.com.ua", "topdetal_db","n8VYRzs6") or die(mysql_error());
	mysql_select_db("topdetal_db") or die(mysql_error());*/
	
	if (!mysql_connect("topdetal.mysql.ukraine.com.ua", "topdetal_db","n8VYRzs6")) die('соединение не установлено');
	/*echo "соединение установлено успешно<br>";*/
	 //mysql_query ('SET NAMES cp1251');
     //mysql_query ('SET CHARACTER SET cp1251');
	 
	 mysql_query("SET NAMES 'utf8' COLLATE 'utf8_general_ci'"); 
	 mysql_query("SET CHARACTER SET 'utf8'");

     $date = date("d.m.Y ");
	
	if (!mysql_select_db("topdetal_db")){
	die(mysql_error());}
		/*die("Таблица не выбрана" . mysql_error());}
		echo "таблица выбрана<br>";*/
	
	//$sql = "INSERT INTO userQuery (id, text, Name, Brand, Part, City, Date) VALUES ('', 'Ололо', 'Имя', 'Хонда', 'кардан', 'Харьков', ".date("d.m.y").")";
	$sql = "INSERT userQuery SET text = 'Оппа', Name = 'имя', Date = ".$date."";
	
	$p = mysql_query($sql);
	
	if (!$p) {
		mysql_error();
	}
	
	if (!$sql){
	die(mysql_error());}
		/*die('не создалась' . mysql_error());}
		echo "сотрока должна была создаться";*/
	
	$res = "SELECT * FROM people";
	
	$rs = mysql_query($res);
	
	// while($row = mysql_fetch_array(rs)){
	// 	echo $row['id'] . "<br>";}
	
	
	/*$sql = "INSERT INTO userQuery (id, Name, Brand, Part, City, Date, Numb) VALUES('', 'Имя', 'Хонда', 'кардан', 'Харьков', '', '++$Numb')";
	if(!mysql_query($srtsql)){
	echo "ошибка при добавлении данных";}
	else {
	echo 'нормально';}  отвечал*/
	
	/*$mycon = new mysqli("topdetal.mysql.ukraine.com.ua", "topdetal_db","n8VYRzs6");
		if (mysqli_connect_error()){
			echo "Подключение невозможно " . mysqli_connect_error();}
		else {echo "Access successful:)<br>";}
	
	$table = mysql_select_db('topdetal_db', $mycon);	
		if (!$table){
			echo "База не выбрана";}
	
	
	$Numb = 1;
	$request = "Запрос № " . ++$Numb;
	
	$strsql = "INSERT INTO userQuery(id, Name, Brand, Part, City, Date, Numb) VALUES('', 'Имя', 'Хонда', 'кардан', 'Харьков', '', '++$Numb')";
	if(!mysql_query($srtsql)){
	echo "ошибка при добавлении данных" . strsql_error();}
	else {
	echo 'нормально';}*/ /*or die(mysql_error());*/

		/* обращение к БД конец */

	/*$mycon->close();*/

	
/*header( 'Refresh: 15; url= index.html' );

}
else

{
echo "<p>Сообщение не отправлено";

}*/
?>




