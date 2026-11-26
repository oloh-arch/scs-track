// AI-assisted, directed by hussink
function generateMonthlyReport() {
  // Paste your Google Sheet ID between the quotes below (from the URL: .../d/YOUR_ID_HERE/edit)
  // Leave blank "" if this script was opened directly from Extensions > Apps Script inside the sheet.
  const SPREADSHEET_ID = ""; 
  const SHEET_NAME = "Records";

  const ss = SPREADSHEET_ID 
    ? SpreadsheetApp.openById(SPREADSHEET_ID) 
    : SpreadsheetApp.getActiveSpreadsheet();

  if (!ss) {
    throw new Error("No active spreadsheet found. Please paste your Spreadsheet ID into SPREADSHEET_ID on line 5.");
  }

  const record = ss.getSheetByName(SHEET_NAME);
  if (!record) {
    const availableTabs = ss.getSheets().map(s => `"${s.getName()}"`).join(", ");
    throw new Error(`Sheet "${SHEET_NAME}" not found. Available tabs in "${ss.getName()}" are: ${availableTabs}`);
  }

  const lastRow = record.getLastRow();
  if (lastRow < 2) {
    Logger.log("No data rows found in " + SHEET_NAME);
    return;
  }

  const data = record.getRange(2, 1, lastRow - 1, 6).getValues();

  // Note: Months in JavaScript are 0-indexed (0 = Jan, 9 = Oct, 10 = Nov)
  const reportMonth = 10; 
  const reportYear = 2026;

  const monthName = new Date(reportYear, reportMonth, 1).toLocaleString("en", {
    month: "long"
  });
  const monthLabel = `${monthName} ${reportYear}`;

  const monthlySales = data.filter(row => {
    const cellDate = row[0];
    if (!cellDate) return false;
    
    // Handles both real Date objects and date strings
    const d = cellDate instanceof Date ? cellDate : new Date(cellDate);
    if (isNaN(d.getTime())) return false;

    return (
      d.getMonth() === reportMonth &&
      d.getFullYear() === reportYear &&
      (String(row[2]).trim().toUpperCase() === "OUT" || String(row[1]).trim().toUpperCase() === "SALE")
    );
  });

  const totalSales = monthlySales.reduce(
    (sum, row) => sum + Number(row[5] || 0), 0
  );

  const unitsSold = monthlySales.reduce(
    (sum, row) => sum + Number(row[3] || 0), 0
  );

  let report = ss.getSheetByName("MONTHLY REPORT");
  if (!report) {
    report = ss.insertSheet("MONTHLY REPORT");
  }

  report.clearContents();

  report.getRange("A1:C1").setValues([
    ["REPORT MONTH", "TOTAL SALES", "UNITS SOLD"]
  ]);

  report.getRange("A2:C2").setValues([
    [monthLabel, totalSales, unitsSold]
  ]);
  
  Logger.log(`Success: Generated report for ${monthLabel} (${unitsSold} units, ${totalSales} total sales).`);
}
