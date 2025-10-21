# Form2Sheet (apps-script-form-to-sheet)
A responsive **HTML + Google Apps Script** web app that collects **personal details**, uploads **photos and signatures** to **Google Drive**, and automatically stores all information in **Google Sheets**.

Built using **Tailwind CSS** for modern UI design and **Vanta.js** for an animated background effect.

---

## 🚀 Features

✅ Collects user data (Name, Email, Phone, Gender, DOB, Address)  
✅ Uploads photo and signature images to Google Drive  
✅ Automatically saves form data and file links in Google Sheets  
✅ Responsive layout (works on mobile, tablet, and desktop)  
✅ Built with modern front-end design (Tailwind CSS)  
✅ Animated background using Vanta.js for enhanced visual appeal  
✅ Clean Apps Script backend with structured code and comments  



## 🗂️ Project Structure

📦 html-form-to-google-sheet
├── Code.gs           # Google Apps Script backend logic
├── form.html         # HTML form and frontend JS logic
└── README.md         # Project documentation (this file)



## ⚙️ How It Works

1. The user opens the web app (deployed via Google Apps Script).  
2. The HTML form collects details such as name, email, phone number, etc.  
3. When the user uploads a photo or signature:
   - The files are converted to **Base64** format on the client side.
   - The encoded data is sent to Apps Script via `google.script.run`.
4. The Apps Script backend:
   - Saves the photo and signature to **Google Drive** (in a specified folder).
   - Logs the form details and file links in **Google Sheets**.
5. A confirmation message is shown once the form is successfully submitted.



## 🧠 Technologies Used

| Technology                | Purpose                                           |
|---------------------------|---------------------------------------------------|
| **Google Apps Script**    | Backend logic for form submission and file saving |
| **HTML, CSS, JavaScript** | Front-end form and client logic                   |
| **Tailwind CSS**          | Modern and responsive UI styling                  |
| **Vanta.js + Three.js**   | Animated background visualization                 |
| **Google Drive API**      | File storage for uploaded photos/signatures       |
| **Google Sheets API**     | Data storage and logging                          |



## 🪄 Setup Instructions

Follow these steps to deploy your form:

### 1️⃣ Create a New Google Apps Script Project
- Go to [https://script.google.com/](https://script.google.com/)
- Click **New Project**
- Rename your project (e.g., 'HTML Form to Sheet')

### 2️⃣ Add Files
Create the following two files in your Apps Script editor:
- code.gs
- form.html

Then paste the respective code from this repository.



### 3️⃣ Set Up a Google Sheet
- Open a new **Google Sheet**
- Name it (e.g., 'Form Data')
- Go to **Extensions → Apps Script**
- Paste your script here if not already done.



### 4️⃣ Add a Google Drive Folder
- Go to [Google Drive](https://drive.google.com)
- Create a folder named **FormUploads**
- Copy its **Folder ID** (the long string after '/folders/' in the URL)
- Paste the Folder ID into your Apps Script:
  ```js
  const driveFolder = DriveApp.getFolderById("YOUR_FOLDER_ID_HERE");



### 5️⃣ Deploy as a Web App

* In the Apps Script editor, click **Deploy → New deployment**
* Under **Select type**, choose **Web app**
* Set:

  * **Execute as:** Me (your account)
  * **Who has access:** Anyone with the link
* Click **Deploy** and authorize the app.

You’ll get a **Web App URL** — this is your form’s public link.



## 📄 Example Data Saved in Sheet

| Timestamp  | Name     | Email                                       | Number     | Gender | DOB        | Address | Photo Link      | Signature Link      |
| ---------- | -------- | ------------------------------------------- | ---------- | ------ | ---------- | ------- | --------------- | ------------------- |
| 2025-10-21 | John Doe | [john@example.com](mailto:john@example.com) | 9876543210 | Male   | 2000-05-10 | Mumbai  | [View Photo](#) | [View Signature](#) |



## 🧩 Key Functions

### `doGet()`

Serves the HTML form page to users when they access the web app URL.

### `submitData(data)`

Handles form submissions:

* Uploads photo and signature files to Drive
* Appends user details and file URLs to Google Sheets

### `saveFileToDrive(folder, fileObject, prefix)`

Utility function to decode Base64 and create Drive files with accessible URLs.



## 🎨 UI Highlights

* **Tailwind CSS** for clean, modern styling
* **Vanta.js Globe Effect** for dynamic animated background
* **Live file preview** before upload (photo & signature)
* **Responsive layout** for all devices



## 🧰 Customization Tips

* ✏️ Add new form fields → update both HTML and `sheet.appendRow()`
* 🗂 Change Drive folder → replace the folder ID in `Code.gs`
* 🌈 Change colors → modify Tailwind classes or Vanta.js colors
* 🧾 Add Sheet headers manually for better readability



## 🛠 Troubleshooting

| Issue                          | Possible Fix                                                              |
| ------------------------------ | ------------------------------------------------------------------------- |
| Files not uploading            | Check Drive Folder ID and permissions                                     |
| “Authorization required” error | Re-deploy and authorize again                                             |
| No data in sheet               | Ensure active sheet is correct in `SpreadsheetApp.getActiveSpreadsheet()` |
| Background not showing         | Ensure `three.min.js` and `vanta.globe.min.js` URLs are accessible        |



## 🧑‍💻 Author

**Vedant Kawale**
📧 *[Add your contact email or portfolio link]*
💡 Built for personal and educational use with Apps Script and modern web design.



## 🪪 License

This project is licensed under the **MIT License** — free to use, modify, and share.



> ✨ *A simple yet powerful solution for collecting and managing form data using Google’s ecosystem — no backend server needed!*
