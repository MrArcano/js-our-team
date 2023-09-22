// - creare un array di oggetti {nome, ruolo, foto}
const team = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg"
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg"
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg"
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg"
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg"
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg"
  },
];

for (const member of team) {
  // - console.log() dei dati per ogni membro
  console.log("Nome: ",member.nome);
  console.log("Ruolo: ",member.ruolo);
  console.log("Foto: ",member.foto);

  // - stampare nel DOM
  const output = document.querySelector(".container-card");
  // - creo la mia card, con immagine e il resto dei dati
  output.innerHTML += `
  <div class="card text-center shadow m-3 b-radius-0" style="width: 18rem;">
    <img src="img/${member.foto}" class="card-img-top b-radius-0" alt="${member.foto}">
    <div class="card-body">
      <h5 class="card-title">${member.nome}</h5>
      <p class="card-text">${member.ruolo}</p>
    </div>
  </div>
  `;
}