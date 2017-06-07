'use strict'
const Section = (update) => {
  const contenedorGeneral = $('<div id="contenedor-general" class="input-field "></div>');
  const sectionRow = $('<div class="row"></div>');
  const sectionColumn =  $('<div class="col s12 m12"></div>');
  const icon = $('<i class="material-icons prefix">'+ 'search'+'</i>');
  const divInput = $('<div id="div-input" class="validate"></div>')
  const input = $('<input id="input-item" type="text" placeholder="Ingresa tu distrito a buscar">');
  const hr = $('<hr>');
  divInput.append(icon);
  divInput.append(input);
  contenedorGeneral.append(sectionRow);
  sectionColumn.append(divInput);
  sectionColumn.append(hr);
  sectionRow.append(sectionColumn);

  input.keyup(function(){
    filterByDistrict(state.stations, $(this).val());
  });


  return contenedorGeneral;
}
