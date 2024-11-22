import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Leads");
    }

    async getHtml() {
        return `
         <h1> Leads recus</h1>
         <p id = "lead-cap">Un de vos agent vous a envoy2 un lead afin que vous puissiez clore la vente.
         </p>
         <table id="leads">
         <th>Numéro client</th>
 
         <th>Nom du contact</th>
         <th>Telephone</th>
         <th>Email</th>
         <th>Nom de la societe</th>
         <th>Nom du commerce sur l'application</th>
         <th>Addresse Rue</th>
         <th>Code Postal</th>
         <th>Ville</th>
         <th>Categorie 1</th>
         <th>Categorie 2</th>
         <th></th>
         <th></th>
         <tr>
         <td>Client ID
         </td>
         <td>Name of the contact person
         </td>
         <td>Phone number
         </td>
         <td>Client E-Mail
         </td>
         <td><a href= "#" >Official shop name</a></td> 
         <td><a href= "#"> App shop name</a></td> 
         <td>Street</td>
         <td>Postcode</td> 
         <td>City</td>
         <td></td> 
         <td>If 1 is selected mention NA</td>
         <td><button type="submit" class="button1" id = "won">Lead gagne</button></td>
          <td> <button type="submit" class="button2" id = "lost">Lead perdu</button></td>
         <tr>
         <td></td>
         
         <td></td>
         
         <td></td>
         
         <td></td>
         
         <td></td>
         
         <td></td>
         
         <td></td>
     
         
         <td></td>
         
         <td></td>
         
         <td></td>
         
         <td></td>
         

         <td><button type="submit" class="button1" id = "won">Lead gagne</button></td>
         <td> <button type="submit" class="button2" id = "lost">Lead perdu</button></td>
        <tr>
        <td></td>
         
         <td></td>
         
         <td></td>
         
         <td></td>
         
         <td></td>
         
         <td></td>
         
         <td></td>
     
         
         <td></td>
         
         <td></td>
         
         <td></td>
         
         <td></td>
         </tr>
        `;
    }
}