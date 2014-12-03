var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        pictureSource=navigator.camera.PictureSourceType; 
        destinationType=navigator.camera.DestinationType;
        FastClick.attach(document.body);
        // app.receivedEvent('deviceready');
    }
};

window.onload=function(){
    document.getElementById("foto").style.width = (window.innerWidth-100)+"px";
    document.getElementById("foto").style.height = (window.innerWidth-100)+"px";
    document.getElementById("foto").style.backgroundImage="url('img/cordova.png')";
    document.getElementById("foto").style.backgroundSize="50% 50%";
};

function capturePhoto() { 
    navigator.camera.getPicture(onSuccess, onFail, { quality: 90, 
        destinationType: Camera.DestinationType.DATA_URL, 
        correctOrientation: true, 
        targetWidth: 1000, 
        targetHeight: 1000 
    }); 
}

function getPhoto(source) { 
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 90, 
        destinationType: destinationType.FILE_URI, 
    sourceType: source }); 
}

function onSuccess(imageData) { 
    document.getElementById("foto").style.backgroundImage="url('data:image/jpeg;base64,"+imageData+"')"; 
    document.getElementById("foto").style.backgroundSize="100% 100%"; 
} 

function onPhotoURISuccess(imageURI) { 
    document.getElementById("foto").style.backgroundImage="url('"+imageURI+"')"; 
    document.getElementById("foto").style.backgroundSize="100% 100%"; 
}

function onFail(message) { 
    alert('Failed because: ' + message); 
}

function viewProduct(id) {
	if(id == 1) window.location='view/product.html';
    if(id == 2) window.location='view/index2.html';
    if(id == 3) window.location='product2.html';
}