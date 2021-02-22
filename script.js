
//entire Maps JS API doc: https://developers.google.com/maps/documentation/javascript/examples
var map;

// variable of all rectangles on the map
//the CSUN buildings user must double-click on/find
var sequoia_hall;
var eucalyptus_hall;
var johnson_auditorium; //you selected this location for me
var santa_susan_hall;
var klotz_student_health_center;

// keep track of which question the user is currently at
var numclicks = 1;

// keep track of correct answer
var correctAnswer = 0;

// initialize Google Maps
//used this documenation and others to initialize my google maps
//https://developers.google.com/maps/documentation/javascript/examples/map-language

//sort of the center of CSUN campus
      //location is near or in front of Citrus Hall
      //hide map icons and logos
      //just display the csun map with no  names, no street names, no building names, no signs 
      //to give hints of where the location of buildings in question is
function initialize(){
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 34.238944, lng: -118.527500},
        zoom: 16.80, 
        disableDoubleClickZoom: true,
        zoomControl: false,
        mapTypeControl: false,
        draggable: false,
        keyboardShortcuts: false,
        streetViewControl: false,
    });

    map.setOptions({styles: styles["hide"]});
    
    // add double-click listener to map
    map.addListener("dblclick", function(e) {
        drawRectangle(e.latLng, map);
    })
}

// hide building markings and road names that are typically seen on google maps
var styles = {
    hide: [
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [{visibility: "off"}]
        },
        {
            featureType: "road",
            elementType: "labels",
            stylers: [{visibility: "off"}]
        }
    ]
};

