// -------------- OPEN MODAL --------------

let form = document.getElementById('form')
let blur = document.querySelector(".container");

const show = () => {
    if (form.classList.contains("invisible")) {
      form.classList.remove("invisible");
      form.classList.add("form");
      blur.classList.add("blur");
    }
};

// -------------- fetch data --------------

let users = [
    {
      id: "123456789",
      createdDate: "2021-01-06T00:00:00.000Z",
      status: "En validation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
    {
      id: "987654321",
      createdDate: "2021-07-25T00:00:00.000Z",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
    {
      id: "852963741",
      createdDate: "2021-09-15T00:00:00.000Z",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    }
]

const fetch = () =>{
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    users.forEach((element)=>{
        tbody.innerHTML +=`  <tr>
                        <td>${element.id}</td>
                        <td>${new Date(element.createdDate).toLocaleDateString()}</td>
                        ${  element.status === "Validé"
                            ?  `<td>
                                    <div class="valide">${element.status}</div>
                                </td>`
                            : element.status === "En validation"
                            ?  `<td>
                                    <div class="on-validation">${element.status}</div>
                                </td>`
                            : element.status === "Rejeté"
                            ?  `<td>
                                    <div class="rejected">${element.status}</div>
                                </td>`
                            :  `<td>
                                    <div class="Rejeté">${element.status}</div>
                                </td>`
                        }   
                        <td>${element.firstName}</td>
                        <td>${element.lastName}</td>
                        <td>${element.userName}</td>
                        <td>${element.registrationNumber}</td>
                        <td><img class='delete' src="./icons/trash.svg" alt="trash_can"></td>
                    </tr>`

    });
}

// -------------- post data --------------

const post = () =>{
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('Prenom').value;
    let etat = document.getElementById('Etat').value;
    let nomUtilisateur = document.getElementById('nomUtilisateur').value;
    let date = document.getElementById('date').value;
    let matricule = document.getElementById('matricule').value;
    let id = Math.floor((Math.random()*1000000)+1);

    users.push({

        id: id,
        createdDate:date,
        status:etat,
        firstName: nom,
        lastName: prenom,
        userName: nomUtilisateur,
        registrationNumber: matricule

    });

    if (form.classList.contains("form")) {
        form.classList.remove("form");
        form.classList.add("invisible");
        blur.classList.remove("blur");
    }
    fetch();
}

// -------------- delete row --------------

let tbody  = document.querySelector('tbody');
tbody.addEventListener('click',(e)=>{

    if(e.target.classList.contains('delete')){

        if (window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")){
    
            e.target.parentElement.parentElement.remove();

        }

    }

})
