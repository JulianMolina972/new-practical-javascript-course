//Analisís personal para Juanita

console.log(salarios)

function encontrarPersona (personaName) {
  return salarios.find(persona => persona.name === personaName)
}


function medianaPorpersona(nombrePerosna) {
  const trabajos = encontrarPersona(nombrePerosna).trabajos
  console.log(trabajos)
  const salariosPersona = trabajos.map(element => element.salario)
  console.log(salariosPersona)

  const medianaSalarios = PlatziMath.calcularMediana(salariosPersona)

  console.log(medianaSalarios)
  return medianaSalarios
}


function proyeccionPorPersona(nombrePerosna) {
  const trabajos = encontrarPersona(nombrePerosna).trabajos

  let incrementosSalarios = [];

  for (let i = 1; i < trabajos.length; i++) {
    const salarioActual = trabajos[i].salario
    const salarioAnterior = trabajos[i - 1].salario
    const crecimiento = salarioActual - salarioAnterior
    const porcentajeCrecimiento = crecimiento / salarioAnterior
    incrementosSalarios.push(porcentajeCrecimiento)
    
  }
  
  const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(incrementosSalarios)
  
  console.log({incrementosSalarios, medianaPorcentajesCrecimiento})

  const ultimoSalario = trabajos[trabajos.length - 1].salario
  const aumento = ultimoSalario * medianaPorcentajesCrecimiento
  const nuevoSalario = aumento + ultimoSalario


  console.log({nuevoSalario})

  return nuevoSalario;

}

//Analisis empresarial

const empresas = {}

for (persona of salarios) {
  for (trabajo of persona.trabajos) {
    if (!empresas[trabajo.empresa]){
      empresas[trabajo.empresa] = {}
    }

    if(!empresas[trabajo.empresa][trabajo.year]){
      empresas[trabajo.empresa][trabajo.year] = []
    }

    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
  }
}

function medianaSalariosYear(empresa, year) {
  if(!empresas[empresa]) {
    console.warn('La empresa no existe')
  } else if (!empresas[empresa][year]){
    console.warn('La empresa no dio salarios este año')
  } else {
    return PlatziMath.calcularMediana(empresas[empresa][year])
  }
}

console.log(empresas)

function proyeccionPorEmpresa() {

}