// draw rectangle of every specified building
//condition case statements if user double clicks on correct or incorrect area on the map
function drawRectangle(latLng, map) {

    switch(numclicks) {
        
        //SEQUOIA HALL
        case 1: 
            // set bounds for Sequoia Hall (LatLngBounds(sw, ne))
              var sequoia_hallBounds = new google.maps.LatLngBounds(

                //bottom left corner of sequoi hall
                new google.maps.LatLng(34.240100, -118.52850),
                //top right corner of sequoia hall
                new google.maps.LatLng(34.240860, -118.52760)

            
                
            );
            // create rectangle
            //https://developers.google.com/maps/documentation/javascript/examples/rectangle-simple
            //used this documentation on how to make the green and red ractangles around 
            //the coorindates from above
        
        
        //DOCUMENTATION: https://developers.google.com/maps/documentation/javascript/shapes#rectangles
            sequoia_hall = new google.maps.Rectangle({
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillOpacity: 0.1,
                map: map,
                bounds: sequoia_hallBounds
            });
            // if we click on the correct building, green rectangle
               if (sequoia_hallBounds.contains(latLng)){
                sequoia_hall.setOptions({  
                    strokeColor: "green",
                    fillColor: "green"    
                });
                correctAnswer++; //increments the num of correct answers
                Answers(1, true);
            }
            else { // wrong building, red rectangle
                sequoia_hall.setOptions({ 
                    strokeColor: "red",
                    fillColor: "red"
                });
                Answers(1, false)
            }
            // go to next question on list
            numclicks++;
            // show result
            //show how many locations guessed correctly
            Results();
            break;
        
        //EUCALYPTUS HALL
        case 2:
            // LatLngBounds(sw, ne)
            var eucalyptus_hallBounds= new google.maps.LatLngBounds(
                //bottom left corner of Eucalyptus Hall
                //near Sierra quad
                new google.maps.LatLng(34.238500, -118.528800),

                //top right corner of Eucalyptus Hall
                //near lindley Ave
                new google.maps.LatLng(34.238820, -118.527600)
            );
            // create rectangle
            eucalyptus_hall = new google.maps.Rectangle({
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillOpacity: 0.1,
                map: map,
                bounds: eucalyptus_hallBounds
            });
            // if we click on the correct building, green rectangle
            if (eucalyptus_hallBounds.contains(latLng)) {   
                eucalyptus_hall.setOptions({
                //shades the building in green to indicate that user double-clicked
                //on correct location
                    strokeColor: "green", 
                    fillColor: "green"    
                });
                correctAnswer++; //increments the num of correct answers
                Answers(2, true);
            }
            else { // wrong building, red rectangle
                eucalyptus_hall.setOptions({
                //shades the building in red to indicate that user double-clicked
                //on incorrect location
                    strokeColor: "red", 
                    fillColor: "red"
                });
                Answers(2, false);
            }
            // go to next question on list
            numclicks++;
            // show result
            //show how many locations guessed correctly
            Results();
            break;
        
        //JOHNSON AUDITORIUM
        case 3:
            // LatLngBounds(sw, ne)
            var johnson_auditoriumBounds = new google.maps.LatLngBounds(
                
              //bottom left corner of Johnson Auditorium
                new google.maps.LatLng(34.241250, -118.529050),
              
              //top right corner of johnson auditorium
                new google.maps.LatLng(34.241530, -118.5288200)
              
            );
            // create rectangle
            johnson_auditorium = new google.maps.Rectangle({
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillOpacity: 0.1,
                map: map,
                bounds: johnson_auditoriumBounds
            });
            // if we click on the correct building, green rectangle
            if (johnson_auditoriumBounds.contains(latLng)) {
              johnson_auditorium.setOptions({
                 //shades the building in green to indicate that user double-clicked
                //on correct location
                    strokeColor: "green",
                    fillColor: "green"    
                });
                correctAnswer++;
                Answers(3, true);
            }
            else { // wrong building, red rectangle
              johnson_auditorium.setOptions({
                //shades the building in red to indicate that user double-clicked
                //on incorrect location
                    strokeColor: "red",
                    fillColor: "red"
                });
                Answers(3, false);
            }
            // go to next question on list
            numclicks++;
            // show result
            //show how many locations guessed correctly
            Results();
            break;
        
        //SANTA SUSAN HALL
        case 4:
            // LatLngBounds(sw, ne)
            var santa_susan_hallBounds = new google.maps.LatLngBounds(
                //bottom left corner of santa susan hall
                new google.maps.LatLng(34.237300, -118.529500),

                //top right corner for santa susan hall
                new google.maps.LatLng(34.237890, -118.529150)
            );
            // create rectangle
            santa_susan_hall = new google.maps.Rectangle({
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillOpacity: 0.1,
                map: map,
                bounds: santa_susan_hallBounds
            });
            // if we click on the correct building, green rectangle
            if (santa_susan_hallBounds.contains(latLng)) {
                santa_susan_hall.setOptions({  
                //shades the building in green to indicate that user double-clicked
                //on correct location
                    strokeColor: "green",
                    fillColor: "green"    
                });
                correctAnswer++; //increments the num of correct answers
                Answers(4, true);
            }
            else { // wrong building, red rectangle
                santa_susan_hall.setOptions({ 
                    //shades the building in red to indicate that user double-clicked
                    //on wrong location
                    strokeColor: "red",
                    fillColor: "red"
                });
                Answers(4, false);
            }
            //go to next question on list
            numclicks++;
            // show result
            //show how many locations guessed correctly
            Results();
            break;
        
        
        //KLOTZ STUDENT HEALTH CENTER
        case 5:
            // LatLngBounds(sw, ne)
            //longitude and latitude of CSUN KLOTZ Student Health Center
              var klotz_student_health_centerBounds = new google.maps.LatLngBounds(
                 //coordinates of bottom left corner of CSUN KLOTZ Student Health Center
                new google.maps.LatLng(34.2380700, -118.526650),

                //coordinates of top right corner of CSUN KLOTZ Student Health Center
                new google.maps.LatLng(34.2383400, -118.525985)
            );
            // create rectangle with css style
            klotz_student_health_center = new google.maps.Rectangle({
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillOpacity: 0.1,
                map: map,
                bounds: klotz_student_health_centerBounds
            });
            // if we click on the correct building, green rectangle
            if (klotz_student_health_centerBounds.contains(latLng)) {
                //shades the building in green to indicate that user double-clicked
                //on correct location
              klotz_student_health_center.setOptions({
                    strokeColor: "green", 
                    fillColor: "green"    
                });
                correctAnswer++;
                Answers(5, true);
            }
            else { // wrong building, red rectangle
              klotz_student_health_center.setOptions({
                    //shades the building in red to indicate that user double-clicked
                    //on wrong location
                    strokeColor: "red",
                    fillColor: "red"
                });
                Answers(5, false);
            }

            //go to next question on list
            numclicks++;
            // show results
            //show how many locations guessed correctly
            Results();
            break;
        default:
            break;
    }
}


//if the user double-clicks on the correct building location then a "===============>{CORRECT!}" mark will appear 
// next to the name of the building on the list

///if the user double-clicks on the wrong building location then a "===============>{WRONG!}" mark will appear 
// next to the name of the building on the list to indicate that the user got that location wrong
function Answers(num, correct) {
    if (correct == true)
        document.getElementById("result" + num).innerHTML = "===============>{CORRECT!}";  
    else
        document.getElementById("result" + num).innerHTML = "===============>{WRONG!}";
}


//display the number of correct locations
function Results() {
    document.getElementById("correctCount").innerHTML = correctAnswer;
}

//load the google windows map
//prior to implementing this line of code, google maps would randomly
// disappear or not load at all when I refresh the page 
// so not sure if its because I needed to put this code or if there was some sort of bug
google.maps.event.addDomListener(window, 'load', initialize);