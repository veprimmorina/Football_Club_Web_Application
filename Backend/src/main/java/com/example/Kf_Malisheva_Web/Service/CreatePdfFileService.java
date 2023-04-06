package com.example.Kf_Malisheva_Web.Service;


import com.example.Kf_Malisheva_Web.Entities.Ulesja;

import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;

import org.springframework.stereotype.Service;

import java.io.FileNotFoundException;
import java.util.ArrayList;

@Service
public class CreatePdfFileService {



    public void createPdf() {
        String filePdf = "C:\\Users\\TECHCOM\\Downloads";



        try {

            PdfWriter writer = new PdfWriter(filePdf);
            PdfDocument pdfDoc = new PdfDocument(writer);
            Document document = new Document(pdfDoc);
            Paragraph p1 = new Paragraph("Hello Welcome To CS Academy");
            float[] columnWidth = {200f, 200f, 200f};
            Table table = new Table(columnWidth);
            table.addCell(new Cell().add("ID"));
            table.addCell(new Cell().add("Name"));
            table.addCell(new Cell().add("Email"));

                table.addCell(new Cell().add("1"));
                table.addCell(new Cell().add("2"));
                table.addCell(new Cell().add("3"));




            document.add(p1);
            document.add(table);
            document.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
    }

}
