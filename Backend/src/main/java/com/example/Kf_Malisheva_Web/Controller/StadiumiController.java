package com.example.Kf_Malisheva_Web.Controller;

import com.example.Kf_Malisheva_Web.Entities.*;
import com.example.Kf_Malisheva_Web.Service.EmailSenderService;
import com.example.Kf_Malisheva_Web.Service.IStadiumiService;
import com.itextpdf.text.BadElementException;
import org.dom4j.DocumentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.servlet.ServletOutputStream;
import javax.servlet.WriteListener;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping("/api/stadiumi")
public class StadiumiController {

    @Autowired
    private IStadiumiService iStadiumiService;
    @Autowired
    EmailSenderService emailSenderService;


    @GetMapping("/get/uleset")
    public List<Ulesja> getUleset(){
        return this.iStadiumiService.getAll();
    }

    @GetMapping("/krijo/rezervimin/{id}/{emri}/{mbiemri}/{emailAdresa}")
    public void krijoRezervimin(@PathVariable("id") int id, @PathVariable("emri") String emri, @PathVariable("mbiemri") String mbiemri, @PathVariable("emailAdresa") String emailAdresa) throws DocumentException, IOException, MessagingException {
        this.iStadiumiService.regjistroRezervimin(id,emri,mbiemri,emailAdresa);
        dergoEmailin(emailAdresa,emri,mbiemri,id);

    }

    @GetMapping("/export/PDF/{unik}/{ulsja}/{emri}/{mbiemri}/{emaili}")
    public String exportToPDF(HttpServletResponse response, @PathVariable("ulsja") int ulsja, @PathVariable("emri") String emri, @PathVariable("mbiemri") String mbiemri, @PathVariable("emaili") String emaili) throws DocumentException, IOException, BadElementException {
        response.setContentType("application/pdf");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd");
        String currentDateTime = dateFormatter.format(new Date());
        Rezervimi rezervimi=this.iStadiumiService.ktheRezerviminEFundit();
        Ndeshja ndeshja=this.iStadiumiService.gjejNdeshjenEFundt();
        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filelocation=C:\\Users\\TECHCOM\\Biletat; filename=Bileta"+ktheRezervimin().getEmri()+"_" +ktheRezervimin().getId()+".pdf";
        response.setHeader(headerKey, headerValue);

        Bileta invoiceExporter = new Bileta(rezervimi,ndeshja);
        invoiceExporter.export(response,ulsja,emri,mbiemri,emaili);
        System.out.println("erdh");

        return currentDateTime;
    }

    @GetMapping("/dergo/emailin")
    public void dergoEmailin(String email,String emri,String mbiemri,int id) throws DocumentException, IOException, MessagingException {
        String kodi=ktheRezervimin().getEmri().substring(0,1)+ktheRezervimin().getMbiemri().substring(1,2)+ktheRezervimin().getNumriIUleses()+ktheRezervimin().getId()+"onb";
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH:mm:ss");
        String currentDateTime = dateFormatter.format(new Date());
        emailSenderService.sendMailWithAttachment(email,"Bileta-Konfirmim","I/E nderuar "+emri+" "+mbiemri+", \n \n \n Me anë të ketij mesazhi konfirmojmë qe ju keni rezervuar ulsen numër "+id+". Bashkangjitur me kete email mund te gjeni bileten tuaj. \n\n Kodi i biletës tuaj: \t"+kodi+"\nJu Faleminderit,\n Stafi i KF Malisheva","C:\\Users\\TECHCOM\\Downloads\\Bileta"+ktheRezervimin().getEmri()+"_"+ktheRezervimin().getId()+".pdf");
    }

    @GetMapping("/atach")
    public void dergoAtach() throws DocumentException, IOException, MessagingException {
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd_HH");
        String currentDateTime = dateFormatter.format(new Date());
        emailSenderService.sendMailWithAttachment("morinaveprim1@gmail.com","rezervimi","aa","C:\\Users\\TECHCOM\\Downloads\\Bileta"+ktheRezervimin().getEmri());

    }
    @GetMapping("/gjej/rezervimin")
    public Rezervimi ktheRezervimin(){
        return this.iStadiumiService.ktheRezerviminEFundit();
    }

    @GetMapping("/gjej/ndeshjen")
    public Ndeshja ktheNdeshjen(){
        return this.iStadiumiService.gjejNdeshjenEFundt();
    }

    @GetMapping("/gjej/kategoria/{kategoria}")
    public TePergjithshme ktheKategorine(@PathVariable("kategoria") String kategoria){
        return this.iStadiumiService.gjejKategorine(kategoria);
    }
    @GetMapping("/gjej/sponzoret")
    public List<Sponzoret> ktheSponzoret(){
        return this.iStadiumiService.gjejSponzoret();
    }
    @GetMapping("gjej/ndeshjen/status")
    public Ndeshja ktheNdeshjenEFundit(){
        return this.iStadiumiService.gjejNdeshjenEFunditStatus();
    }

   @GetMapping("/set/eLire")
    public void setELire(){
        this.iStadiumiService.setELire();
   }

   @GetMapping("/numri/rezervimeve")
    public long numriRezervimeve(){
        return this.iStadiumiService.numriRezervimeve();
   }

   @GetMapping("/fshij/sponzorin/{id}")
    public void fshijSponzorin(@PathVariable("id") int id){
        this.iStadiumiService.fshijSponzorin(id);
   }

   @GetMapping("/merr/ndeshjet")
    public List<Ndeshja> merrNdeshjet(){
        return this.iStadiumiService.gjejNdeshjet();
   }

   @GetMapping("/merr/rezervimet/numri")
    public long merrNumriRezervimeve(){
        return this.iStadiumiService.getNumriRezervuar();
   }
}
