document.getElementById("startScan").addEventListener("click", function() {
    const html5QrCode = new Html5Qrcode("scanner");

    html5QrCode.start(
        { facingMode: "environment" }, // Use the environment camera
        {
            fps: 10, // Frame rate
            qrbox: 250 // Size of the scanning box
        },
        (decodedText, decodedResult) => {
            // Handle the scanned data
            document.getElementById("result").innerText = decodedText;
            html5QrCode.stop().then(() => {
                // QR Code scanning stopped.
            }).catch(err => {
                console.error("Failed to stop scanning.", err);
            });
        },
        (errorMessage) => {
            // Handle scanning error
            console.warn("QR Code no longer in front of camera.", errorMessage);
        }
    ).catch(err => {
        console.error("Failed to start scanning.", err);
    });
});
