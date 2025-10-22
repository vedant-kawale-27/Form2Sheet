// doGet() — Entry point when the web app URL is accessed.
// Loads and serves the HTML file to the user.
function doGet() {
  return HtmlService.createHtmlOutputFromFile('form')
   .setTitle('Personal Details Form')
   // Add a meta tag to make the page mobile responsive
   // Ensures proper scaling on phones, tablets, and desktop
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// Function to handle the form submission
function submitData(data) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const driveFolder = DriveApp.getFolderById("1g7Nr59Ab62aW6l-QvTDtoyt3_c6K1S9f"); // <-- IMPORTANT: Add your Folder ID

    // 1. Handle the Photo upload
    let photoLink = '';
    if (data.photo && data.photo.base64) {
      photoLink = saveFileToDrive(driveFolder, data.photo, 'Photo');
    }
    const photoMatch = photoLink.match(/\/d\/([a-zA-Z0-9_-]+)/);
    const photoFileId = photoMatch[1];
    let photoDirectLink = `https://drive.google.com/uc?export=view&id=${photoFileId}`;

    // 2. Handle the Signature upload
    let signatureLink = '';
    if (data.signature && data.signature.base64) {
      signatureLink = saveFileToDrive(driveFolder, data.signature, 'Signature');
    }
    const signatureMatch = signatureLink.match(/\/d\/([a-zA-Z0-9_-]+)/);
    const signatureFileId = signatureMatch[1];
    let signatureDirectLink = `https://drive.google.com/uc?export=view&id=${signatureFileId}`;

    // 3. Append the row with text data and LINKS to the files
    sheet.appendRow([
      new Date(),       // Timestamp (Good practice)
      data.name,
      data.email,
      data.number,
      data.gender,
      data.dob,
      data.address,
      '=IMAGE("'+photoDirectLink+'", 1)',        // Show the photo in sheet
      '=IMAGE("'+signatureDirectLink+'", 1)'     // Show the signature in sheet
    ]);

    // Return a success message to the client-side JavaScript
    return { status: 'ok' };

  } catch (e) {
    // Return an error message to the client-side JavaScript
    Logger.log(e);
    return { status: 'error', message: e.message };
  }
}

/**
 * Helper function to save a Base64 encoded file to Google Drive
 * @param {Folder} folder - The Google Drive folder to save the file in.
 * @param {object} fileObject - The file object from the client (with base64, contentType, filename).
 * @param {string} prefix - A prefix for the filename (e.g., "Photo" or "Signature").
 * @returns {string} The URL of the newly created file.
 */
function saveFileToDrive(folder, fileObject, prefix) {
  const { base64, contentType, filename } = fileObject;
  
  // Decode the Base64 string into a blob
  const decoded = Utilities.base64Decode(base64, Utilities.Charset.UTF_8);
  const blob = Utilities.newBlob(decoded, contentType, `${prefix}_${filename}`);
  
  // Create the file in the specified folder
  const file = folder.createFile(blob);
  
  // Return the URL of the file
  return file.getUrl();
}
