package com.example.Kf_Malisheva_Web.Controller;

import com.example.Kf_Malisheva_Web.Entities.*;
import com.example.Kf_Malisheva_Web.Service.EmailSenderService;
import com.example.Kf_Malisheva_Web.Service.IAplikimetService;
import com.example.Kf_Malisheva_Web.Service.IEmailService;
import org.dom4j.DocumentException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/aplikimet")
public class AplikimetController {

    private int random;
    private int kodiSpecifik;

    private int kodiId;
    @Autowired
    private IAplikimetService iAplikimetService;

    @Autowired
    private IEmailService iEmailService;
    @Autowired
    EmailSenderService emailSenderService;

    @PostMapping("/shto/aplikimin")
    public void shtoAplikimin(@RequestBody Aplikimet aplikimet){
       this.iAplikimetService.shtoAplikimin(aplikimet.getEmri(), aplikimet.getMbiemri(), aplikimet.getMosha(), aplikimet.getPozita());
    }

    @GetMapping("/merr/aplikimet")
    public List<Aplikimet> merrAplikimet(){
        return this.iAplikimetService.merrAplikimet();
    }


    @GetMapping("/export/PDF/aplikimin/{emri}/{mbiemri}/{mosha}/{pozita}")
    public String exportToPDF(HttpServletResponse response,@PathVariable("emri") String emri, @PathVariable("mbiemri") String mbiemri, @PathVariable("mosha") short mosha, @PathVariable("pozita") String pozita) throws DocumentException, IOException {
        response.setContentType("application/pdf");
        DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd");
        String currentDateTime = dateFormatter.format(new Date());

        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filelocation=C:\\Users\\TECHCOM\\Biletat; filename=Aplikimi.pdf";
        response.setHeader(headerKey, headerValue);

        Aplikimi invoiceExporter = new Aplikimi();
        invoiceExporter.export(response, emri, mbiemri, mosha, pozita);
        System.out.println("Print");

        return currentDateTime;
    }

    @GetMapping("/merr/aplikimet/{prej}/{deri}")
    public List<Aplikimet> merrAplikimetSipasDates(@PathVariable("prej") String prej, @PathVariable("deri") String deri){
        LocalDate dataPrej = LocalDate.parse(prej);
        LocalDate dataDeri= LocalDate.parse(deri);

        /*
         DateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd");
        String dataPrej = dateFormatter.format(prej);
        String dataDeri = dateFormatter.format(deri);
        LocalDate dPrej= LocalDate.parse(dataPrej);
        LocalDate dDeri= LocalDate.parse(dataDeri);
         */
        return this.iAplikimetService.merrAplikimetData(dataPrej,dataDeri);
    }

    @GetMapping("/kodi/{emaili}")
    public void dergoKodin(@PathVariable("emaili") String emaili) throws DocumentException, IOException, MessagingException {
        int min = 10000;
        int max = 90000;
        random=(int)(Math.random()*(max-min+1)+min);
        kodiSpecifik=random;
        Kodi kodi=new Kodi(emaili,kodiSpecifik);
        this.iAplikimetService.ruajKodin(kodi);

        emailSenderService.sendMessage(emaili,"Kodi i konfirmimit","Kodi juaj i konfirmimit: "+random);
    }

    @GetMapping("/verifiko/{kodiPerdoruesit}/{emaili}")
    public void verifikoKodin(@PathVariable("kodiPerdoruesit") int kodiPerdoruesit,@PathVariable("emaili") String emaili){
         Kodi kodi=this.iAplikimetService.gjejKodin(kodiSpecifik);
        if(kodi.getKodiPerdoruesit()==kodiPerdoruesit){
            this.iAplikimetService.verifiko(kodi.getId());
        }
        else{
          System.out.println("Pasakt");
        }
    }

    @GetMapping("/merr/kodin/{kodiPerdoruesit}")
    public boolean merrKodin(@PathVariable("kodiPerdoruesit") int kodiPerdoruesit){
         Kodi kodis=this.iAplikimetService.gjejKodin(kodiPerdoruesit);
         return kodis.getKodiSakt();
    }

