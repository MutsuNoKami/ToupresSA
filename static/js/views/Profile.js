import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Profile");
    }

    async getHtml() {
        return `
        <h1> Profil Super Agent</h1>
        <form class = "reginfo">
        <div><label for ="siret">"Siret"</label>
            <input type = "text" name = "siret" placeholder="xxxxx">
                <span></span>
            </div>
            <div>
            <label for ="company">"Raison sociale"</label>
            <input type = "text" name = "company" placeholder="xxxxx">
                <span></span>
            </div>
             <div>
             <label for ="regnum">"Forme Juridique"</label>
            <input type = "text" name = "Forme Juridique" placeholder="xxxxx">
                <span></span>
            </div>
             <div><label for ="regnum">"Numero RCS ou d'immatriculation"</label>
            <input type = "text" name = regnum placeholder="xxxxx">
                <span></span>
            </div>
             <div><label for ="surname">Prenom</label>
            <input type = "text" name = "surname" placeholder="xxxxx">
                <span></span>
            </div>
            <div><label for ="name">Nom</label>
            <input type = "text" name = "name" placeholder="xxxxx">
                <span></span>
            </div>
            <div><label for ="email">Email>
            <input type = "text" name = "email" placeholder="xxxxx">
                <span></span>
            </div>
                <span></span>
            </div>
            <div><label for ="phone">Telephone</label>
            <input type = "number" name = "phone" placeholder="xxxxx">
                <span></span>
            </div>
            <label for ="address">Adresse rue</label>
            <input type = "text" name = "address" placeholder="xxxxx">
                <span></span>
            </div>
            <div>
            <label for ="town">Ville</label>
            <input type = "text" name = "town" placeholder="xxxxx">
                <span></span>
            </div>
            <div> 
            <label for ="postcode">Code Postal</label>
            <input type = "text" name = "postcode" placeholder="xxxxx">
                <span></span>
            </div>
            <div>
            <label for ="country">Pays</label>
            <input type = "text" name = "country" placeholder="xxxxx">
                <span></span>
            </div>
            <div> 
            <label for ="region">Region</label>
            <input type = "text" name = "region" placeholder="xxxxx">
                <span></span>
            </div>
            <div>
            <label for ="tva">Numero de TVA</label>
            <input type = "number" name = "tva" placeholder="xxxxx">
                <span></span>
            </div>
            
            <br></br>
            <h3> Information bancaries </h3>
            <div>
            <label for ="bank">Nom de la banque</label>
            <input type = "text" name = "bank" placeholder="xxxxx">
                <span></span>
            </div>
            <div>
            <label for ="iban">IBAN</label>
            <input type = "text" name = "iban" placeholder="xxxxx">
                <span></span>
            </div>
            <div> 
            <label for ="bic">SWIFT Code/BIC</label>
            <input type = "text" name = "iban" placeholder="xxxxx">
                <span></span>
            </div>
                </form>
              <div id = profile-container>  <a href="/profile/password"><button type="submit" id = "passbutton" class="button1">Reinitialiser mot de passe</button><a/>
              </div>
                
                `

    }
}