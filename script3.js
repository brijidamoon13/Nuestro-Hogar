console.log("Hello world and all who inhabit it")

let spanish= document.querySelector('#spanish')
let about1= document.querySelector('#about1')
let about2= document.querySelector('#about2')
let about3= document.querySelector('#about3')
let about4= document.querySelector('#about4')


spanish.addEventListener('click', () => {
    about1.innerHTML="La organización trata de ayudar a los inmigrantes con oportunidades laborales."
    about2.innerHTML="Ayudamos a personas de todas las edades y sexo. Proporcionamos un hogar con comida, agua y ropa."
    about3.innerHTML="Los inmigrantes pueden permanecer durante dos años (máximo) mientras trabajan, hasta que puedan encontrar su propio hogar."
    about4.innerHTML="¡Las personas pueden ser voluntarios y donar!"
})