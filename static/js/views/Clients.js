import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
      constructor(params) {
        super(params);
        this.setTitle("Clients")
    }
    async getHtml() {
        return `  
        <h1> Mes Clients</h1>
        <table id="clients">
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
        <thDate de signature du contrat</th>
        <th>Nombre de transactions</th>
        <th>Connecte/Deconnecte</th>
        <th>AA ID</th>
        <th>Mairie</th>
        <th>Statut</th>
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
         
        <td>If 1 is selected mention NA</td>
        <td>Signature date</td> 
        <td>total number of transactions</td> 
        <td>Activated/Deactivated</td>
        <td>Field visible only from the Super Admin Side - Super Agent ID.
        </td> 
        <td>If a municipality (Key seach is the Postal code) is registered with Toupres, then a tick should appear here)
        </td>
        <td>Attente KYC (if KYC is ongoing) possibility here to upload again new documents if needed, Valide (when activated)
        </td> 
        <td><button class = "button1" id = "kyc" type="submit">Gerer KYC</button></td>
        </tr>

        
        <script>
        function newAgent() {
          var table = document.getElementById("agent");
          var row = table.insertRow(1);
          for(var i = 0; i < 11; i++) {
          var cell = row.insertCell(i);
          }
        }
      
      </script>
         
        }
        </script>
        `;
    }
}