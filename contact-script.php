<?php

    if (isset($_POST['submit-mail'])) {

        $address = $_POST['emailIn'];
        $error = "";

        if($name == '') $error .= 'Please fill in your name';

        if (!filter_var($address, FILTER_VALIDATE_EMAIL)) $error .= 'The e-mail is invalid';

        $mailTo = "panicroomonline@gmail.com";
        $subject = "[FORM RESPONSE] ALL_EYES_ON_ME email intake: ".$address;
        $header = "Mail from: ".$address."\n\n";
        $message = "The user with the email address: ".$address." has submitted their email address for the ALL_EYES_ON_ME email list.";

        mail($mailTo, $subject, $message, $header);
        header("Location: index.html?mailsent");
    }