/**
 * Google Apps Script for DigMa IT Solutions
 * 
 * INSTRUCTIONS (Takes 1-2 minutes):
 * 1. Go to Google Drive (logged in with digmaitsolutions@gmail.com)
 * 2. Create a new Google Sheet named "DigMa Leads 2026"
 * 3. In the top menu, click: Extensions > Apps Script
 * 4. Delete any code in the editor, and PASTE this entire file content.
 * 5. Click the "Save" icon (Floppy disk).
 * 6. Click the blue "Deploy" button at top right > "New deployment"
 * 7. Click the gear icon next to "Select type" > choose "Web app"
 * 8. Set:
 *    - Description: "DigMa Leads Webhook"
 *    - Execute as: "Me (digmaitsolutions@gmail.com)"
 *    - Who has access: "Anyone"  <-- IMPORTANT!
 * 9. Click "Deploy", authorize permissions when prompted.
 * 10. Copy the "Web app URL" (it looks like https://script.google.com/macros/s/.../exec)
 * 11. Paste that URL into .env.local as GOOGLE_SHEET_WEBHOOK_URL
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create header row if sheet is brand new / empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Lead ID",
        "Name",
        "Email",
        "Phone",
        "Company",
        "Service",
        "Budget",
        "Client Message"
      ]);
      var headerRange = sheet.getRange(1, 1, 1, 9);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0284c7");
      headerRange.setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }
    
    // Append lead row
    sheet.appendRow([
      new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
      data.id || "",
      data.name || "",
      data.email || "",
      data.phone ? ("'" + data.phone) : "",
      data.company || "",
      data.service || "",
      data.budget || "",
      data.message || ""
    ]);
    
    // Send high-priority formatted email notification to digmaitsolutions@gmail.com
    var recipient = data.recipientEmail || "digmaitsolutions@gmail.com";
    var subject = "🚀 New Client Lead: " + (data.name || "New Client") + " - " + (data.service || "Consultation Request");
    
    var htmlBody = 
      '<div style="font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; padding: 28px; border: 1px solid #e2e8f0; border-radius: 14px; background: #ffffff;">' +
        '<div style="border-bottom: 2px solid #0284c7; padding-bottom: 14px; margin-bottom: 20px;">' +
          '<h2 style="color: #0284c7; margin: 0; font-size: 20px;">DigMa IT Solutions — New Client Inquiry</h2>' +
          '<p style="color: #64748b; font-size: 13px; margin: 4px 0 0 0;">Received via digmaitsolutions.com live website</p>' +
        '</div>' +
        '<table style="width: 100%; border-collapse: collapse; font-size: 14px;">' +
          '<tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; font-weight: 600; width: 140px;">Client Name:</td><td style="padding: 10px 0; color: #0f172a; font-weight: 700; font-size: 15px;">' + (data.name || 'Not provided') + '</td></tr>' +
          '<tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; font-weight: 600;">Work Email:</td><td style="padding: 10px 0;"><a href="mailto:' + data.email + '" style="color: #0284c7; font-weight: 600; text-decoration: none;">' + data.email + '</a></td></tr>' +
          '<tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; font-weight: 600;">Phone Number:</td><td style="padding: 10px 0;"><a href="tel:' + data.phone + '" style="color: #0f172a; text-decoration: none; font-weight: 500;">' + (data.phone || 'Not provided') + '</a></td></tr>' +
          '<tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; font-weight: 600;">Company / Org:</td><td style="padding: 10px 0; color: #0f172a;">' + (data.company || 'Not provided') + '</td></tr>' +
          '<tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; font-weight: 600;">Service Requested:</td><td style="padding: 10px 0; color: #0284c7; font-weight: 700;">' + (data.service || 'General Inquiry') + '</td></tr>' +
          '<tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding: 10px 0; color: #64748b; font-weight: 600;">Budget Range:</td><td style="padding: 10px 0; color: #0f172a;">' + (data.budget || 'Flexible / Open') + '</td></tr>' +
          '<tr><td style="padding: 12px 0; color: #64748b; font-weight: 600; vertical-align: top;">Project Brief:</td><td style="padding: 12px 0; color: #334155; line-height: 1.6; background: #f8fafc; border-radius: 8px; padding: 12px;">' + (data.message || 'No additional details provided.') + '</td></tr>' +
        '</table>' +
        '<div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">' +
          'Logged automatically to your DigMa Google Sheet at ' + new Date().toLocaleString() +
        '</div>' +
      '</div>';
      
    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      htmlBody: htmlBody
    });
    
    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
