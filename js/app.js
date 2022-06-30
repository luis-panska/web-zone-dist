const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlace = document.querySelector('.navegacion a');

document.addEventListener('DOMContentLoaded',()=>{
    mostraMenu();
    cerrarMenu();


});

function mostraMenu(){
    hamburguesa.addEventListener('click',()=>{
        navegacion.classList.toggle('ocultar');
    } );

}
function cerrarMenu(){
    enlacea.forEach(enlace => {
        enlace.addEventListener('click',(e)=>{

            if(e.target.tagName === 'A'){
                
            }
        })
        
    });
}
