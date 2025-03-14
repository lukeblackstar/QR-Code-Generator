document.addEventListener('DOMContentLoaded', function() {
    const urlInput = document.getElementById('urlInput');
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    const infoMsg = document.getElementById('infoMsg');
    
    qrCodeContainer.innerHTML = '';
    
    const qrcode = new QRCode(qrCodeContainer, {
        text: "QR Code Generator",
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    
    function updateQRCode() {
        const text = urlInput.value.trim();
        
        const qrData = text || "QR Code Generator";
        
        qrCodeContainer.innerHTML = '';
        
        try {
            
            const qrcode = new QRCode(qrCodeContainer, {
                text: qrData,
                width: 200,
                height: 200,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
            
            if (text) {
                infoMsg.textContent = "QR code gerado para o texto inserido";
            } else {
                infoMsg.textContent = "Digite um texto ou link para gerar o QR code";
            }
        } catch (error) {
            infoMsg.textContent = "Erro ao gerar o QR code: " + error.message;
        }
    }
    
    let debounceTimer;
    urlInput.addEventListener('input', function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(updateQRCode, 300); 
    });
    
     
    urlInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            clearTimeout(debounceTimer);
            updateQRCode();
        }
    });
});
