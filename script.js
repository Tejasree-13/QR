document.getElementById('generate-btn').addEventListener('click', () => {
  const data = document.getElementById('url-input').value;
  const qrCodeDiv = document.getElementById('qr-code');
  qrCodeDiv.innerHTML = '';

  if (data) {
      new QRCode(qrCodeDiv, {
          text: data,
          width: 300,
          height: 270,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H
      });
  } else {
      qrCodeDiv.innerHTML = 'Please enter a URL';
  }
});
