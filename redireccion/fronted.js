 

  // Consulta al backend para obtener precio, icono y servicio del div

document.addEventListener("DOMContentLoaded", () => {
  
  const loaderContainer = document.getElementById("loader-container");
  
  
  
  loaderContainer.style.display = "flex";
  document.body.style.overflow = "hidden"; 
  
  let peticionesCompletadas = 0;
  const totalPeticiones = 1;
  
  
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

  axios.get('http://localhost:3000/servicios')
  .then(response => {
      
    const valores_Convertidos = response.data[0];
    document.getElementById("plan1").innerHTML = valores_Convertidos.plan;
    document.getElementById("resultado").innerHTML = valores_Convertidos.precio;
    document.getElementById("icono1").innerHTML = valores_Convertidos.icono;
    document.getElementById("Texto").innerHTML = valores_Convertidos.servicios;
    document.getElementById("plan2").innerHTML = valores_Convertidos.plan2;
    document.getElementById("resultado2").innerHTML = valores_Convertidos.precio2;
    document.getElementById("icono2").innerHTML = valores_Convertidos.icono2;
    document.getElementById("Texto2").innerHTML = valores_Convertidos.servicios2;
    document.getElementById("plan3").innerHTML = valores_Convertidos.plan3;
    document.getElementById("resultado3").innerHTML = valores_Convertidos.precio3;
    document.getElementById("icono3").innerHTML = valores_Convertidos.icono3;
    document.getElementById("Texto3").innerHTML = valores_Convertidos.servicios3;


    // manejar respuesta exitosa
    console.log(valores_Convertidos);

  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    verificarPeticiones();
  });



});


// Card NUMERO 1 From Especialidades <==================//

document.getElementById("boton1").addEventListener("click", (e) => {
    e.preventDefault();

    const loader = document.getElementById("loaderContent2");
    const panel = document.getElementById("masServiciosPanel");
    const navbar = document.querySelector(".navbar");

    // Mostrar loader y ocultar navbar
    loader.style.display = "flex";
    if (navbar) navbar.style.display = "none";

    // Lógica para controlar cuándo terminar
    let peticionesCompletadas = 0;
    const totalPeticiones = 1;

    function verificarPeticiones() {
        peticionesCompletadas++;
        console.log(`Petición completada. Total: ${peticionesCompletadas}/${totalPeticiones}`);

        if (peticionesCompletadas === totalPeticiones) {
            setTimeout(() => {
                loader.style.display = "none";
                panel.style.display = "block";
                document.body.classList.add("modal-open");
                console.log("Todas las peticiones completadas - Loader ocultado");
            }, 2000);
        }
    }

    // Llamada al servidor
    axios.get('http://localhost:3000/especialidades')
        .then(response => {
            const valores_Convertidos = response.data[0];
            document.getElementById("insert1").innerHTML = valores_Convertidos.card1_1;
            document.getElementById("insert2").innerHTML = valores_Convertidos.card2_1;
            document.getElementById("insert3").innerHTML = valores_Convertidos.card3_1;
            verificarPeticiones();
        })
        .catch(error => {
            console.error("Error al obtener datos:", error);
            loader.style.display = "none";
        });

    // Función para cerrar el modal
    function cerrarModal() {
        panel.style.display = "none";
        if (navbar) navbar.style.display = "block";
        document.body.classList.remove("modal-open");
    }

    // Cerrar al hacer click fuera del contenido
    panel.addEventListener("click", function (cerrar) {
        if (cerrar.target === this) {
            cerrarModal();
        }
    });

    // Cerrar con tecla Escape
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && panel.style.display === "block") {
            cerrarModal();
        }
    });
});











