
// le varie mail
const mails = ["vittorioaquilino17@gmail.com",
    "pietroarmillotta38@gmail.com",
    "aronbaglietto88@gmail.com",
    "gbianchi528@gmail.com",
    "omimikael@gmail.com",
    "fabrizio.bocca27@gmail.com",
    "bodasca.luca@gmail.com",
    "chriscapod7@gmail.com",
    "alex23aprile@gmail.com",
    "renato.confuorto@gmail.com",
    "corona.simone93@gmail.com",
    "saraellero@gmail.com",
    "m.erroi92@gmail.com",
    "g.lucafarci89@gmail.com",
    "federcio.fontana@gmail.com",
    "saretta.summer16@gmail.com",
    "ghazouani1988@gmail.com",
    "giurgicatalin@gmail.com",
    "davide.enjoy89@gmail.com",
    "marro1777luv@gmail.com",
    "lollobrigida.carlo@gmail.com",
    "mat.maino@gmail.com",
    "ste.mastrantonio@gmail.com",
    "mastroeni.santi@gmail.com",
    "ludovica.messineo9@gmail.com",
    "natalefrancesco966@gmail.com",
    "vitantoniopaparella@gmail.com",
    "lorenzopapperini@gmail.com",
    "file.partipilo@gmail.com",
    "npompili@gmail.com",
    "sarlinicola7@gmail.com",
    "danielesilvestre160496@gmail.com",
    "hammaslima@gmail.com",
    "morgan.tarquini@gmail.com",
    "zefiro.turchetta@gmail.com",
    "katy.91560@gmail.com",
    "fahadalam693@gmail.com"];
const form = document.querySelector("#form > p.normal");
const formEach = document.querySelector("#form > p.each");
const formInclude = document.querySelector("#form > p.include");
function checkMail () {
    const userMail = document.getElementById("mail").value;
    let isIn = false;
    if (!userMail){
        alert ("Dammi una email da controllare");
        return 1;
    }
    // Include
    formInclude.innerHTML = `La mail ${mails.includes(userMail.toLowerCase())? "" : " non " } è presente nelle mail con accesso alla cartella condivisa / Metodo .includes() della classe array`;
    // For each e return
    mails.forEach(cMail => {
        if (cMail.toLowerCase() === userMail.toLowerCase() ) {
            isIn = true;
        }
    });
    formEach.innerHTML = `La mail ${isIn ? "" : " non " } è presente nelle mail con accesso alla cartella condivisa / for each`;
    // For tradizionale 
    for (let i = 0 ; i < mails.length ; i++) {
        if (mails[i].toLowerCase() === userMail.toLowerCase()) {
            form.innerHTML = "La mail è presente nella mail con accesso alla cartella condivisa / for tradizionale";
            return 0;
        }
    }
    form.innerHTML = "La mail non è presente nella mail con accesso alla cartella condivisa / for tradizionale";

}