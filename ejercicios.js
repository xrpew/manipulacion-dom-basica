const suscipriones = {
  free: "Solo puedes tomar los cursos gratis",
  basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
  expertplus:
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
};

function ventajasDePlatzi(resp_user){
  suscipriones[resp_user]
    ? console.log(suscipriones[resp_user])
    : console.warn("Lo siento, no te entendí");
}
//.....................................//

let answer = prompt("¿Cuánto es 2 + 2 ?: ");
while (answer != 4) {
  answer = prompt("¿Cuánto es 2 + 2 ?: ");
}
alert("Congratulations!");

function showProps(obj) {
  for (var i in obj) {
    console.log(`${obj[i]}`);
  }
}
function showProps(obj) {
  for (let i in obj) {
    console.log(`${obj[i]}`);
  }
}