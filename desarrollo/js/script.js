


document.addEventListener ("DOMContentLoaded", function(event){

    new Swiper('.fotos-top', {
        preLoadImages: false,
        loop: true,
        lazy:{
            LoadPrevNext:true,
        },
        autoplay: {
            delay:5000,
        },
        speed:1000,
        effect: 'fade',


    });

      


    var hbtn = document.querySelector('#header_icon');
    if(hbtn){

        hbtn.addEventListener('click' , e => {
                e.preventDefault();
                let body = document.querySelector('body');
                hbtn.classList.toggle('is-active');
                body.classList.toggle('con-navegacion')


        })
    };


    var sombra = document.querySelector('.sombra');
    if(sombra){
        sombra.addEventListener('click' , evento => {
            evento.preventDefault();
            let body = document.querySelector('body');
            hbtn.classList.toggle('is-active');
            body.classList.toggle('con-navegacion')
            
        })
    }


})


let mnu = document.querySelectorAll(".menuR > li.desplegar-submenu > ul");
	//console.log(mnu)
	mnu.forEach(function(list) {
		let padre = list.closest('.menu-item')
		padre.addEventListener('click',() => {
			list.classList.toggle('activo')
		})
		
	})


                //barra de busqueda



    //ejecutando funciones
    
    document.getElementById("icono-busqueda").addEventListener("click", mostrar_buscador);
    document.getElementById("sombra-busqueda").addEventListener("click", ocultar_buscador);




    //variables 
    
    
var ctn_barra_busqueda =  document.getElementById("ctn-barra-busqueda");
var sombra = document.getElementById("sombra-busqueda"); 
var inputBuscador = document.getElementById("inputBuscador");
var caja_recomendaciones = document.getElementById("caja-recomendaciones");


 //funcion para mostrar el buscador


function mostrar_buscador (){

    ctn_barra_busqueda.style.top= "80px";
    sombra.style.display = "block";
    inputBuscador.focus();


}

 //funcion para ocultar el buscador

function ocultar_buscador(){

    ctn_barra_busqueda.style.top ="-10px"
    sombra.style.display = "none";
    inputBuscador.value = "";

}