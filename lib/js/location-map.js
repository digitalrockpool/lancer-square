$j(function() {
  $j("li").click(function() {
    $j("li").removeClass("active");
    $j(this).addClass('active');
  });
  $j("#accordion-park").click(function() {
    $j("#map-park").addClass("show-map");
    $j("#map-culture").removeClass("show-map");
    $j("#map-retail").removeClass("show-map");
    $j("#map-dining").removeClass("show-map");
    $j("#map-education").removeClass("show-map");
    $j("#map-transport").removeClass("show-map");
  });
  $j("#accordion-culture").click(function() {
    $j("#map-park").removeClass("show-map");
    $j("#map-culture").addClass("show-map");
    $j("#map-retail").removeClass("show-map");
    $j("#map-dining").removeClass("show-map");
    $j("#map-education").removeClass("show-map");
    $j("#map-transport").removeClass("show-map");
  });
  $j("#accordion-retail").click(function() {
    $j("#map-park").removeClass("show-map");
    $j("#map-culture").removeClass("show-map");
    $j("#map-retail").addClass("show-map");
    $j("#map-dining").removeClass("show-map");
    $j("#map-education").removeClass("show-map");
    $j("#map-transport").removeClass("show-map");
  });
  $j("#accordion-dining").click(function() {
    $j("#map-park").removeClass("show-map");
    $j("#map-culture").removeClass("show-map");
    $j("#map-retail").removeClass("show-map");
    $j("#map-dining").addClass("show-map");
    $j("#map-education").removeClass("show-map");
    $j("#map-transport").removeClass("show-map");
  });
  $j("#accordion-education").click(function() {
    $j("#map-park").removeClass("show-map");
    $j("#map-culture").removeClass("show-map");
    $j("#map-retail").removeClass("show-map");
    $j("#map-dining").removeClass("show-map");
    $j("#map-education").addClass("show-map");
    $j("#map-transport").removeClass("show-map");
  });
  $j("#accordion-transport").click(function() {
    $j("#map-park").removeClass("show-map");
    $j("#map-culture").removeClass("show-map");
    $j("#map-retail").removeClass("show-map");
    $j("#map-dining").removeClass("show-map");
    $j("#map-education").removeClass("show-map");
    $j("#map-transport").addClass("show-map");
  });
});

var locationsPark = [
  ['Kensington Gardens', 51.50716727284037, -0.1791542733675768, '1'],
  ['Holland Park', 51.50218849973725, -0.20302368686013958, '2'],
  ['Green Park', 51.504044015469546, -0.14380305802413446, '3'],
  ['Regents Park', 51.52866458776473, -0.1486447733665717, '4'],
  ['Hyde Park', 51.50839005527333, -0.1656873852181883, '5'],
  ['St James Park', 51.502633312282995, -0.13475725802420313, '6']
];

var locationsCulture = [
  ['Buckingham Palace', 51.5012971851884, -0.14186854454694092, '1'],
  ['Christies', 51.506646327623464, -0.1375343785110848, '2'],
  ['Royal Hospital Chelsea', 51.487291128619034, -0.15845885989133413, '3'],
  ['Cadogan Hall', 51.493932374017504, -0.15728555903877064, '4'],
  ['Burton Court', 51.488758704201, -0.15947070221942186, '5'],
  ['Natural History Museum', 51.49689531360042, -0.17637793105494015, '6'],
  ['Royal Albert Hall', 51.501089096890134, -0.17733381569607534, '7'],
  ['Design Museum', 51.50007092204576, -0.20021181569611493, '8'],
  ['Victoria and Albert Museum', 51.4967994758079, -0.17220145987580782, '9'],
  ['18 Stafford Terrace', 51.50062364720914, -0.19687095987561842, '10'],
  ['Portabello Market', 51.51714705150752, -0.2058362733671208, '11'],
  ['Kensington Olympia', 51.49649015932283, -0.2107744310399165, '12'],
  ['Serpentine Sackler Gallery', 51.50718718362153, -0.17128034453167992, '13'],
  ['Serpentine Gallery', 51.504767213244, -0.1750730022036113, '14'],
  ['Saatchi Gallery', 51.49086417690007, -0.15868431569658065, '15'],
  ['Stamford Bridge Stadium', 51.4815264614376, -0.19092014453290923, '16'],
  ['Queens Club', 51.48703302937103, -0.21218741569675298, '17'],
  ['Opera Holland Park', 51.502635055285005, -0.2022362733678174, '18'],
  ['Sloane Square', 51.4929620888757, -0.15701740220421653, '19'],
  ['RHS Chelsea Flower Show', 51.48740950984578, -0.15624869479927123, '20']
];

