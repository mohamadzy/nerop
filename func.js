let editbox = document.querySelector(".edit");
let userbox = document.querySelector(".userbox");
let userid=null
let nameedit=document.querySelector(".nameedit")
let lastnameedit=document.querySelector(".lastnameedit")
let passwordidet=document.querySelector(".passwordidet")

function showeditbox(idnum) {
  userid=idnum
  editbox.classList.add("visible");
}

function usershow(res) {  
  let userdata = Object.entries(res);
  userbox.innerHTML=""
  userdata.forEach((item) => { 
    userbox.insertAdjacentHTML(
      "beforeend",`<div class="user"><h3 class="username"> ${item[1].name}   ${item[1].lastname} 
        </h3><span class="userpassword"> ${item[1].password}  </span> <div class="buttons">
        <button class="delete" onclick="delbtn('${item[0]}')" >delete</button><button  class="editbtn"
         onclick="showeditbox('${item[0]}')">edit</button> </div> </div>`)
  });
}

async function delbtn(id){
   id
     await fetch(`https://site-test-b40eb-default-rtdb.firebaseio.com/users/${id}.json`,{
       method:"DELETE"
   })
   
  getdata()
} 


window.addEventListener("load",()=>{
    getdata()
})

function getdata(){
  fetch("https://site-test-b40eb-default-rtdb.firebaseio.com/users.json")
    .then((res) => {
      return res.json();
    })
    .then(usershow)
    .catch(() => {
        console.log("error")
    })
    
};

 
async function editfunc(){
  let user={
    name:nameedit.value,
    lastname:lastnameedit.value,
    password:passwordidet.value
  }
  await fetch(`https://site-test-b40eb-default-rtdb.firebaseio.com/users/${userid}.json`,{
  method:"PUT",
  headers:{"content-type":"application/json"},
  body: JSON.stringify(user)

  }) .then(res => console.log(res))
  getdata()
  console.log(userid)
  console.log(user)
    editbox.classList.remove("visible")
}
 