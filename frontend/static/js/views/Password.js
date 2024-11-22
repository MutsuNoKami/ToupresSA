import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Password Change")
    }
    async getHtml() {
        return `  
        
        <h1> Reinitialiser mot de passe</h1>
          
        <form class = "resetform" method="post">
            <div>
          <b><input type="password" id = "oldpass" placeholder="Ancien Mot de Passe" required></b>
          <b><input type="password" id = "newpass"placeholder="Nouveau Mot de Passe" required></b>
          <b><input type="password" id = "passconfirm" placeholder="Confirmation du nouveau mot de Passe" required></b>
          </div>
          <div class = "pass-button">
           <button class = "button1" type="submit">Valider</button>
          </div><script>
          function checkPassword(){
          var oldP = document.getElementById("oldpass").value;
          var newP = document.getElementById("newpass").value;
          var confirmP =document.getElementById("passconfirm").value;
          }
          if(oldP!=""&&newP!=""&&confirmP!="")
          {
            if(oldP!=newP)
            {
              if(newP==confirmP)
               {
                alert("Password has been changed.");
                return true;
               }
               else
                {
                  alert("Password incorrect.");
                  return false;
                }
            }
            else
           {
            alert("You cannot use your old password");
            return false;
           }
          }
          else
          {
           alert("Please enter in each field");
           return false;
          }
      }
 
        </form>
        `;
    }
}