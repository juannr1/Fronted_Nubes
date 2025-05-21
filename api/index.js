const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000


app.use(cors())





const Uno = [
  {

    "Plan": " <p class=\"pricing-plan-title fw-bold\">Basico</p><p class=\"pricing-plan-title fw-bold\">Mensual</p>",
    "Precio": "$ 120.000 COP",
    "Icono": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"80\" height=\"80\" fill=\"currentColor\" class=\"bi bi-house-door\" viewBox=\"0 0 16 16\"><path d=\"M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z\"/>  </svg>",
    "Servicio": "Atención médica general <br>  Orientación en salud preventiva <br>   Acceso a documentación médica <br> <br>  ✅ 👉 Ideal para usuarios que requieren atención básica y organizada sin complicaciones.",
    "typeId": 1
  },

  {
    "Plan": "<p class=\"pricing-plan-title fw-bold\">Profesional</p> <p class=\"pricing-plan-term fw-bold\">Mensual</p></div>",
    "Precio": "$ 220.000 COP",
    "Icono": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"80\" height=\"80\" fill=\"currentColor\" class=\"bi bi-building-fill\" viewBox=\"0 0 16 16\"> <path d=\"M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zM4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z\"/> </svg>",
    "Servicio": "Atencion medica general <br>  Orientacion en salud preventiva <br>   Acceso a documentacion medica <br> <br>   ✅ Atención prioritaria sin filas <br>   👉 Perfecto para quienes valoran su tiempo y necesitan atención rápida y efectiva.",
    "typeId": 2
  },
  

  {
    "Plan": "<p class=\"pricing-plan-title fw-bold\">Profesional</p> <p class=\"pricing-plan-term fw-bold\">Mensual</p></div>",
    "Precio": "$ 220.000 COP",
    "Icono": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"80\" height=\"80\" fill=\"currentColor\" class=\"bi bi-buildings-fill\" viewBox=\"0 0 16 16\"><path d=\"M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z\"/></svg>",
    "Servicio": "Atención médica general <br> Orientación en salud preventiva <br> Acceso a documentación médica <br> <br> ✅ Gestor de salud empresarial <br> 👉 Ideal para usuarios que requieren en su empresa y organizacion clinica.",
    "typeId": 3
  }
]








app.get('/servicios', (req, res) => {            
  res.send(Uno)
})



app.get('/servicios/:id', (req, res) => {
  let TypeId = req.params.id
  let SercicioAll = Uno.find(Uno => Uno.typeId == TypeId)              
  res.send(SercicioAll)
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port} http://localhost:${port}`)
})



