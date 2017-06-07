'use strict';

const filterByDistrict = (stations,query) => {


  stations.forEach(function(e){
    if(e.district.toLowerCase() == query.toLowerCase()){
      $('#contenedorInformacion').empty();

      const answerRow = $('<div class="row"></div>');
      const sectionColumn =  $('<div class="col s12 m12"></div>');
      const divAnswer = $('<div id="div-answer"></div>');
      const answerContenedor = $('<p>' + '<strong>' + e.name+'<br>'+ '</strong>' +'<br>'+e.address+ '<br>'+e.district+ '</p>')
      const icon = $('<i class="fa fa-map-o" aria-hidden="true"></i>')
      const hr = $('hr');


      divAnswer.append(answerContenedor);
      divAnswer.append(icon);
      divAnswer.append(hr);
      $('#contenedorInformacion').append(divAnswer);
      $("#div-answer").hover(function(){
      $(this).css("background-color", "#E8E8E8");
      }, function(){
      $(this).css("background-color", "white");
      });

      icon.on('click', function () {

        divAnswer.hide();
        const divMap = $('<div id="div-map"></div>');
        $('#contenedorInformacion').append(divMap);

        function initMap (e) {

           var est = {lat:e.lat,lng:e.long};
          var map = new google.maps.Map($("#div-map"),{
            zoom:4,
            center:est
          });

          var marker = new google.maps.Marker({
            position: est,
            map: map
          });


      /*var latitud, longitud, Ubicacion;
          var funcionExito=function(posicion){
            latitud=posicion.coords.latitude;
            longitud=posicion.coords.longitude;

            Ubicacion= new google.maps.Marker({
              position: {lat:latitud, lng:longitud},
              map:map
            });

            map.setZoom(18);
            map.setCenter({lat:latitud, lng:longitud});
          }*/
      }
      initMap(e);


      });
      //return document.write(e.name + e.address + e. district);
    }
  });
  


}
