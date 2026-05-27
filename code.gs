function findUnsubscribeLinks() {
  // --- CONFIGURATION ---
  const SHEET_ID = '1HGsBIJeR5P9b8go6wPYMsAh76ipyIjCPvv0OBTy87X4'; 
  const SEARCH_QUERY = '"unsubscribe"'; 
  const BATCH_SIZE = 500; // Process in chunks of 500

  const INSTITUTION_KEYWORDS = [
    'university', 'college', 'institute', 'academy', 'school', 
    'edu', 'alumni', 'admissions', 'registrar', 'department of'
  ];
  
  const LINK_PATTERNS = ['unsubscribe', 'optout', 'preferences', 'stop-mail', 'click-here', 'manage', 'remove'];
  // ---------------------

  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // 1. LOAD BOOKMARK: Get the index of the last email we checked
    const scriptProperties = PropertiesService.getScriptProperties();
    let startOffset = parseInt(scriptProperties.getProperty('GMAIL_OFFSET')) || 0;

    // 2. MEMORY LOGIC: Identify who is already in the sheet (to prevent duplicates)
    const existingData = sheet.getDataRange().getValues();
    const seenInstitutions = new Set();
    
    if (existingData.length > 1) {
      for (let i = 1; i < existingData.length; i++) {
        const sender = existingData[i][0];
        const emailMatch = sender.match(/<([^>]+)>/);
        const emailOnly = emailMatch ? emailMatch[1].toLowerCase() : sender.toLowerCase();
        seenInstitutions.add(emailOnly);
      }
    } else if (existingData.length === 0 || (existingData.length === 1 && existingData[0][0] === "")) {
      sheet.appendRow(['Institution/Sender', 'Last Subject', 'Unsubscribe Link', 'Date']);
      sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
    }
    // 3. SEARCH: Start from the offset and take the next BATCH_SIZE
    const threads = GmailApp.search(SEARCH_QUERY, startOffset, BATCH_SIZE);
    
    if (threads.length === 0) {
      Logger.log('No more emails found. Resetting bookmark.');
      scriptProperties.setProperty('GMAIL_OFFSET', '0'); // Reset for next time you want a full clean
      try { SpreadsheetApp.getUi().alert('No more emails found! I have reset the bookmark to the start.'); } catch (e) {}
      return;
    }

    let newCount = 0;

    threads.forEach(thread => {
      const messages = thread.getMessages();
      const lastMessage = messages[messages.length - 1];
      const body = lastMessage.getBody();
      const subject = lastMessage.getSubject();
      const from = lastMessage.getFrom();
      const date = lastMessage.getDate();

      const lowerFrom = from.toLowerCase();
      const isInstitution = INSTITUTION_KEYWORDS.some(keyword => lowerFrom.includes(keyword));
      if (!isInstitution) return;

      const emailMatch = from.match(/<([^>]+)>/);
      const emailOnly = emailMatch ? emailMatch[1].toLowerCase() : lowerFrom;
      if (seenInstitutions.has(emailOnly)) return; 

      const patternString = LINK_PATTERNS.join('|');
      const regex = new RegExp(`href="([^"]*(?:${patternString})[^"]*)"`, 'gi');
      
      let match;
      let linksFound = [];
      while ((match = regex.exec(body)) !== null) {
        linksFound.push(match[1]);
      }

      if (linksFound.length > 0) {
        const linksString = linksFound.join('\n');
        sheet.appendRow([from, subject, linksString, date]);
        seenInstitutions.add(emailOnly);
        newCount++;
      }
    });
    // 4. UPDATE BOOKMARK: Set the offset for the next run
    const newOffset = startOffset + threads.length;
    scriptProperties.setProperty('GMAIL_OFFSET', newOffset.toString());

    Logger.log(`Finished batch! Processed up to email ${newOffset}. Added ${newCount} new institutions.`);
    try { 
      SpreadsheetApp.getUi().alert(`Batch Finished!\n\nProcessed up to email: ${newOffset}\nNew institutions found: ${newCount}\n\nRun again to find the next batch!`); 
    } catch (e) {}

  } catch (err) {
    Logger.log('Error: ' + err.toString());
  }
}

/**
 * HELPER FUNCTION: Use this to manually reset the search to the beginning.
 */
function resetBookmark() {
  PropertiesService.getScriptProperties().setProperty('GMAIL_OFFSET', '0');
  Logger.log('Bookmark reset to 0.');
  try { SpreadsheetApp.getUi().alert('Bookmark reset! The next run will start from the most recent email.'); } catch (e) {}
}
