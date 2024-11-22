import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Login");
    }

    async getHtml() {
        return `
        
        <form class = "login-page" method="post">
          <div class="imgcontainer">
           
          </div>
        
          <div class="txtfield">
           
          <b><input type="email" id = "mail" placeholder="Email" name="email" required></b>
        
            
          <b><input type="password" id = "psw" placeholder="Mot de Passe" name="password" required></b>
          <input type="checkbox" id = "showpass" onclick = Toggle()>
          <div class = f-psw><a href="/password">Mot de passe oublie?</a>
          </div>
          </div>
          <div class = "login-button">
           <button class = "button1" type="submit">Connexion</button>
          </div>
        <script>
        function Toggle() {
          var temp = document.getElementById("psw");
          if (temp.type === "password") {
              temp.type = "text";
          }
          else {
              temp.type = "password";
          }
        }
      </script>
 
  </div>
 

  

        `;
    }
}