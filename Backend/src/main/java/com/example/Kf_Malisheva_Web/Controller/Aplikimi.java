package com.example.Kf_Malisheva_Web.Controller;

import com.example.Kf_Malisheva_Web.Entities.Aplikimet;
import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.layout.element.Image;
import com.lowagie.text.*;
import com.lowagie.text.Font;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfTable;
import com.lowagie.text.pdf.PdfWriter;

import javax.servlet.http.HttpServletResponse;
import java.awt.*;
import java.io.FileNotFoundException;
import java.io.IOException;

public class Aplikimi {

    private Aplikimet aplikimet;

    public Aplikimi(){

    }

    public void export(HttpServletResponse response, String emri, String mbiemri, short mosha, String pozita) throws DocumentException, IOException, FileNotFoundException {

        Document document;
        PdfWriter.getInstance(document = new Document(PageSize.A3), response.getOutputStream());

        document.open();

        Color color=new Color(255);
        Font bookingtitle = FontFactory.getFont(FontFactory.HELVETICA);
        bookingtitle.setSize(18);
        bookingtitle.setColor(Color.black);
        Font bodyFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        bodyFont.setSize(12);
        bodyFont.setColor(Color.BLACK);
        Paragraph p=new Paragraph("Kf Malisheva Akademi",bookingtitle);
        p.setAlignment(Paragraph.ALIGN_CENTER);
        document.add(p);
        Paragraph p2=new Paragraph("Aplikimi online - Te dhenat e aplikimit",bodyFont);
        p2.setAlignment(Paragraph.ALIGN_CENTER);
        Paragraph p3=new Paragraph("Ju Faleminderit!");
        p3.setAlignment(Paragraph.ALIGN_CENTER);
        Table table=new Table(2);
        Cell cell1=new Cell("Emri:");
        Cell cell2=new Cell(emri);
        Cell cell3=new Cell("Mbiemri: ");
        Cell cell4=new Cell(mbiemri);
        Cell cell5=new Cell("Mosha");
        Cell cell6=new Cell(String.valueOf(mosha)+" Vjeç");
        Cell cell7=new Cell("Pozita: ");
        Cell cell8=new Cell(pozita);
        Cell cell9=new Cell("Grupmosha: ");
        Cell cell10=new Cell(caktoGrupmoshen(mosha));
        Cell cell11=new Cell("Pagesa per muaj: ");
        Cell cell12=new Cell("12 Euro");
        cell1.setBackgroundColor(color);
        cell3.setBackgroundColor(color);
        cell5.setBackgroundColor(color);
        cell7.setBackgroundColor(color);
        cell9.setBackgroundColor(color);
        cell11.setBackgroundColor(color);
        document.add(p2);
        table.addCell(cell1);
        table.addCell(cell2);
        table.addCell(cell3);
        table.addCell(cell4);
        table.addCell(cell5);
        table.addCell(cell6);
        table.addCell(cell7);
        table.addCell(cell8);
        table.addCell(cell9);
        table.addCell(cell10);
        table.addCell(cell11);
        table.addCell(cell12);
        table.setBorderColor(Color.orange);
        document.add(table);
        document.add(p3);
        document.close();
    }

    private String caktoGrupmoshen(short mosha){
       if(mosha<=11){
        return "Grupmosha U11 - Parafatos";
       }else if(mosha==12||mosha==13){
           return "Grupmosha U13 - Fatos";
       }else if(mosha==14||mosha==15){
           return "Grupmosha U15- Pioner";
       }else {
           return "";
       }
    }
}
