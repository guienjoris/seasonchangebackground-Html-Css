var dateInput= document.getElementById("input_date");
var descriptionSaison= document.getElementById("description_saison");

dateInput.addEventListener("change", ()=> {
    console.log(dateInput.value);
    var date =new Date(dateInput.value)

    console.log (date);
    

    if ( date.getMonth() ===0){
        descriptionSaison.innerHTML= "Vous êtes en hiver";
        document.body.style.backgroundImage= "url('./snow.jpg')"
    }
    if ( date.getMonth() ===1){
        descriptionSaison.innerHTML= "Vous êtes en hiver";
        document.body.style.backgroundImage= "url('./snow.jpg')"

    }
    if ( date.getMonth()===2 && date.getDate() <= 21){
        descriptionSaison.innerHTML= "Vous êtes en hiver";
        document.body.style.backgroundImage= "url('./snow.jpg')"

    }
    if ( date.getMonth()===2 && date.getDate()>= 21){
        descriptionSaison.innerHTML= "Vous êtes en printemps";
        document.body.style.backgroundImage= "url('./spring.jpg')"

    }
    if ( date.getMonth()===3){
        descriptionSaison.innerHTML= "Vous êtes en printemps";
        document.body.style.backgroundImage= "url('./spring.jpg')"

    }
    if ( date.getMonth()===4){
        descriptionSaison.innerHTML= "Vous êtes en printemps";
        document.body.style.backgroundImage= "url('./spring.jpg')"

    }
    if ( date.getMonth()===5 && date.getDate()<= 21) {
        descriptionSaison.innerHTML= "Vous êtes en printemps";
        document.body.style.backgroundImage= "url('./spring.jpg')"

    }
    if ( date.getMonth()===5 && date.getDate()>= 21) {
        descriptionSaison.innerHTML= "Vous êtes en été";
        document.body.style.backgroundImage= "url('./sun.jpg')"

    }
    if ( date.getMonth()===6 ) {
        descriptionSaison.innerHTML= "Vous êtes en été";
        document.body.style.backgroundImage= "url('./sun.jpg')"

    }
    if ( date.getMonth()===7 ) {
        descriptionSaison.innerHTML= "Vous êtes en été";
        document.body.style.backgroundImage= "url('./sun.jpg')"

    }
    if ( date.getMonth()===8 && date.getDate()<= 21 ) {
        descriptionSaison.innerHTML= "Vous êtes en été";
        document.body.style.backgroundImage= "url('./sun.jpg')"

    }
    if ( date.getMonth()===8 && date.getDate()>= 21 ) {
        descriptionSaison.innerHTML= "Vous êtes en automne";
        document.body.style.backgroundImage= "url('./fall.jpg')"

    }
    if ( date.getMonth()=== 9) {
        descriptionSaison.innerHTML= "Vous êtes en automne";
        document.body.style.backgroundImage= "url('./fall.jpg')"

    }
    if ( date.getMonth()===10) {
        descriptionSaison.innerHTML= "Vous êtes en automne";
        document.body.style.backgroundImage= "url('./fall.jpg')"

    }
    if ( date.getMonth()===11 && date.getDate()<= 21 ) {
        descriptionSaison.innerHTML= "Vous êtes en automne";
        document.body.style.backgroundImage= "url('./fall.jpg')"

    }
    if ( date.getMonth()===11 && date.getDate()>= 21 ) {
        descriptionSaison.innerHTML= "Vous êtes en hiver";
        document.body.style.background= "url('./snow.jpg')"

    }


});
