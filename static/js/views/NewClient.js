import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("New Client")
    }
    async getHtml() {
        return `  
        <h1>Nouveau Client</h1>

       
        
        <div class = "newclient">
        <table id = "new-c">
        <tr>
        <td>
        <div class = "img-busi">
        <img src = "/static/img/business.png" alt="logo">
        </div>
        </td>
        
        <td>
        <div class = "img-munic"><img src = "/static/img/munic.png" alt="logo"></td>
        </div>
        </tr>
        <tr><td> <button type="submit" class="button1" id = "busi">Ajouter un business</button></td>
        <td><button type="submit" class="button1" id = "munic">Ajouter un municipalitie</button></td></tr>

                     </table></div>
     `;
    }
}