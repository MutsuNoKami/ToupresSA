import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Support");
    }

    async getHtml() {
        return `
            
            <div class = "support-page">
            <table id = "support-buttons">
            <tr>
            <td>
            <button type="submit" class="button2" id = "sp1">Support Technique</button>
            </td>
            <td><button type="submit" class="button2" id = "sp2">Support Admin</button></td>
            </tr>
            <tr><td>*Je souhaite remonter un bug ou une anomalie de fonctionnement</td>
            <td>**J’ai une question administrative sur l’utilisation de ma plateforme.</td></tr>

                         </table></div>
         
        `;
    }
}