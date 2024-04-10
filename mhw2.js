function Ricerca()
{
  const text = document.querySelector('#InputBar');
  text.value = '';
}

function NoRicerca()
{
  const text = document.querySelector('#InputBar');
  if(text.value.length == 0)
  {
    text.value = 'Cerca nel cosmo';
  }
}

const text = document.querySelector("#InputBar");

text.addEventListener("click", Ricerca);

text.addEventListener("blur", NoRicerca);





function ApriMenu(){
    isVisible1 = !isVisible1;
  
    if(isVisible1){
      modalView.classList.remove('hidden');
    }else{
      modalView.classList.add('hidden');
    }
  }
  
  let isVisible1 = false;
  const apri = document.querySelector("#SpazioMenu");
  const modalView = document.querySelector('#modal-view');
  apri.addEventListener("click", ApriMenu);

