package com.example.Kf_Malisheva_Web.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;

@Service
public class EmailSenderService {


    JavaMailSender emailSender;


    public EmailSenderService(JavaMailSender emailSender){
        this.emailSender=emailSender;

    }
    public void sendMessage(String to, String subject, String text){

        String formEmail="kosalbdiscovery@gmail.com";
        SimpleMailMessage message=new SimpleMailMessage();
        message.setFrom(formEmail);
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        this.emailSender.send(message);

    }

    public void sendMailWithAttachment(String to, String subject, String text,String attachment) throws MessagingException {

        MimeMessage mimeMessage=emailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper=new MimeMessageHelper(mimeMessage,true);
        String formEmail="kosalbdiscovery@gmail.com";

        mimeMessageHelper.setFrom(formEmail);
        mimeMessageHelper.setTo(to);
        mimeMessageHelper.setSubject(subject);
        mimeMessageHelper.setText(text);
        FileSystemResource fileSystemResource=new FileSystemResource(new File(attachment));
        mimeMessageHelper.addAttachment(fileSystemResource.getFilename(),fileSystemResource);
        emailSender.send(mimeMessage);

        System.out.println("Shkoj me attach");
    }



}
