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
    
    users.forEach((element)=>{
        let row =`  <tr>
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
                        <td><a><img src="./icons/trash.svg" alt="trash_can"></a></td>
                    </tr>`
        tbody.innerHTML = tbody.innerHTML+row ;

    })
}