document.getElementById("boton2").addEventListener("click", (e) => {
            e.preventDefault();
            
            const loader = document.getElementById("loaderContent2");
            const panel = document.getElementById("masServiciosPanel2");
            // Buscar el navbar por su clase o selector correcto
            const navbar = document.querySelector(".navbar");  

            // Mostrar loader
            loader.style.display = "flex";
            
            
            if (navbar) {
                navbar.style.display = "none";
            }

            setTimeout(() => {
                
                loader.style.display = "none";
                panel.style.display = "block";
                
                // Prevenir scroll del body
                document.body.classList.add("modal-open");
            }, 2000);
        });

        // Función para cerrar modal
        function cerrarModal2() {
            const panel = document.getElementById("masServiciosPanel2");
            const navbar = document.querySelector(".navbar"); // CORREGIDO: Mismo selector
            
            panel.style.display = "none";
            
            // CORREGIDO: Restaurar navbar al cerrar
            if (navbar) {
                navbar.style.display = "block";
            }
            
            // Restaurar scroll del body
            document.body.classList.remove("modal-open");
        }

        // Cerrar modal al hacer click fuera del contenido
        document.getElementById("masServiciosPanel2").addEventListener("click", function(cerrar) {
            if (cerrar.target === this) {
                cerrarModal2();
            }
        });

        // Cerrar modal con tecla Escape
        document.addEventListener("keydown", function(e) {
            if (e.key === "Escape") {
                const panel = document.getElementById("masServiciosPanel2");
                if (panel.style.display === "block") {
                    cerrarModal2();
                }
            }
        });

















        document.getElementById("boton3").addEventListener("click", (e) => {
            e.preventDefault();
            
            const loader = document.getElementById("loaderContent2");
            const panel = document.getElementById("masServiciosPanel3");
            // Buscar el navbar por su clase o selector correcto
            const navbar = document.querySelector(".navbar");  

            // Mostrar loader
            loader.style.display = "flex";
            
            
            if (navbar) {
                navbar.style.display = "none";
            }

            setTimeout(() => {
                
                loader.style.display = "none";
                panel.style.display = "block";
                
                // Prevenir scroll del body
                document.body.classList.add("modal-open");
            }, 2000);
        });

        // Función para cerrar modal
        function cerrarModal3() {
            const panel = document.getElementById("masServiciosPanel3");
            const navbar = document.querySelector(".navbar"); // CORREGIDO: Mismo selector
            
            panel.style.display = "none";
            
            // CORREGIDO: Restaurar navbar al cerrar
            if (navbar) {
                navbar.style.display = "block";
            }
            
            // Restaurar scroll del body
            document.body.classList.remove("modal-open");
        }

        // Cerrar modal al hacer click fuera del contenido
        document.getElementById("masServiciosPanel3").addEventListener("click", function(cerrar) {
            if (cerrar.target === this) {
                cerrarModal3();
            }
        });

        // Cerrar modal con tecla Escape
        document.addEventListener("keydown", function(e) {
            if (e.key === "Escape") {
                const panel = document.getElementById("masServiciosPanel3");
                if (panel.style.display === "block") {
                    cerrarModal3();
                }
            }
        });




        document.getElementById("boton4").addEventListener("click", (e) => {
            e.preventDefault();
            
            const loader = document.getElementById("loaderContent2");
            const panel = document.getElementById("masServiciosPanel4");
            // Buscar el navbar por su clase o selector correcto
            const navbar = document.querySelector(".navbar");  

            // Mostrar loader
            loader.style.display = "flex";
            
            
            if (navbar) {
                navbar.style.display = "none";
            }

            setTimeout(() => {
                
                loader.style.display = "none";
                panel.style.display = "block";
                
                // Prevenir scroll del body
                document.body.classList.add("modal-open");
            }, 2000);
        });

        // Función para cerrar modal
        function cerrarModal4() {
            const panel = document.getElementById("masServiciosPanel4");
            const navbar = document.querySelector(".navbar"); // CORREGIDO: Mismo selector
            
            panel.style.display = "none";
            
            // CORREGIDO: Restaurar navbar al cerrar
            if (navbar) {
                navbar.style.display = "block";
            }
            
            // Restaurar scroll del body
            document.body.classList.remove("modal-open");
        }

        // Cerrar modal al hacer click fuera del contenido
        document.getElementById("masServiciosPanel4").addEventListener("click", function(cerrar) {
            if (cerrar.target === this) {
                cerrarModal4();
            }
        });

        // Cerrar modal con tecla Escape
        document.addEventListener("keydown", function(e) {
            if (e.key === "Escape") {
                const panel = document.getElementById("masServiciosPanel4");
                if (panel.style.display === "block") {
                    cerrarModal4();
                }
            }
        });




            document.getElementById("boton5").addEventListener("click", (e) => {
            e.preventDefault();
            
            const loader = document.getElementById("loaderContent2");
            const panel = document.getElementById("masServiciosPanel5");
            // Buscar el navbar por su clase o selector correcto
            const navbar = document.querySelector(".navbar");  

            // Mostrar loader
            loader.style.display = "flex";
            
            
            if (navbar) {
                navbar.style.display = "none";
            }

            setTimeout(() => {
                
                loader.style.display = "none";
                panel.style.display = "block";
                
                // Prevenir scroll del body
                document.body.classList.add("modal-open");
            }, 2000);
        });

        // Función para cerrar modal
        function cerrarModal5() {
            const panel = document.getElementById("masServiciosPanel5");
            const navbar = document.querySelector(".navbar"); // CORREGIDO: Mismo selector
            
            panel.style.display = "none";
            
            // CORREGIDO: Restaurar navbar al cerrar
            if (navbar) {
                navbar.style.display = "block";
            }
            
            // Restaurar scroll del body
            document.body.classList.remove("modal-open");
        }

        // Cerrar modal al hacer click fuera del contenido
        document.getElementById("masServiciosPanel4").addEventListener("click", function(cerrar) {
            if (cerrar.target === this) {
                cerrarModal5();
            }
        });

        // Cerrar modal con tecla Escape
        document.addEventListener("keydown", function(e) {
            if (e.key === "Escape") {
                const panel = document.getElementById("masServiciosPanel5");
                if (panel.style.display === "block") {
                    cerrarModal5();
                }
            }
        });



            document.getElementById("boton6").addEventListener("click", (e) => {
            e.preventDefault();
            
            const loader = document.getElementById("loaderContent2");
            const panel = document.getElementById("masServiciosPanel6");
            // Buscar el navbar por su clase o selector correcto
            const navbar = document.querySelector(".navbar");  

            // Mostrar loader
            loader.style.display = "flex";
            
            
            if (navbar) {
                navbar.style.display = "none";
            }

            setTimeout(() => {
                
                loader.style.display = "none";
                panel.style.display = "block";
                
                // Prevenir scroll del body
                document.body.classList.add("modal-open");
            }, 2000);
        });

        // Función para cerrar modal
        function cerrarModal6() {
            const panel = document.getElementById("masServiciosPanel6");
            const navbar = document.querySelector(".navbar"); // CORREGIDO: Mismo selector
            
            panel.style.display = "none";
            
            // CORREGIDO: Restaurar navbar al cerrar
            if (navbar) {
                navbar.style.display = "block";
            }
            
            // Restaurar scroll del body
            document.body.classList.remove("modal-open");
        }

        // Cerrar modal al hacer click fuera del contenido
        document.getElementById("masServiciosPanel6").addEventListener("click", function(cerrar) {
            if (cerrar.target === this) {
                cerrarModal6();
            }
        });

        // Cerrar modal con tecla Escape
        document.addEventListener("keydown", function(e) {
            if (e.key === "Escape") {
                const panel = document.getElementById("masServiciosPanel6");
                if (panel.style.display === "block") {
                    cerrarModal6();
                }
            }
        });





            document.getElementById("boton7").addEventListener("click", (e) => {
            e.preventDefault();
            
            const loader = document.getElementById("loaderContent2");
            const panel = document.getElementById("masServiciosPanel7");
            // Buscar el navbar por su clase o selector correcto
            const navbar = document.querySelector(".navbar");  

            // Mostrar loader
            loader.style.display = "flex";
            
            
            if (navbar) {
                navbar.style.display = "none";
            }

            setTimeout(() => {
                
                loader.style.display = "none";
                panel.style.display = "block";
                
                // Prevenir scroll del body
                document.body.classList.add("modal-open");
            }, 2000);
        });

        // Función para cerrar modal
        function cerrarModal7() {
            const panel = document.getElementById("masServiciosPanel7");
            const navbar = document.querySelector(".navbar"); // CORREGIDO: Mismo selector
            
            panel.style.display = "none";
            
            // CORREGIDO: Restaurar navbar al cerrar
            if (navbar) {
                navbar.style.display = "block";
            }
            
            // Restaurar scroll del body
            document.body.classList.remove("modal-open");
        }

        // Cerrar modal al hacer click fuera del contenido
        document.getElementById("masServiciosPanel7").addEventListener("click", function(cerrar) {
            if (cerrar.target === this) {
                cerrarModal7();
            }
        });

        // Cerrar modal con tecla Escape
        document.addEventListener("keydown", function(e) {
            if (e.key === "Escape") {
                const panel = document.getElementById("masServiciosPanel6");
                if (panel.style.display === "block") {
                    cerrarModal7();
                }
            }
        });




            document.getElementById("boton8").addEventListener("click", (e) => {
            e.preventDefault();
            
            const loader = document.getElementById("loaderContent2");
            const panel = document.getElementById("masServiciosPanel8");
            // Buscar el navbar por su clase o selector correcto
            const navbar = document.querySelector(".navbar");  

            // Mostrar loader
            loader.style.display = "flex";
            
            
            if (navbar) {
                navbar.style.display = "none";
            }

            setTimeout(() => {
                
                loader.style.display = "none";
                panel.style.display = "block";
                
                // Prevenir scroll del body
                document.body.classList.add("modal-open");
            }, 2000);
        });

        // Función para cerrar modal
        function cerrarModal8() {
            const panel = document.getElementById("masServiciosPanel8");
            const navbar = document.querySelector(".navbar"); // CORREGIDO: Mismo selector
            
            panel.style.display = "none";
            
            // CORREGIDO: Restaurar navbar al cerrar
            if (navbar) {
                navbar.style.display = "block";
            }
            
            // Restaurar scroll del body
            document.body.classList.remove("modal-open");
        }

        // Cerrar modal al hacer click fuera del contenido
        document.getElementById("masServiciosPanel8").addEventListener("click", function(cerrar) {
            if (cerrar.target === this) {
                cerrarModal8();
            }
        });

        // Cerrar modal con tecla Escape
        document.addEventListener("keydown", function(e) {
            if (e.key === "Escape") {
                const panel = document.getElementById("masServiciosPanel8");
                if (panel.style.display === "block") {
                    cerrarModal8();
                }
            }
        });
