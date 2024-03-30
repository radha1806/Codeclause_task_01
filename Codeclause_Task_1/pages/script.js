let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
  let textarea=document.getElementById("txt");
  const text=textarea.value.trim();
  let cmtdiv=document.querySelector(".cmnt");
  if(text!== ''){
    const h3=document.createElement('h3');
    h3.textContent=text;
    cmtdiv.appendChild(h3);
    textarea.value='';
  }
  else{
    alert('Please enter some text in the textarea');
  }
});