    @GetMapping("/merr/{email}")
    public boolean merrKodin(@PathVariable("email") String email){
        Kodi kodis=this.iAplikimetService.merrEmail(email);
        return kodis.getKodiSakt();
    }

    @GetMapping("/merr/sakt/{kod}")
    public boolean kodiS(@PathVariable("kod") int kod){
        if(kod==random){
            return true;
        }else{
            return false;
        }
    }

    @GetMapping("/merr/kodet")
    public List<Kodi> merrKodin(){
        return this.iAplikimetService.merrKodet();
    }

    @GetMapping("/regjistro/{id}/{emri}/{fjalkalimi}")
    public void regjistroPerdoruesin(@PathVariable("id") int id,@PathVariable("emri") String emri, @PathVariable("fjalkalimi") String fjalkalimi){
        Aplikimet aplikimet=this.iAplikimetService.merrAplikiminId(id);
        aplikimet.setIRegjistruar(true);
        this.iAplikimetService.ndryshoRegjistro(aplikimet);
        this.iEmailService.shtoPerdoruesin(id, emri, fjalkalimi);
    }

    @GetMapping("merr/aplikimet/kode/{email}")
    public boolean ekziston(@PathVariable("email") String email){
        List <String> emailat=this.iAplikimetService.gjejEmailat();
        String emaili;
        for(int i=0;i<emailat.size();i++){
             emaili=emailat.get(i);
            if(emaili.equals(email)){
                return true;
            }else {
                return false;
            }
        }
        return false;
    }

    @GetMapping("gjej/admin/{emri}/{fjalkalimi}")
    public String gjejAdmin(@PathVariable("emri") String emri, @PathVariable ("fjalkalimi") String fjalkalimi){
        List<AkademiaEmail> emails=iEmailService.gjejAdministratoret();
        for(int i=0;i<emails.size();i++){
            AkademiaEmail adminEmail=emails.get(i);
            if(adminEmail.getEmriPerdoruesit().equals(emri)&&adminEmail.getFjalkalimi().equals(fjalkalimi)){
                return "Sakt";
            }else {
                return "Pa sakt";
            }
        }
        return "";
    }

    @GetMapping("gjej/email/{emailiPerdoruesit}")
    public boolean gjejEmailet(@PathVariable("emailiPerdoruesit") String emailP ){
        Kodi [] kodiEmail=this.iAplikimetService.gjejEmail();
        Kodi kodiEm;
      for(int i=0;i<kodiEmail.length;++i){
          System.out.println("1 her");
           kodiEm=kodiEmail[i];
          if(kodiEm.getEmaili().equals(emailP)){
             return true;
          }else{
              return false;
          }
      }
      return false;
    }

    @GetMapping("/gjej/admin")
    public List<AkademiaEmail> merrAplikuesit(){
        return this.iEmailService.gjejAdministratoret();
    }
    @GetMapping("/merr/aplikuesit/{emri}")
    public List<Aplikimet> merrAplikuesit(@PathVariable("emri") String emri){
         return this.iAplikimetService.gjejAplikimet(emri);
    }

    @GetMapping("/numri/aplikuesve")
    public long getNumriAplikuesve(){
        return this.iAplikimetService.numriAplikuesve();
    }

    @GetMapping("/numri/aplikuesve/sot")
    public long getNumriAplikuesveSot(){
        return this.iAplikimetService.aplikuesitSot();
    }

    @GetMapping("/numri/regjistruar")
    public long getNumriRegjistruar(){
        return this.iEmailService.numriRegjistruar();
    }

    @GetMapping("/login/{username}/{password}")
    public AkademiaEmail gjejLogin(@PathVariable("username") String username, @PathVariable("password") String password){
        return this.iEmailService.login(username,password);
    }

    @GetMapping("/ndrysho/fjalkalimin/{emri}/{fjalkalimi}")
    public void ndryshoFjalkalimin(@PathVariable("emri") String emri, @PathVariable("fjalkalimi") String fjalkalimi){

        this.iEmailService.ndryshoFjalkalimin(fjalkalimi,emri);
    }
}
