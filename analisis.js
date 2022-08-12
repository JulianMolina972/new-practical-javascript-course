//Analisís persona

console.log(salarios)

function encontrarPersona (personaName) {
  return salarios.find(persona => persona.name === personaName)
}


function medianaPorpersona(nombrePerosna) {
  const trabajos = encontrarPersona(nombrePerosna).trabajos
  const salariosPersona = trabajos.map(element => element.salario)

  const medianaSalarios = PlatziMath.calcularMediana(salariosPersona)

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

function proyeccionPorEmpresa(nombreEmpresa) {
  if(!empresas[nombreEmpresa]) {
    console.warn('La empresa no existe')
  } else {
    const empresasYears = Object.keys(empresas[nombreEmpresa])
    const listaMedianaYears = empresasYears.map((year) => {
      return medianaSalariosYear(nombreEmpresa, year)
    });

    let porcentajesCrecimiento = [];

    for (let i = 1; i < listaMedianaYears.length; i++) {
      const salarioActual = listaMedianaYears[i]
      const salarioAnterior = listaMedianaYears[i - 1]
      const crecimiento = salarioActual - salarioAnterior
      const porcentajeCrecimiento = crecimiento / salarioAnterior
      porcentajesCrecimiento.push(porcentajeCrecimiento)
      
    }
    
    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento)
    
      
    const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1]
    const aumento = ultimaMediana * medianaPorcentajesCrecimiento
    const nuevamediana = aumento + ultimaMediana


    console.log({nuevamediana})

    return nuevamediana;

  }

}


//Análisis general

function medianaGeneral() {
  const listaMedianas = salarios.map(persona => medianaPorpersona(persona.name));
  const mediana = PlatziMath.calcularMediana(listaMedianas)
  return mediana;
}

//Análisis top 10%

function medianaTop10() {
  const listaMedianas = salarios.map(persona => medianaPorpersona(persona.name));
  const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas)
  const top10 =  medianasOrdenadas.slice( -(medianasOrdenadas.length * 0.1))

  const medianaTop10 = PlatziMath.calcularMediana(top10)

  return medianaTop10;

  console.log({medianasOrdenadas, top10})


}