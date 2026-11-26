# The nine breaks -- SCS3.5

| # | Break | Cannot happen because ... (line) | Found -- patched at (line, commit) |
|---|---|---|---|
| 1 | The header row counted | cannot happen because line 28 starts reading at row 2 (`record.getRange(2, 1, lastRow - 1, 6)`), skipping row 1 headers | — |
| 2 | The wrong tab | cannot happen because line 6 sets `SHEET_NAME = "Records"` and lines 16-20 throw an error listing available tabs if `Records` is missing | — |
| 3 | The number read as text | cannot happen because line 56 (`Number(row[5] || 0)`) and line 60 (`Number(row[3] || 0)`) explicitly convert cell values with `Number(... || 0)` | — |
| 4 | The boundary | cannot happen because line 45 checks `isNaN(d.getTime())` and lines 49-50 check exact `d.getMonth() === reportMonth && d.getFullYear() === reportYear` | — |
| 5 | The overwrite | cannot happen because lines 63-66 target/create `MONTHLY REPORT` only (never touching `Records`) and line 68 calls `report.clearContents()` before writing `A1:C2` | — |
| 6 | The invented piece | cannot happen because a full execution run of `generateMonthlyReport` in the Apps Script Execution log (`12:12:18 PM — Execution started` -> `12:12:18 PM — Execution completed`) executed lines 1-78 end-to-end and logged output on line 78 | — |
| 7 | The silent assumption | cannot happen because lines 12-14 throw an error if `!ss`, lines 17-20 throw an error if `!record`, and lines 23-26 exit early if `lastRow < 2` | — |
| 8 | The trigger that runs too often | cannot happen because the Apps Script trigger is configured as: Function `generateMonthlyReport`, Event source `Time-driven`, Type `Month timer`, Day of month `1st day of month`, Time `6am to 7am` (runs once per month) | — |
| 9 | The confident wrong answer | — | found -- patched at line 51, commit 57c973c (caught by the Edge case test where November rows labeled `Sale` in col B were skipped before patching line 51) |
