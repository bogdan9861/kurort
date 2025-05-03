<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Укажите ваш адрес электронной почты, на который будут отправляться письма
$to = "wd_website@mail.ru";

// Тема письма
$subject = "Новая заявка на звонок";

// ... (Получение и валидация данных из формы) ...

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из полей формы
    $name = trim($_POST["name"]);
    $phone = trim($_POST["message"]);

    // Простая валидация данных (можно добавить более сложную)
    if (empty($name)) {
        $error_message = "Пожалуйста, укажите ваше имя.";
    }
    if (empty($phone)) {
        $error_message = "Пожалуйста, укажите телефон.";
    }

    // Если есть ошибки валидации, выводим сообщение
    if (!empty($error_message)) {
        echo '<p style="color: red;">' . $error_message . '</p>';
    } else {

        // Формируем текст письма
        $email_message = "Имя: " . $name . "\n\n";
        $email_message .= "Телефон:\n" . $phone;

        // Создаем экземпляр PHPMailer
        $mail = new PHPMailer(true);

        try {
            // Настройки SMTP (необходимо настроить для вашего почтового сервера)
            $mail->isSMTP();
            $mail->Host = 'smtp.example.com';  // Замените на ваш SMTP хост
            $mail->SMTPAuth = true;
            $mail->Username = 'your_smtp_username'; // Замените на ваш SMTP логин
            $mail->Password = 'your_smtp_password'; // Замените на ваш SMTP пароль
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Или PHPMailer::ENCRYPTION_SMTPS
            $mail->Port = 587;   // Замените на ваш SMTP порт

            // Настройки отправителя и получателя
            $mail->setFrom('noreply@example.com', $name); // Замените на ваш домен
            $mail->addAddress($to);

            // Настройки содержимого письма
            $mail->isHTML(false); // Отправляем как обычный текст (не HTML)
            $mail->Subject = $subject;
            $mail->Body = $email_message;

            $mail->send();
            echo '<p style="color: green;">Сообщение успешно отправлено!</p>';
        } catch (Exception $e) {
            echo "<p style='color: red;'>Ошибка при отправке сообщения: {$mail->ErrorInfo}</p>";
        }
    }
}
?>