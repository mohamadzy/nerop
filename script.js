
let opeinput=document.getElementById("operatorinput")
const btncalc=document.querySelector(".btncalc")
const resultnumber=document.querySelector("p")
const getnuminput=document.getElementById("getnum")
let opvalue=''


opeinput.addEventListener("change",(e)=>{
 opvalue=e.target.value
})
console.log(opvalue)

let numberarr=[]



btncalc.addEventListener("click",()=>{
    const calc=(operator)=>{
    
let result;
         switch (operator){
                case "+":
                   result= sumhandel()
                    break;
                    case "-":
                        result= minhandel(numberarr[0]);
                        break;
                        
                        
                        case "*":
                         result=   multhandel(numberarr[0]);
                            break;
                            
                            case "/":
                            result=   divhandel(numberarr[0])
                                break;
                                
                                default :
                                alert("plaese enter a calculate operator")
                                break;
                            } 
                       
                     resultnumber.innerText=`result : ${result ?? "enter for calc"}`
                             
                        }
                  
          


           calc(opvalue)

           
            opeinput.value=""
        })
            
const minhandel=(firstnum)=>{
    let min=firstnum
   for(let i=1 ; i<numberarr.length; i++){
       min =min-numberarr[i]
       
   }
   return min
}

const sumhandel=()=>{
  let sum=0
  for (const num of numberarr) {
    sum+=num
  }

 return sum
}


const divhandel=(firstnum)=>{
    let findzero=numberarr.some(item=> item==0)
    
   if (findzero) {
       alert("cannot be enter 0 for  number")
       
  } 
  let div=firstnum 
  for (let i = 1; i < numberarr.length; i++) {
    div /=numberarr[i]
   
  } 

   return div
   
}
const multhandel=()=>{
      let mult=1
      for (let i = 0; i < numberarr.length; i++) {
         mult*= numberarr[i];
        
      }
       return mult
}














