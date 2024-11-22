import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Commissions");
    }

    async getHtml() {
        return `  
        
        <h1>Commissions</h1>
        <form>
        <table id = "com">
        <h3>Informations </h3>
        <th>Mois</th>
        <th>Montant de la commission</th>
        <th>Rapport</th>
        <th>Factures</th>
        <tr>
        <td></td>
        <td>Amount of commission to be paid</td>
        <td><button type="submit" class="button4">Detail</button><br></br>When they click details they can access the details and can extract it as a pdf</td>
        <td>Invoice will appear after payment</td>
        </tr>
            </table>
            </form>
        `;
    }
}