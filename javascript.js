const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', () => {
  // Asegúrate de que el archivo slinky.zip esté en la misma carpeta que el index.html
  const a = document.createElement('a');
  a.href = "slinky.zip"; 
  a.download = "slinky.zip";
  a.click();
});