var locationsRetail = [
  ['Gucci', 51.50882510075561, -0.1408427887111248, '1'],
  ['Harrods', 51.499572445, -0.163245131039759, '2'],
  ['Louis Vuitton', 51.51094640332919, -0.14258751569561692, '3'],
  ['Havey Nichols', 51.50166588005744, -0.1597536022037695, '4'],
  ['Chanel', 51.49913960956622, -0.159175315696146, '5'],
  ['Burberry', 51.50170997306747, -0.16047601754737725, '6'],
  ['Hermes', 51.4986115531061, -0.15903591569621361, '7'],
  ['Cartier', 51.49309168884686, -0.1580170291887749, '8'],
  ['Selfridges', 51.514563483094356, -0.15275627336725356, '9'],
  ['Westfield London Shopping Centre', 51.507298683018455, -0.2211517445316885, '10']
];

var locationsDining = [
  ['Lanceston Place', 51.499351308883924, -0.18537535802438332, '1'],
  ['Core by Clare Smyth', 51.51292624210224, -0.2031120445314273, '2'],
  ['Zuma Knightsbridge', 51.501064445917166, -0.16313600220379562, '3'],
  ['The Ritz', 51.507245116890445, -0.14161657336760286, '4'],
  ['Min Jiang at the Royal Garden Hotel', 51.502899197446155, -0.18782004453190046, '5'],
  ['Sexy Fish', 51.50947346371478, -0.1443518598752234, '6'],
  ['Restaurant Ours', 51.49419944441523, -0.16891640035281996, '7'],
  ['Annabels Mayfair', 51.509343941742266, -0.1462096715161888, '8'],
  ['Novikov Restaurant', 51.5078650368905, -0.14289564453166792, '9'],
  ['Sumosan Twiga Knightsbridge', 51.498905168402764, -0.15910371569617976, '10'],
  ['Scotts Mayfair', 51.510082238712606, -0.15083450220336242, '11']
];

var locationsEducation = [
  ['Little Cherubs', 51.503907629118046, -0.19351133103954604, '1'],
  ['The Willcocks Nursery School', 51.50002847008118, -0.17852025802432941, '2'],
  ['The Kensington Kindergarten', 51.50044314181032, -0.18930228871152593, '3'],
  ['UCL', 51.52483148621416, -0.13350677573882022, '4'],
  ['LSE', 51.51458503302804, -0.11651527443350125, '5'],
  ['Kings College London', 51.51163326928634, -0.11599700220331242, '6']
];

var locationsTransport = [
  ['High Street Kensington', 51.50104366088192, -0.1926248445319779, '1'],
  ['Knightsbridge', 51.50154182316965, -0.1609896514040912, '2'],
  ['Oxford Circus Underground', 51.51533185084121, -0.14186603103902187, '3'],
  ['Piccadilly Circus', 51.51011359679021, -0.13497000220338395, '4'],
  ['Hyde Park Corner', 51.50320361011, -0.1524414598754832, '5'],
  ['Green Park', 51.50710629523988, -0.1428838022035231, '6'],
  ['Sloane Square', 51.492387614829596, -0.156845740829794, '7']
];

