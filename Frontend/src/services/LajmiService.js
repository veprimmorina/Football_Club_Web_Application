import axios from 'axios';

const LAJMI_BASE_REST_API_URL="http://localhost:8080/api/stadiumi/get/uleset";
const KRIJO_REZERVIMIN_URL="http://localhost:8080/api/stadiumi/krijo/rezervimin"
const KRIJO_BILETEN_URL="http://localhost:8080/api/stadiumi/export/PDF";
const MERR_FUTBOLLISTET_URL="http://localhost:8080/api/futbollistet/gjej/gjith/ekipin"
const MERR_FUTBOLLISTET_GOAL_URL="http://localhost:8080/api/futbollistet/get/goals";
const MERR_STADIUMIN="http://localhost:8080/api/stadiumi/gjej/stadiumin";
const MERR_SPONZORET_URL="http://localhost:8080/api/stadiumi/gjej/sponzoret";
const MERR_TABELEN_URL="http://localhost:8080/api/tabela/get";
const MERR_LAJMET_URL="http://localhost:8080/api/lajmet/merr/lajmet";
const SHTO_FITOREN="http://localhost:8080/api/tabela/shto/piket";
const SHTO_BARAZIMIN="http://localhost:8080/api/tabela/shto/barazimin";
const SHTO_HUMBJEN="http://localhost:8080/api/tabela/shto/humbjen";
const SHTO_GOLAT="http://localhost:8080/api/tabela/shto/golat";
const SHTO_GOLAT_PESUAR="http://localhost:8080/api/tabela/shto/golat/pesuar";
const MERR_LAJMIN_URL="http://localhost:8080/api/lajmet/gjej/lajmin";
const MERR_MODIFIKO_URL="http://localhost:8080/api/futbollistet/ruaj/futbollistin/"
const SHTO_FUTBOLLISTIN_URL="http://localhost:8080/api/futbollistet/shto/futbollistin";
const MERR_TOP_FUTBOLLISTET="http://localhost:8080/api/futbollistet/get/all/top";
const FSHIJ_FUTBOLLISTIN_URL="http://localhost:8080/api/futbollistet/fshij/futbollistin/";
const MERR_LOJEN_E_FUNDIT_URL="http://localhost:8080/api/stadiumi/gjej/ndeshjen";
const PERDIRESO_ULESET_URL="http://localhost:8080/api/stadiumi/set/eLire";
const MERR_GJITHA_LAJMET="http://localhost:8080/api/lajmet/gjej/lajmet";
const SHTO_APLIKIMIN="http://localhost:8080/api/aplikimet/shto/aplikimin";
const MERR_APLIKIMET="http://localhost:8080/api/aplikimet/merr/aplikimet";
const SHKARKO_APLIKIMIN_URL="http://localhost:8080/api/aplikimet/export/PDF/aplikimin";
const REGJISTRO_EMAIL_URL="http://localhost:8080/api/aplikimet/regjistro";
class LajmiService{
    getLajmet(){
        return axios.get(LAJMI_BASE_REST_API_URL);
    }
    krijoRezervinPerBilete(id,emri,mbiemri,emailadresa){
        return axios.request(KRIJO_REZERVIMIN_URL+"/"+id+"/"+emri+"/"+mbiemri+"/"+emailadresa);
       
    }
    gjeneroFaturen(){
        return axios.get(KRIJO_BILETEN_URL); 
    }
    getFutbollistet(){
        return axios.get(MERR_FUTBOLLISTET_URL);
    }
    getFutbollistetByGoals(){
        return axios.get(MERR_FUTBOLLISTET_GOAL_URL);
    }
    getStadiumin(){
        return axios.get(MERR_STADIUMIN);
    }
    gjejSponzoret(){
        return axios.get(MERR_SPONZORET_URL);
    }
    gjejTabelen(){
        return axios.get(MERR_TABELEN_URL);
    }
    gjejLajmet(){
        return axios.get(MERR_LAJMET_URL);
    }
    gjejNdeshjenEFundit(){
        return axios.get("http://localhost:8080/api/stadiumi/gjej/ndeshjen/status");
    }
    shtoFitoren(id){
        return axios.request(SHTO_FITOREN+"/"+id)
    }
    shtoBarazimin(id){
        return axios.request(SHTO_BARAZIMIN+"/"+id)
    }
    shtoHumbejn(id){
        return axios.request(SHTO_HUMBJEN+"/"+id)
    }
    shtoGolat(id){
        return axios.request(SHTO_GOLAT+"/"+id)
    }
    shtoGolatPesuar(id){
        return axios.request(SHTO_GOLAT_PESUAR+"/"+id)
    }
    gjejLajmin(id){
        return axios.get(MERR_LAJMIN_URL+"/"+id)
    }
    ruajModifikimin(id,emri){
        return axios.request(MERR_MODIFIKO_URL+id+"/"+emri)
    }
    shtoFutbollist(futbollisti){
        return axios.post(SHTO_FUTBOLLISTIN_URL, futbollisti)
    }
    gjejTopFutbollistet(){
        return axios.get(MERR_TOP_FUTBOLLISTET);
    }
    fshijFutbollistin(id){
        return axios.get(FSHIJ_FUTBOLLISTIN_URL+id);
    }
    merrNdeshjen(){
        return axios.get(MERR_LOJEN_E_FUNDIT_URL);
    }
    perditesoUleset(){
        return axios.get(PERDIRESO_ULESET_URL);
    }
    merrLajmet(){
        return axios.get(MERR_GJITHA_LAJMET);
    }
    shtoAplikimin(aplikimi){
        return axios.post(SHTO_APLIKIMIN, aplikimi);
    }
    gjejAplikimet(){
        return axios.get(MERR_APLIKIMET);
    }
    shkarkoAplikimin(){
        return axios.get(SHKARKO_APLIKIMIN_URL);
    }
    gjejAplikimetData(prej,deri){
        return axios.get('http://localhost:8080/api/aplikimet/merr/aplikimet/'+prej+'/'+deri);
    }
    gjejOraret(){
        return axios.get("http://localhost:8080/api/stervitjet/merr/orarin");
    }
    gjejOraretU13(){
        return axios.get("http://localhost:8080/api/stervitjet/merr/orarin/U13");
    }
    gjejOraretU15(){
        return axios.get("http://localhost:8080/api/stervitjet/merr/orarin/U15");
    }
    gjejOraretU17(){
        return axios.get("http://localhost:8080/api/stervitjet/merr/orarin/U17");
    }
    dergoKodin(emaili){
        return axios.get("http://localhost:8080/api/aplikimet/kodi/"+emaili);
    }
    verifikoKodin(kodi,emaili){
        return axios.get("http://localhost:8080/api/aplikimet/verifiko/"+kodi+"/"+emaili);
    }
    gjejKodin(kodiP){
        return axios.get("http://localhost:8080/api/aplikimet/merr/kodin/"+kodiP)
    }
    gjejKodet(){
        return axios.get("http://localhost:8080/api/aplikimet/merr/kodet");
    }
    shtoEmailin(id,emri,fjalkalimi){
        return axios.get(REGJISTRO_EMAIL_URL+"/"+id+"/"+emri+"/"+fjalkalimi);
    }
    merrEmailatKode(email){
        return axios.get("http://localhost:8080/api/aplikimet/merr/aplikimet/kode/"+email);
    }
    gjejAdministratoret(){
        return axios.get("http://localhost:8080/api/aplikimet/gjej/admin");
    }
    merrNjoftimet(){
        return axios.get("http://localhost:8080/api/njoftimet/merr/njoftimet");
    }
    shtoNjoftime(njoftimet){
        return axios.post("http://localhost:8080/api/njoftimet/shto/njoftimin", njoftimet);
    }
    gjejEmail(){
        return axios.get("http://localhost:8080/api/aplikimet/gjej/email");
    }
    gjejAplikuesit(patern){
        return axios.get("http://localhost:8080/api/aplikimet/merr/aplikuesit/"+patern)
    }
    gjejLajminId(id){
        return axios.get("http://localhost:8080/api/lajmet/gjej/lajmin/"+id)  
    }
    gjejNdeshjet(){
        return axios.get("http://localhost:8080/api/stadiumi/merr/ndeshjet")
    }
    ruajFjalkalimin(fjalkalimi,emri){
        return axios.get("http://localhost:8080/api/aplikimet/ndrysho/fjalkalimin/"+fjalkalimi+"/"+emri)
    }
    
    
}

export default new LajmiService();