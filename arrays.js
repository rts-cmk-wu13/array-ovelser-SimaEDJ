document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]

    // --- Løs opgaverne herunder ---

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

}) // ends DOMContentLoaded