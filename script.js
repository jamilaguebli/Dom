document.getElementById("plus").addEventListener('click',function(){
    var num = this.nextElementSibling.innerHTML
    num = num*1 + 1
    this.nextElementSibling.innerHTML= num ;
    
 })
 document.getElementById("minus").addEventListener("click",function(){
    var num =  this.previousElementSibling.innerHTML
    console.log(num)
     if ( num >0){
        num--
     }
     this.previousElementSibling.innerHTML = num;
 })