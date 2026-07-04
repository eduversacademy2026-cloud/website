/**
 * ===================================================================
 * GOOGLE APPS SCRIPT — Eduverse Academy Contact Form to Google Sheets
 * ===================================================================
 *
 * SETUP INSTRUCTIONS:
 * 
 * 1. Create a new Google Sheet (name it "Eduverse Academy Leads")
 * 2. Add these headers in Row 1:
 *    A1: Timestamp | B1: Name | C1: Phone | D1: Email
 *
 * 3. Open Extensions → Apps Script
 * 4. Delete any existing code and paste this entire file
 * 5. Click Deploy → New Deployment
 * 6. Choose "Web app" as type
 * 7. Set:
 *    - Description: "Contact Form Handler"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 8. Click Deploy, authorize when prompted
 * 9. Copy the Web App URL
 * 10. Paste that URL in your React app's Contact.jsx file 
 *     (replace YOUR_DEPLOYMENT_ID in GOOGLE_SCRIPT_URL)
 *
 * ===================================================================
 */

// The ID of your Google Sheet (from the URL)
// https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
const SPREADSHEET_ID = SpreadsheetApp.getActiveSpreadsheet().getId();
const SHEET_NAME = 'Sheet1'; // Change if your sheet tab has a different name

/**
 * Handles POST requests from the contact form
 */
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    let data;
    
    // Handle both JSON body and form-encoded data
    if (e.postData && e.postData.type === 'application/json') {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    } else {
      return ContentService.createTextOutput(
        JSON.stringify({ status: 'error', message: 'No data received' })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Extract fields
    const name = data.name || '';
    const phone = data.phone || '';
    const email = data.email || '';
    const timestamp = data.timestamp || new Date().toISOString();

    // Format timestamp for readability
    const formattedDate = new Date(timestamp).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    // Append row to sheet
    sheet.appendRow([formattedDate, name, phone, email]);

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'success', message: 'Data saved successfully' })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handles GET requests (for testing)
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok', message: 'Eduverse Academy form endpoint is active.' })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Optional: Send email notification when a new lead comes in
 * Uncomment and update the email address if you want notifications
 */
// function sendNotification(name, phone, email) {
//   const recipient = 'contact@eduverseacademy.in';
//   const subject = `New Lead: ${name}`;
//   const body = `
//     New contact form submission:
//     
//     Name: ${name}
//     Phone: ${phone}
//     Email: ${email}
//     Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
//   `;
//   MailApp.sendEmail(recipient, subject, body);
// }