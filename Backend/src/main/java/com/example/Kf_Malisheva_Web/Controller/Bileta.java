package com.example.Kf_Malisheva_Web.Controller;

import java.awt.Color;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Time;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletResponse;
import javax.swing.text.StyleConstants;
import com.itextpdf.text.Image;
import com.example.Kf_Malisheva_Web.Entities.Ndeshja;
import com.itextpdf.barcodes.BarcodeQRCode;
import com.itextpdf.io.image.*;
import com.example.Kf_Malisheva_Web.Entities.Rezervimi;
import com.example.Kf_Malisheva_Web.Service.IStadiumiService;
import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.text.Image;
import com.itextpdf.text.Rectangle;
import com.lowagie.text.*;
import com.lowagie.text.pdf.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.graphics.image.PDImageXObject;

import static org.apache.coyote.http11.Constants.a;

public class Bileta {


    public Rezervimi rezervimi;
    public Ndeshja ndeshja;

    public Bileta(Rezervimi rezervimi, Ndeshja ndeshja){
        this.rezervimi=rezervimi;
        this.ndeshja=ndeshja;
    }



    public void export(HttpServletResponse response, int ulsja, String emri, String mbiemri, String emaili) throws DocumentException, IOException, FileNotFoundException, com.itextpdf.text.BadElementException {

        Document document;
        PdfWriter.getInstance(document=new Document(PageSize.A3), response.getOutputStream());

        document.open();
        ImageData image=ImageDataFactory.create("https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png");
      //  Image vendas=new Image(image);
        Image img = Image.getInstance("C:\\Users\\TECHCOM\\Downloads\\malilogo.png");


        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd");
        String dataENdeshjes = dateFormatter.format(ndeshja.getDataENdeshjes());
        //invoice title
        Font font = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        font.setSize(18);
        font.setColor(Color.BLUE);
        Paragraph p = new Paragraph("\n\n\n"+ndeshja.getEkipiVendas()+" - "+ndeshja.getEkipiMysafir()+"                                                                         "+ndeshja.getOraENdeshjes(), font);
        p.setAlignment(Paragraph.ALIGN_LEFT);

        System.out.println("\n");
        System.out.println("\n");
        System.out.println("\n");
        // invoice body
        Font bodyFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        bodyFont.setSize(12);
        bodyFont.setColor(Color.BLACK);
        Paragraph p1 = new Paragraph(  "\n DATA: "+dataENdeshjes +" ORA: "+ ndeshja.getOraENdeshjes()+"                                                                                                           Cmimi: 3.00€", bodyFont);
        p1.setAlignment(Paragraph.ALIGN_LEFT);
        System.out.println("\n");

        Font bookingtitle = FontFactory.getFont(FontFactory.HELVETICA);
        bookingtitle.setSize(18);
        bookingtitle.setColor(Color.black);

        Paragraph p2 = new Paragraph("\nStadiumi \"Liman Gegaj\" Malishevë", bookingtitle);
        bookingtitle.setColor(Color.BLUE);
        //p2.setAlignment(Paragraph.ALIGN_LEFT);
        System.out.println("\n");
        System.out.println("\n");
        System.out.println("\n");

        Paragraph p3 = new Paragraph("\nDyert e stadiumit hapen në ora : 14:00:00 "+"                                                                                            Kodi: \t"+emri.substring(0,1)+mbiemri.substring(1,2)+ulsja+rezervimi.getId()+"onb \n", bodyFont);
        p3.setAlignment(Paragraph.ALIGN_LEFT);
        System.out.println("\n");

        System.out.println("\n");
        System.out.println("\n");
        System.out.println("\n");
        Paragraph p6 = new Paragraph("Biletë ndeshje për "+ndeshja.getKategoria(), bodyFont);
        p6.setAlignment(Paragraph.ALIGN_CENTER);
        System.out.println("\n");
        Paragraph p7 = new Paragraph("", bodyFont);
        p7.setAlignment(Paragraph.ALIGN_LEFT);
        System.out.println("\n");
        Paragraph p14 = new Paragraph("\nEmri: "+emri+"                                                                                                                                             Ulesja numër: \t"+ulsja, bodyFont);
        p14.setAlignment(Paragraph.ALIGN_LEFT);
        System.out.println("\n");
        Paragraph p8 = new Paragraph("\nMbiemri: "+mbiemri+"                                                                                                                                        Tribuna: Lindore", bodyFont);
        p8.setAlignment(Paragraph.ALIGN_LEFT);
        Paragraph p9=new Paragraph("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n");
        Paragraph p15=new Paragraph("- Bileta eshte e vlefshme vetem per ndeshjen "+ndeshja.getEkipiVendas()+"-"+ndeshja.getEkipiMysafir()+".");
        Paragraph p16=new Paragraph("- Bileta duhet te printohet ne formatin A4, printimi duhet te jete i kualitetit te larte.");
        Paragraph p17=new Paragraph("- Biletat me kod te njejte detektohen dhe nuk lejohet te futeni me te njejten bilet te printuar me shume se 1 here.");
        Paragraph p18=new Paragraph("- Pas printimit, lutem prisni biletin sipas konturit mesiper.");
        Paragraph p19=new Paragraph("- Bileta duhet te mbahet pergjate deri ne perfundimin e ndeshjes.");
        Paragraph p20=new Paragraph("- Per cdo pakjartesi, kontaktoni ne emailin kfmalisheva@gmail.com;");


        System.out.println("\n");
        System.out.println("\n");
        System.out.println("\n");


        String MalishevaLogo="C:\\Users\\TECHCOM\\Downloads\\malilogo.png";
        ImageData imageData= ImageDataFactory.create(MalishevaLogo);
       // Image img=new Image(imageData);

        FileInputStream fileInputStream=new FileInputStream("C:\\Users\\TECHCOM\\Downloads\\malilogo.png");
        BarcodeQRCode qrCode=new BarcodeQRCode(rezervimi.getEmri()+rezervimi.getId());


        document.add(p9);
        document.add(p);
        document.add(p6);
        document.add(p1);
        document.add(p2);
        document.add(p3);
      //document.add(p6);
        document.add(p7);
        document.add(p14);
        document.add(p8);
        document.add(p9);
        document.add(p15);
        document.add(p16);
        document.add(p17);
        document.add(p18);
        document.add(p19);
        document.add(p20);





        document.close();

    }
}
