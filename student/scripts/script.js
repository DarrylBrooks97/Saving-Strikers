function openMenu(){
  var navBar = document.getElementById("nav");

  if(navBar.style.display === 'none'){
    navBar.style.display = 'block';
  }else{
    navBar.style.display = 'none';
  }
}

function darkMode(){
  var docBody = document.body;
  docBody.classList.toggle('dark');
  docBody.classList.toggle('text-darkmode');
  if(docBody.className === 'dark text-darkmode'){
    document.getElementById('dark').innerHTML = "Turn Dark Mode Off";
  }else{
    console.log(docBody.className);
    document.getElementById('dark').innerHTML = "Turn Dark Mode On";
  }
}
