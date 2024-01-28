const body = document.querySelector('body');
const button = document.querySelector('.BTN button');
const h1 = document.querySelector('h1');
const p = document.querySelector('p')



button.addEventListener('click',(e)=>{
e.preventDefault();


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = false;


rec.onresult = (e) =>{

    const colors = [
   'red',
   'pink',
  'orange',
    'black',
    'white',
    'yellow',
    'tomato',
    'blue'
    ];

for(let i = e.resultIndex;i<e.results.length;i++){
   const color =  e.results[i][0].transcript.toLowerCase().trim();

   if(colors.includes(color)){
    body.style.backgroundColor = `${color}`
   }
  else{
    Swal.fire({
        title: "Invalid Color",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
   }


console.log(color)

}
   
}

rec.start();


})

