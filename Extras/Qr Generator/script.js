
let qrcode = new QRCode(
    document.querySelector(".qrcode")
);

function generateQr() {
    if (
        document.querySelector("input")
            .value === "" ||
        document.querySelector("input")
            .value === " ") {
        window.location.reload();
    }
    else {
        qrcode.makeCode(
            document.querySelector(
                "input"
            ).value);
    }
}