'use strict'
const SectionEstaciones = (update) => {
  const contenedorInformacion = $('<div id="contenedorInformacion"></div>');
  const sectionEstacionesRow = $('<div class="row"></div>');
  const sectionEstacionesColumn = $('<div class="col s12 m12 "></div>');
  const primeraEstacion = $('<div class="div-estaciones" id="primera-estacion"></div>');
  const segundaEstacion = $('<div class="div-estaciones" id="segunda-estacion"></div>');
  const terceraEstacion = $('<div class="div-estaciones" id="tercera-estacion"></div>');
  const cuartaEstacion = $('<div class="div-estaciones" id="cuarta-estacion"></div>');
  const infoPE = $('<p>'+'<strong>' + state.stations[0].name + '</strong>' + '<br>' + state.stations[0].address+ '<br>' + state.stations[0].district+ '</p>');
  const infoSE = $('<p>'+ '<strong>'+ state.stations[1].name + '</strong>' + '<br>' + state.stations[1].address+ '<br>' + state.stations[1].district+ '</p>');
  const infoTE = $('<p>'+ '<strong>'+ state.stations[2].name + '</strong>' + '<br>' + state.stations[2].address+ '<br>' + state.stations[2].district+ '</p>');
  const infoCE = $('<p>'+ '<strong>'+ state.stations[3].name + '</strong>' +'<br>' + state.stations[3].address+ '<br>' +  state.stations[3].district+ '</p>');
  const hrP = $('<hr>');
  const hrS = $('<hr>');
  const hrT = $('<hr>');
  const hrC = $('<hr>');
  primeraEstacion.append(infoPE);
  primeraEstacion.append(hrP);
  segundaEstacion.append(infoSE);
  segundaEstacion.append(hrS);
  terceraEstacion.append(infoTE);
  terceraEstacion.append(hrT);
  cuartaEstacion.append(infoCE);
  cuartaEstacion.append(hrC);
  sectionEstacionesColumn.append(primeraEstacion);
  sectionEstacionesColumn.append(segundaEstacion);
  sectionEstacionesColumn.append(terceraEstacion);
  sectionEstacionesColumn.append(cuartaEstacion);
  sectionEstacionesRow.append(sectionEstacionesColumn);
  contenedorInformacion.append(sectionEstacionesRow);

  return contenedorInformacion;
}
