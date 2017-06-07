'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_ => render(root)));
  wrapper.append(Section());
  wrapper.append(SectionEstaciones());
  root.append(wrapper);

}

const state = {
  stations: null,
  selectedStation: null
};

$(document).ready(function(){


  getJSON('stations.json', (err, json) => {

    if (err) { return alert(err.message);}

    state.stations = json;

    const root = $('.root');
    render(root);

    $('#contenedorInformacion').on('click', function () {
      const divMap = $('<div id="div-map"></div>');
    });

  }
)});
