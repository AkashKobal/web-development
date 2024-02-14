function generateQRCode() {
    let userInput = document.getElementById('userInput');
    let qrBox = document.getElementById('qrBox');
    let qrImage = document.getElementById('qrImage');

    if(userInput.value ==""){
        alert("Please enter a Text or URL");
    }else{

        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + userInput.value;
    }


}