function initMap() {

  var mapOptions = {
    center: {lat: 51.503499973993236, lng: -0.19106844447816043},
    zoom: 15,
    streetViewControl: false,
    mapTypeControl: false,
    mapId: '515deb64a21ab722'
  };

  mapPark = new google.maps.Map(document.getElementById('map-park'), mapOptions);
  mapCulture = new google.maps.Map(document.getElementById('map-culture'), mapOptions);
  mapRetail = new google.maps.Map(document.getElementById('map-retail'), mapOptions);
  mapDining = new google.maps.Map(document.getElementById('map-dining'), mapOptions);
  mapEducation = new google.maps.Map(document.getElementById('map-education'), mapOptions);
  mapTransport = new google.maps.Map(document.getElementById('map-transport'), mapOptions);

  const svgMarker = {
    path: "M 12.13085 34.29385 C 2.049008 19.894699 0.177632 18.416903 0.177632 13.125 C 0.177632 5.876242 6.142236 0 13.5 0 C 20.857763 0 26.822369 5.876242 26.822369 13.125 C 26.822369 18.416903 24.950993 19.894699 14.86915 34.29385 C 14.207543 35.235428 12.792387 35.235359 12.13085 34.29385 Z",
    fillColor: "#979797",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 1,
    labelOrigin: new google.maps.Point(12.5, 12),
    anchor: new google.maps.Point(0, 35),
  };

  const imageMarker = "https://www.digitalrockpool.com/wp-content/uploads/map-marker-logo.svg";

  const lancerMarker = new google.maps.LatLng(51.503499973993236, -0.19106844447816043);
  const OperaHollandPark = new google.maps.LatLng(51.502635055285005, -0.2022362733678174);

  for (i = 0; i < locationsPark.length; i++) { 
    markerPark = new google.maps.Marker({
      position: new google.maps.LatLng(locationsPark[i][1], locationsPark[i][2]),
      map: mapPark,
      icon: svgMarker,
      label: {
        text: locationsPark[i][3],
        color: 'white',
        fontWeight: 'bold'
      }
    });

    google.maps.event.addListener(markerPark, "click", function () {
      mapPark.setCenter(this.getPosition());
    });
  };

  markerParkLC = new google.maps.Marker({
    position: lancerMarker,
    map: mapPark,
    icon: imageMarker,
  });

  google.maps.event.addListener(markerParkLC, "click", function () {
    mapPark.setCenter(this.getPosition());
  });

  for (i = 0; i < locationsCulture.length; i++) {  
    markerCulture = new google.maps.Marker({
      position: new google.maps.LatLng(locationsCulture[i][1], locationsCulture[i][2]),
      map: mapCulture,
      icon: svgMarker,
      label: {
        text: locationsCulture[i][3],
        color: 'white',
        fontWeight: 'bold'
      }
    });

    google.maps.event.addListener(markerCulture, "click", function () {
      mapCulture.setCenter(this.getPosition());
    });
  };

  markerCultureLC = new google.maps.Marker({
    position: lancerMarker,
    map: mapCulture,
    icon: imageMarker,
  });

  google.maps.event.addListener(markerCultureLC, "click", function () {
    mapCulture.setCenter(this.getPosition());
  });

  for (i = 0; i < locationsRetail.length; i++) {  
    markerRetail = new google.maps.Marker({
      position: new google.maps.LatLng(locationsRetail[i][1], locationsRetail[i][2]),
      map: mapRetail,
      icon: svgMarker,
      label: {
        text: locationsRetail[i][3],
        color: 'white',
        fontWeight: 'bold'
      }
    });

    google.maps.event.addListener(markerRetail, "click", function () {
      mapRetail.setCenter(this.getPosition());
    });
  };

  markerRetailLC = new google.maps.Marker({
    position: lancerMarker,
    map: mapRetail,
    icon: imageMarker,
  });

  google.maps.event.addListener(markerRetailLC, "click", function () {
    mapRetail.setCenter(this.getPosition());
  });

  for (i = 0; i < locationsDining.length; i++) {  
    markerDining = new google.maps.Marker({
      position: new google.maps.LatLng(locationsDining[i][1], locationsDining[i][2]),
      map: mapDining,
      icon: svgMarker,
      label: {
        text: locationsDining[i][3],
        color: 'white',
        fontWeight: 'bold'
      }
    });

    google.maps.event.addListener(markerDining, "click", function () {
      mapDining.setCenter(this.getPosition());
    });
  };

  markerDiningLC = new google.maps.Marker({
    position: lancerMarker,
    map: mapDining,
    icon: imageMarker,
  });

  google.maps.event.addListener(markerDiningLC, "click", function () {
    mapDining.setCenter(this.getPosition());
  });

  for (i = 0; i < locationsEducation.length; i++) {  
    markerEducation = new google.maps.Marker({
      position: new google.maps.LatLng(locationsEducation[i][1], locationsEducation[i][2]),
      map: mapEducation,
      icon: svgMarker,
      label: {
        text: locationsEducation[i][3],
        color: 'white',
        fontWeight: 'bold'
      }
    });

    google.maps.event.addListener(markerEducation, "click", function () {
      mapEducation.setCenter(this.getPosition());
    });
  };

  markerEducationLC = new google.maps.Marker({
    position: lancerMarker,
    map: mapEducation,
    icon: imageMarker,
  });

  google.maps.event.addListener(markerEducationLC, "click", function () {
    mapEducation.setCenter(this.getPosition());
  });

  for (i = 0; i < locationsTransport.length; i++) {  
    markerTransport = new google.maps.Marker({
      position: new google.maps.LatLng(locationsTransport[i][1], locationsTransport[i][2]),
      map: mapTransport,
      icon: svgMarker,
      label: {
        text: locationsTransport[i][3],
        color: 'white',
        fontWeight: 'bold'
      }
    });

    google.maps.event.addListener(markerTransport, "click", function () {
      mapTransport.setCenter(this.getPosition());
    });
  };

  markerTransportLC = new google.maps.Marker({
    position: lancerMarker,
    map: mapTransport,
    icon: imageMarker,
  });

  google.maps.event.addListener(markerTransportLC, "click", function () {
    mapTransport.setCenter(this.getPosition());
  });
} 

$j("li.park").click(function(){
  var id = this.id;
  mapPark.setCenter(new google.maps.LatLng(locationsPark[id][1], locationsPark[id][2]))
  return false;
});

$j("li.culture").click(function(){
  var id = this.id;
  mapCulture.setCenter(new google.maps.LatLng(locationsCulture[id][1], locationsCulture[id][2]))
  return false;
});

$j("li.retail").click(function(){
  var id = this.id;
  mapRetail.setCenter(new google.maps.LatLng(locationsRetail[id][1], locationsRetail[id][2]))
  return false;
});

$j("li.dining").click(function(){
  var id = this.id;
  mapDining.setCenter(new google.maps.LatLng(locationsDining[id][1], locationsDining[id][2]))
  return false;
});

$j("li.education").click(function(){
  var id = this.id;
  mapEducation.setCenter(new google.maps.LatLng(locationsEducation[id][1], locationsEducation[id][2]))
  return false;
});

$j("li.transport").click(function(){
  var id = this.id;
  mapTransport.setCenter(new google.maps.LatLng(locationsTransport[id][1], locationsTransport[id][2]))
  return false;
});