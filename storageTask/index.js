

let myFormEl = document.getElementById("myForm");

let nameEl = document.getElementById('name');
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let phnumberEl = document.getElementById("phnumber");
let numberErrMsgEl = document.getElementById("numberErrMsg");

let PasswordEl = document.getElementById("Password");
let PasswordErrMsgEl = document.getElementById("passwordErrMsg");

let confirmPasswordEl = document.getElementById("confirmpassword");
let confirmPasswordErrMsgEl = document.getElementById("confirmpasswordErrMsg");

let buttonEl = document.getElementById("button");

// validating the username

function validateName() {
    let name = nameEl.value;

    if (name.length == 0 || name.length < 3) {
        nameErrMsgEl.innerHTML = "Required*"
        buttonEl.disabled = true;
        return false;
    }
    nameErrMsgEl.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>'
    buttonEl.disabled = false;
    return true;
}

let numPattern = /[0-9]/g;
nameEl.addEventListener("blur", validateName);

function validatenumber() {
    let phnum = phnumberEl.value;
    if (phnum.match(numPattern)) {
        numberErrMsgEl.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>'
        buttonEl.disabled = false;
        return true;
    } else {
        numberErrMsgEl.innerHTML = "please enter number only "
        buttonEl.disabled = true;
        return false;
    }

    // if (phnum.length !== 10) {
    //     numberErrMsgEl.innerHTML = "number should be 10 digit"
    //     buttonEl.disabled = true;
    //     return false;
    // }


}

phnumberEl.addEventListener("blur", validatenumber);

let pwd;
function validatepassword() {
    pwd = PasswordEl.value;
    if (pwd.length !== 6 || pwd.length < 6) {
        PasswordErrMsgEl.innerHTML = "password must be 6 digit"
        buttonEl.disabled = true;
        return false;
    }
    PasswordErrMsgEl.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>'
    buttonEl.disabled = false;
    return true;
}

PasswordEl.addEventListener("blur", validatepassword);

function validateconfimpassword() {
    let confirmpwd = confirmPasswordEl.value;

    if (confirmpwd != pwd) {
        confirmPasswordErrMsgEl.innerHTML = "confirmpassword and password should be match"
        buttonEl.disabled = true;
        return false;
    }
    confirmPasswordErrMsgEl.innerHTML = '<i class="fa-solid fa-thumbs-up"></i>'
    buttonEl.disabled = false;
    return true;
}

confirmPasswordEl.addEventListener("blur", validateconfimpassword);



function validateemail() {
    let email = emailEl.value;
    if (email === "") {
        emailErrMsgEl.innerHTML = "Required**";
        buttonEl.disabled = true;
        return false;
    } else {
        emailErrMsgEl.innerHTML = "";
        buttonEl.disabled = false;
        return true;
    }
}
emailEl.addEventListener("blur", validateName);



const form = document.querySelector("button");

// getting the data from localStorage and saving in the table

let array = [];
if (localStorage.getItem("kanth")!== null) {
    let getdata = localStorage.getItem("kanth");
    let userdata = JSON.parse(getdata);
    array=[...userdata]
    let tbody = document.getElementById("tbody");
    userdata.map((element, index) => {
        // console.log(element, index);
         let row1 = tbody.insertRow(0);
         let cell = row1.insertCell(0);
         cell.innerHTML = element.name;
         let cell1 = row1.insertCell(1);
         cell1.innerHTML = element.email;
         let cell2 = row1.insertCell(2);
         cell2.innerHTML = element.phnumber;
         let cell3 = row1.insertCell(3);
         cell3.innerHTML = element.password;
         let cell4 = row1.insertCell(4);
         cell4.innerHTML = element.confirmpassword;
         let cell5 = row1.insertCell(5);
         cell5.innerHTML = `<div class="row">
         <div class ="col-6">
         <button class="btn btn-danger " id='del${index}  '>del</button>
          </div>
         <div class ="col-6">
         <button class="btn btn-primary" id='"edit${index} '>edit</button>
         </div>
         </div>`;
     //model box
             row1.setAttribute("data-target","#exampleModalCenter");
         row1.setAttribute("data-toggle","modal");

         row1.addEventListener('click',()=>{
            document.getElementById('tb').innerHTML=`Name:${element.name}`
         })
//delete row
row1.addEventListener('click',()=>{
           let rowIn = this.rowIndex -1;
 console.log(rowIn);
});
    // for (let i = 0; i < rows.length; i++) {
   
    //     let rowval= tbody.rows[i];
    //     rowval.addEventListener("click",  ()=>{
    //       console.log(rowval);

    //        }); 
    //  }
//      })
     })
}
// form.addEventListener("click", () => {
//     // e.preventDefault();
//     validateName();
//     validateemail();
//     validatenumber();
//     validateconfimpassword();
//     validatepassword()
//     let obj = {
//         name: nameEl.value,
//         email: emailEl.value,
//         phnumber: phnumberEl.value,
//         password: PasswordEl.value,
//         confirmpassword: confirmPasswordEl.value,
//     }

//     // reset the form 
//     nameEl.value = ""
//     emailEl.value = ""
//     phnumberEl.value = ""
//     PasswordEl.value = ""
//     confirmPasswordEl.value = ""


//     console.log(obj);
//     array.push(obj);
//     console.log(array);

//     localStorage.setItem("kanth", JSON.stringify(array));
//     let getdata = localStorage.getItem("kanth");
//     let userdata = JSON.parse(getdata);
//     tbody.innerHTML = "";
//      userdata.map((element, index) => {
//         // console.log(element, index);
//          let tbody = document.getElementById("tbody");
//          let row1 = tbody.insertRow(0);
//          let cell = row1.insertCell(0);
//          cell.innerHTML = element.name;
//          let cell1 = row1.insertCell(1);
//          cell1.innerHTML = element.email;
//          let cell2 = row1.insertCell(2);
//          cell2.innerHTML = element.phnumber;
//          let cell3 = row1.insertCell(3);
//          cell3.innerHTML = element.password;
//          let cell4 = row1.insertCell(4);
//          cell4.innerHTML = element.confirmpassword;
//          let cell5 = row1.insertCell(5);
//          cell5.innerHTML = `<div class="row">
//          <div class ="col-6">
//          <button class="btn btn-danger del"  ${onclick="del()"}>del</button>
//          </div>
        
//          </div>`;
//      })



// });


// function del(){
//     console.log("clicked");
//     for (let i = 0; i < rows.length; i++) {
   
//         let rowval= tbody.rows[i];
//         rowval.addEventListener("click",  ()=>{
//             console.log(rowval.innerHTML);
//            let rowIn = this.rowIndex -1;
         
//                tbody.deleteRow(rowIn)
//            }) 
//      }
//     }

