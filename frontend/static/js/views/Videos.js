import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Videos")
    }
    async getHtml() {
        return `  
 
        <h1> Comment utiliser votre plateforme Toupres</h1>
        <span class = "arrow">&#139;</span>
        <span class = "arrow">&#155;</span>
        <section>
          <div class= "slide"><iframe width="480" height="270" src="https://www.youtube.com/embed/9vYVin4EIzU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
          <div class= "slide"><iframe width="480" height="270" src="https://www.youtube.com/embed/_E5K5DRmCO8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
          <div class= "slide"><iframe width="480" height="270" src="https://www.youtube.com/embed/gMH4qbXvHPg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
          <div class= "slide"><iframe width="480" height="270" src="https://www.youtube.com/embed/mnTU_hJoByA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
          <div class= "slide"><iframe width="480" height="270" src="https://www.youtube.com/embed/dEYv5Ckpkrw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
          <div class= "slide">06</div>
          <div class= "slide">07</div>
          <div class= "slide">08</div>
          <div class= "slide">09</div>
          <div class= "slide">00</div>
        </section> 
       
  
       
       <div class = video-container>
       <button type=submit class="button1">Envoyer un message au support</button>
       <div>
        `;
    }
}