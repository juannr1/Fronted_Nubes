 

  // Consulta al backend para obtener precio, icono y servicio del div

  // modulo 1

   axios.get('http://localhost:3000/planes/1')
  .then(response => {
      
    const valores_Convertidos = response.data;
    document.getElementById("plan1").innerHTML = valores_Convertidos.Plan;


    // manejar respuesta exitosa
    console.log("success");

  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });



    axios.get('http://localhost:3000/precio/1')
  .then(response => {
      
    const valores_Convertidos = response.data;
    document.getElementById("resultado").textContent = valores_Convertidos.Precio;


    // manejar respuesta exitosa
    console.log("success");

  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });




  axios.get('http://localhost:3000/icons/1')
  .then(response => {
      
    const valores_Convertidos = response.data;
    document.getElementById("icono1").innerHTML = valores_Convertidos.Icono;


    // manejar respuesta exitosa
    console.log("success");

  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });


  axios.get('http://localhost:3000/servicios/1')
  .then(response => {
      
    const valores_Convertidos = response.data;
    document.getElementById("Texto").innerHTML = valores_Convertidos.Servicio;


    // manejar respuesta exitosa
    console.log("success");

  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });


  //modulo 2


  
   axios.get('http://localhost:3000/planes/2')
  .then(response => {
      
    const valores_Convertidos = response.data;
    document.getElementById("plan2").innerHTML = valores_Convertidos.Plan;


    // manejar respuesta exitosa
    console.log("success");

  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });


  axios.get('http://localhost:3000/precio/2')
  .then(response => {
      
    const valores_Convertidos = response.data;
    document.getElementById("resultado2").textContent = valores_Convertidos.Precio;


    // manejar respuesta exitosa
    console.log("success");

  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });


   axios.get('http://localhost:3000/icons/2')
  .then(response => {
      
    const valores_Convertidos = response.data;
    document.getElementById("icono2").innerHTML = valores_Convertidos.Icono;


    // manejar respuesta exitosa
    console.log("success");

  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });


   axios.get('http://localhost:3000/servicios/2')
  .then(response => {
      
    const valores_Convertidos = response.data;
    document.getElementById("Texto2").innerHTML = valores_Convertidos.Servicio;


    // manejar respuesta exitosa
    console.log("success");

  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });


  //modulo 3




     axios.get('http://localhost:3000/planes/3')
  .then(response => {
      
    const valores_Convertidos = response.data;
    document.getElementById("plan3").innerHTML = valores_Convertidos.Plan;


    // manejar respuesta exitosa
    console.log("success");

  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });





  axios.get('http://localhost:3000/precio/3')
  .then(response => {
      
    const valores_Convertidos = response.data;
    document.getElementById("resultado3").textContent = valores_Convertidos.Precio;


    // manejar respuesta exitosa
    console.log("success");

  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });


   axios.get('http://localhost:3000/icons/3')
  .then(response => {
      
    
    const valores_Convertidos = response.data;
    document.getElementById("icono3").innerHTML = valores_Convertidos.Icono;


    // manejar respuesta exitosa
    console.log("success");

  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });

   axios.get('http://localhost:3000/servicios/3')
  .then(response => {
      
    const valores_Convertidos = response.data;
    document.getElementById("Texto3").innerHTML = valores_Convertidos.Servicio;


    // manejar respuesta exitosa
    console.log("success");

  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });
