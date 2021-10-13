let displayMenu = false;
let marker_group;

var myMap = L.map("map").setView([-27.497, 153.012], 14);
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidXFpZHJ1Z28iLCJhIjoiY2tlcDdmbDV2MDc2ZjJ4bnk5bTgwcmkwbSJ9.aiKl3J-I-lVcj0iTllZlpg", 
{ 
    maxZoom: 18, 
    id: 'mapbox/streets-v11', 
    tileSize: 512, 
    zoomOffset: -1, 
    zoomControl: false,
    accessToken: 'your.mapbox.access.token'
}).addTo(myMap);

function showMenu() {
    if (displayMenu) {
        $("#btn-area").css("display", "none");
        $("#btn-density").css("display", "none");
        $("#btn-security").css("display", "none");
        displayMenu = false;
    }
    else {
        $("#btn-area").css("display", "block");
        $("#btn-density").css("display", "block");
        $("#btn-security").css("display", "block");
        displayMenu = true;
    }
}

function showHotzone() {
    showMenu();
    $("#main-icon").css("background-image", "url('./images/virus-active.png')");

    if (marker_group) {
        marker_group.clearLayers();
    }
    var polygon1 = L.polygon([
        [-27.517540, 153.020099],
        [-27.520984, 153.019431],
        [-27.521873, 153.025379], 
        [-27.518805, 153.028141]
    ], {
        color: 'red',
        fillColor: '#f03',
    });
    var polygon2 = L.polygon([
        [-27.477371, 153.012597],
        [-27.477037, 153.010688],
        [-27.476675, 153.010312], 
        [-27.478503, 153.008381], 
        [-27.479112, 153.012264]
    ], {
        color: 'red',
        fillColor: '#f03',
    });
    marker_group = new L.layerGroup([polygon1, polygon2]).addTo(myMap);
}

function showDensity() {
    showMenu();
    $("#main-icon").css("background-image", "url('./images/density-active.png')");

    if (marker_group) {
        marker_group.clearLayers();
    }
    var heatLayer = L.heatLayer([
        [-27.47763073404951, 153.0120630409684, 45],
        [-27.481208249308786, 153.01278445762898, 20], 
        [-27.48723851957189, 153.0159404136511, 10],
        [-27.481709569516617, 153.0189153199711, 10],
        [-27.487142594378092, 153.0239167725417, 10], 
        [-27.486146559883878, 153.0289182251123, 15],
        [-27.492834731645594, 153.02963835193395, 10],

        [-27.496444812792408, 153.01345206367802, 30],
        [-27.499382379698847, 153.01830870128487, 5],
        [-27.50014404714318, 153.00921473007242, 12],
        [-27.498383492084326, 153.00513685868245, 10], 
        [-27.495406489466102, 153.00160029765397, 5],
        [-27.49991997806328, 152.99777503776608, 15], 

        [-27.509810593044463, 153.02794406858024, 20], 
        [-27.51429148533162, 153.03075888257706, 10],
        [-27.51349133940921, 153.02383010994987, 15],
        [-27.518804199344643, 153.02873799056078, 10],

        [-27.51054675229589, 153.01809222011798, 6], 
        [-27.507826139806024, 153.01466392116183, 2], 
        [-27.508690341652493, 153.00903429340227, 3],
        [-27.511955042922832, 153.0113799716354, 1], 
        [-27.520355071361834, 153.02114111375462, 7]

    ], {radius: 50, blur: 40});
    marker_group = new L.layerGroup([heatLayer]).addTo(myMap);
}

function showSecurity() {
    showMenu();
    $("#main-icon").css("background-image", "url('./images/security-active.png')");

    if (marker_group) {
        marker_group.clearLayers();
    }
    var icon = L.icon({
        iconUrl: './images/attention.png',
        iconSize: [30, 30],
        iconAnchor: [15, 15], 
        popupAnchor: [10, 10]
    });
    var marker1 = L.marker([-27.499016891938656, 153.02727332637997], {icon: icon}).bindPopup("A parade is ongoing here.");
    var marker2 = L.marker([-27.508075395653105, 153.01406535312697], {icon: icon}).bindPopup("Car accident happened here.");
    var marker3 = L.marker([-27.482562438078748, 153.003996980359], {icon: icon}).bindPopup("The road blocked here.");
    marker_group = new L.layerGroup([marker1, marker2, marker3]).addTo(myMap);
}