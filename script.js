/* seçilen koltuklar için ücret hesaplama
*/

const container = document.querySelector('.container'); /*ilk olarak elemanları kapsayan container seçelim  */
const sayi = document.getElementById('sayi');
const miktar = document.getElementById('miktar');
const select = document.getElementById('film');
const kolonlar = document.querySelectorAll('.kolon:not(.reserved)');

getFromLocalStorage(); //bilgileri alıp üzerine dağıtma işlemi yapılır
hesaplama();
/* e parametresi hangi elemana tıkladık o bilgiyi bize verir */
container.addEventListener('click', function(e){

 if(e.target.classList.contains('kolon') && ! e.target.classList.contains('reserved')){ /* ekranı cıkarmıs olduk */
  e.target.classList.toggle('selected');
 
 
 /*  console.log(e.target);e. target dediğimizde hangi elemana tıkladıysak o elemanın bilgilerini verecek. */

 hesaplama()



 }
});

select.addEventListener('change', function(e){
hesaplama()
});

function hesaplama(){

    const selectedkolonlar = container.querySelectorAll('.kolon.selected');
    const selectedkolonArr =[];
    const kolonArr = [];

    selectedkolonArr.forEach(function(kolon){
        selectedkolonArr.push(kolon);
    });

    kolonlar.forEach(function(kolon){
       kolonArr.push(kolon);
    });
    /* index listesinin oluşturma : */
    
    let selectedkolonindex = selectedkolonArr.map(function(kolon){
          return kolonArr.indexOf(kolon);
    });

    

    let selectedkoltuksayisi = selectedkolonlar.length;
   sayi.innerText=selectedkoltuksayisi;
   miktar.innerText=selectedkoltuksayisi*select.value;

   saveToLocalStorage(selectedkolonindex);

}
function getFromLocalStorage(){
   const selectedkolonlar = JSON.parse(localStorage.getItem('selectedkolonlar'));


if(selectedkolonlar !=null && selectedkolonlar.length>0 ){

    kolonlar.forEach(function(kolon,index){
       if(selectedkolonlar.indexOf(index)>-1){
           saveToLocalStorage.classList.add('selected');
       }
    });
}


   const selectedfilm = localStorage.getItem('selectedfilm');

   if(selectedfilm !=null){
       select.selectedindex = selectedfilm; // film 2 yi seçtiysek uygulamayı yenilediğimiz anda da film 2 de kalmasını sağladık.
   }  
}

function saveToLocalStorage(index){
    localStorage.setItem('selectedkolonlar', JSON.stringify(index));
    localStorage.setItem('selectedfilm',select.selectedindex);
}
