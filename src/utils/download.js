const fileName = 'Caseria-Mary-Therese-Resume.pdf';
const fileLocation = `/public/files/${fileName}`;

export const downloadResume = () => {
  let alink = document.createElement("a");
  alink.href = fileLocation;
  alink.download = "Caseria-Mary-Therese-Resume.pdf";
  alink.click();
}