function downloadVideo(event, filePath) {
    event.preventDefault();
    const link = document.createElement('a');
    link.href = filePath;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  