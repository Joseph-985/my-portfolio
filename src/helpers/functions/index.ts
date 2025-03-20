export function downloadCvPDFHandler(fileName = "CV.pdf") {
  const filePath = `/${fileName}`; // Path to the file in public directory
  const link = document.createElement("a");
  link.href = filePath;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
