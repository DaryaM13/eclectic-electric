<?php
    
    $name =  $_POST['user_name'];
    $contact =  $_POST['contact'];
    $tel =  $_POST['mail_phone'];
    $text =  $_POST['message'];
    
    

    $to = "stevevayner@gmail.com";
    
    $subject = "Electric Submit Form";

    $title = "Name: " . $name . "\n\nContact: " . $contact . "\n\nEmail/Phone number: " .  $tel . "\n\nMessage:"  . $text . "" ;
    $title = iconv("utf-8", "windows-1251", $title);
    $headers = 'From: aaa@yandex.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    mail($to, $subject, $title, $headers);
    header("Location: ./");
    

