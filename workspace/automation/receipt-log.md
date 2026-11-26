# AI receipt log -- SCS3.5

Label: AI-assisted, directed by hussink
Tool: Gemini
Spec initialled on (YYYY-MM-DD): 2026-11-19
First prompt sent on (YYYY-MM-DD HH:MM): 2026-11-19 11:45

## The one prompt, word for word
Write a Google Apps Script function called generateMonthlyReport() for Apps Script on Google Sheets with a comment on every line. Read the tab named Records with column headings Date (A), Item (B), Type (C), Quantity (D), Unit Price (E), and Line Total (F), using made-up test rows only (such as Sugar 180, Bread 60, Milk 55, Rice 150, Cooking oil). Filter rows for November 2026 where Type is OUT, sum Line Total from column F and Quantity from column D, and write REPORT MONTH, TOTAL SALES, and UNITS SOLD to A1:C2 of a tab named MONTHLY REPORT (creating the tab if missing and clearing old contents first). Do not use any real client data.

## What came back, and what I changed by hand
Gemini returned `generateMonthlyReport()` reading `Records` A2:F, filtering November 2026 `OUT` rows, reducing `row[5]` and `row[3]`, and writing `MONTHLY REPORT!A1:C2`. I added the `// AI-assisted, directed by hussink` label on line 1 and patched line 51 by hand (commit `57c973c`) so rows marked `SALE` in column B are matched alongside `OUT` in column C.

## Iteration -- only if the draft missed a line of the spec (which line)
Line 51 of the draft only checked `row[2] === "OUT"` and missed rows where the transaction type was entered as `Sale` in column B; fixed by hand at line 51 in commit `57c973c`.

## The debug move -- one real error: the message pasted whole, what my trace said first, what the tool said
Error message: `Exception: The parameters (null) don't match the method signature for SpreadsheetApp.getActiveSpreadsheet.` when tested standalone before binding; trace showed `SPREADSHEET_ID` on line 5 was blank outside a bound sheet, confirmed by the guard on lines 12-14 throwing `No active spreadsheet found. Please paste your Spreadsheet ID into SPREADSHEET_ID on line 4.`
