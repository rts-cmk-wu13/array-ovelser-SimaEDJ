document.addEventListener("DOMContentLoaded", function () {

    // --- Løs opgaverne herunder ---

    // Opgave 1.

    // Opretter et array med forskellige tal
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21];

    // Definerer en grænseværdi (kun tal større end denne værdi vil blive returneret)
    let limit = 20;

    // Kalder funktionen 'biggerNumbers' med numbersArray og limit som argumenter
    // Resultatet gemmes i variablen 'result'
    let result = biggerNumbers(numbersArray, limit);

    // Definerer funktionen 'biggerNumbers' der filtrerer tallene i arrayet
    function biggerNumbers(numbersArray, limit) {
        return numbersArray.filter(function (num) {
            // Kun tal der er større end 'limit' bliver inkluderet i det nye array
            return num > limit;
        });
    }
    // Udskriver resultatet til konsollen
    console.log(result);

    // Opg. 2.

    // Opretter et array med navnene på katte
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];

    // Tilføjer en ny kat "Sniffles" til slutningen af arrayet
    catsArray.push("Sniffles");

    // Udskriver hele arrayet til konsollen, inklusiv den nytilføjede kat "Sniffles"
    console.log(catsArray);

    // Opg. 3.

    // Opg. 3, a)

    // Opretter et array med navne på hunde
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];

    // Tjekker om "Trixie" findes i dogsArray
    if (dogsArray.includes("Trixie")) {
        // Hvis "Trixie" findes i arrayet, udskrives "True"
        console.log("True");
    } else {
        // Hvis "Trixie" ikke findes i arrayet, udskrives "False"
        console.log("False");
    }

    // Opg. 3, b)

    // Tjekker om "Baxter" findes i dogsArray
    if (dogsArray.includes("Baxter")) {
        // Hvis "Baxter" findes i arrayet, udskrives "True"
        console.log("True");
    } else {
        // Hvis "Baxter" ikke findes i arrayet, udskrives "False"
        console.log("False");
    }

    // Opg. 4.

    //Opg. 4, a, b)

    // Funktion der finder en kat ved navn
    function findCat(catName) {
        // Bruger en almindelig funktion i .find()
        let foundCat = catsArray.find(function (cat) {
            return cat === catName;  // Tjekker om katte-navnet stemmer overens
        });
        console.log(foundCat);  // Udskriver enten kattens navn eller undefined
    }
    // Kalder funktionen med et navn
    findCat("Bagheera");
    findCat("Salem");

    // Opg. 5.

    // Bruger .map() til at oprette et nyt array, hvor hvert tal i numbersArray er ganget med 3
    let multipliedArray = numbersArray.map(function (num) {
        return num * 3;  // Ganger hvert tal med 3
    });

    // Udskriver det nye array i konsollen
    console.log(multipliedArray);

    // Opg. 6.

    // Bruger .join() til at kombinere alle elementerne i arrayet til én enkelt streng uden nogen separator (ingen mellemrum eller komma)
    let dogsString = dogsArray.join('');  // Tomt string som separator betyder, at elementerne sættes sammen uden mellemrum

    // Udskriver den samlede streng i konsollen
    console.log(dogsString);

    // Opg. 7.

    // Opretter et array med forskellige frugter
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"];

    // Bruger .indexOf() til at finde indexet af "Mango" i fruitsArray
    let mangoIndex = fruitsArray.indexOf("Mango");

    // Bruger .indexOf() til at finde indexet af "Blåbær" i fruitsArray
    let blåbærIndex = fruitsArray.indexOf("Blåbær");

    // Udskriver indexet i konsollen
    console.log(mangoIndex);
    console.log(blåbærIndex);

}) // ends DOMContentLoaded