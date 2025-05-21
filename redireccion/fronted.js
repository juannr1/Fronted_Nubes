 

  // Consulta al backend para obtener precio, icono y servicio del div

document.addEventListener("DOMContentLoaded", () => {
  
  const loaderContainer = document.getElementById("loader-container");
  
  
  
  loaderContainer.style.display = "flex";
  document.body.style.overflow = "hidden"; 
  
  let peticionesCompletadas = 0;
  const totalPeticiones = 3;
  
  
  function verificarPeticiones() {
    peticionesCompletadas++;
    console.log(`Petición completada. Total: ${peticionesCompletadas}/${totalPeticiones}`);
    
    
    if (peticionesCompletadas === totalPeticiones) {
      
  
      
      
      setTimeout(() => {
        loaderContainer.style.display = "none";
        document.body.style.overflow = "auto"; // Restaurar scroll
        console.log("Todas las peticiones completadas - Loader ocultado");
      }, 500);
    }
  }




  // modulo 1

  axios.get('http://localhost:3000/servicios/1')
  .then(response => {
      
    const valores_Convertidos = response.data;
    document.getElementById("plan1").innerHTML = valores_Convertidos.Plan;
    document.getElementById("resultado").innerHTML = valores_Convertidos.Precio;
    document.getElementById("icono1").innerHTML = valores_Convertidos.Icono;
    document.getElementById("Texto").innerHTML = valores_Convertidos.Servicio;


    // manejar respuesta exitosa
    console.log("success");

  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    verificarPeticiones();
  });


  //modulo 2

    axios.get('http://localhost:3000/servicios/2')
  .then(response => {
      
    const valores_Convertidos = response.data;
    document.getElementById("plan2").innerHTML = valores_Convertidos.Plan;
    document.getElementById("resultado2").innerHTML = valores_Convertidos.Precio;
    document.getElementById("icono2").innerHTML = valores_Convertidos.Icono;
    document.getElementById("Texto2").innerHTML = valores_Convertidos.Servicio;


    // manejar respuesta exitosa
    console.log("success");

  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    verificarPeticiones();
  });


  //modulo 3

    axios.get('http://localhost:3000/servicios/3')
    .then(response => {
      
    const valores_Convertidos = response.data;
    document.getElementById("plan3").innerHTML = valores_Convertidos.Plan;
    document.getElementById("resultado3").innerHTML = valores_Convertidos.Precio;
    document.getElementById("icono3").innerHTML = valores_Convertidos.Icono;
    document.getElementById("Texto3").innerHTML = valores_Convertidos.Servicio;


    // manejar respuesta exitosa
    console.log("success");

  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    verificarPeticiones();
  });

  
});