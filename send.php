<?php
$name = $_POST["fullname"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$mobilenumber = $_POST["mobilenumber"];
$interestedin = $_POST["interestedin"];
$description = $_POST["description"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp-relay.sendinblue.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "samuelmayowa33@gmail.com";
$mail->Password = "MVxyGW3smqtawTEQ";

$mail->setFrom($email, $name);
$mail->addAddress("samuelmayowa33@gmail.com", "Samuel");

$mail->Subject = $subject;
$mail->Body = $message;

$mail->send();
echo "email sent"

//header("Location: sent.html");