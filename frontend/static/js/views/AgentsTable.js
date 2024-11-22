import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Agents")
    }
    async getHtml() {
        return `  
        

        <h1> Mes Agents</h1>
        <div id = "agent-button">

        <button type="button"  id "newagent" class="button3" onclick="newAgent()">Ajouter un nouvel agent </button>
        <img src = "/static/img/agent.png" alt="logo" id="agentlogo">
        </div>
        <p>Vos agents vous apportent des leads, n’hésitez pas a faire appel aux cabinets comptables, assureurs et autres prestataires.  </p>
        <div class "agent-page">
     
    
        <table id = "agent">
        <th>Agent ID</th>
        <th>Mr/Mrs</th>
        <th>First Name</th>
        <th>Surname</th>
        <th>Address-Street</th>
        <th>City</th>
        <th>Postal Code</th>
        <th>Country</th>
        <th>Region</th>
        <th>Email</th>
        <th>Phone Number</th>
      
            </table>
            
        </div>
        <script>
          function newAgent() {
            var table = document.getElementById("agent");
            var row = table.insertRow(1);
            for(var i = 0; i < 11; i++) {
            var cell = row.insertCell(i);
            }
          }
        
        </script>
        `;
    }
}