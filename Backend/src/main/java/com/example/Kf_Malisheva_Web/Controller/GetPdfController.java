package com.example.Kf_Malisheva_Web.Controller;



import com.example.Kf_Malisheva_Web.Service.CreatePdfFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;


@RestController
@RequestMapping("/api/pdf")

public class GetPdfController {



    @GetMapping("/createPdf")
     public void downloadFile(HttpServletResponse response) throws IOException{
        File file=new File("C:\\Users\\TECHCOM\\Downloads\\Manuali.pdf");
        response.setContentType("application/octet-stream");
        String headerKey="Content-Disposition";
        String headerValue="attachment; filename="+file.getName();

        response.setHeader(headerKey,headerValue);

        ServletOutputStream outputStream=response.getOutputStream();

        BufferedInputStream inputStream= new BufferedInputStream(new FileInputStream(file));

        byte[] buffer=new byte[8191];
        int bytesRead=-1;

        while ((bytesRead=inputStream.read(buffer))!=-1){
            outputStream.write(buffer,0,bytesRead);
        }
        inputStream.close();
        outputStream.close();
    }
}
