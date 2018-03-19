var wel = document.getElementById('wel');
wel.play();
var sceneEl = document.querySelector('a-scene');
var loadedAssets = 0;

var str = {};
	str.boxEntity = sceneEl.querySelector('#chord1_obj');
	str.sound = str.boxEntity.components.sound;
	str.boxEntity.addEventListener('sound-loaded', function() {
		loadedAssets = loadedAssets + 1;
	 
	    checkLoaded();
	    
	});
	
	$( "#controls" ).hide();
	$( "#controls_small" ).hide();

$("#start_button").click(function() {
	var str = {};
	str.boxEntity = sceneEl.querySelector('#chord1_obj');
	str.sound = str.boxEntity.components.sound;
	wel.pause();
    $('#modal1').modal('close');
});

function changeButton(){
	$("#start_button").removeClass("transparent");
	$("#start_button").addClass("red");
	$("#start_button").text('Enter');
};


function checkLoaded() {
	console.log(loadedAssets + " assets loaded")
	if(loadedAssets==1){
		changeButton();
		// sceneEl.enterVR()
	};
};
