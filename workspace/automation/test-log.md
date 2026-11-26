# Test log -- SCS3.5

| Case | Input rows (made up) | Expected (by hand, before the run) | Actual (after the run) | Pass or fail | Patch (line, commit) |
|---|---|---|---|---|---|
| Test 1 | 7 November 2026 sales rows in Records (Sugar, Bread, Milk, Rice, Cooking oil) | November 2026, TOTAL SALES = 10460, UNITS SOLD = 18 | MONTHLY REPORT A2:C2 wrote November 2026, 10460, 18 | pass | — |
| Test 2 | Same 7 November 2026 sales rows plus 1 November 2026 restock/in row (20 units, 3200 KES) | November 2026, TOTAL SALES = 10460, UNITS SOLD = 18 (restock row excluded) | MONTHLY REPORT A2:C2 stayed November 2026, 10460, 18 | pass | — |
| Edge case | Boundary row dated 31/10/2026 plus November 2026 row marked Sale in col B instead of Out in col C | 31/10/2026 excluded; November Sale row included -> TOTAL SALES = 10460, UNITS SOLD = 18 | First run skipped Sale in col B; patched line 51 by hand and re-ran -> matched hand total | fail -> pass | line 51, commit 57c973c |
| Second edge case (optional, SGL menu) | Blank date row and GAP text price row in Records | Blank date skipped; GAP coerced to 0 without crashing | Script completed cleanly with no NaN or error | pass | — |
| Partner as a careless owner | Ran twice in a row after editing a quantity in Records | Old MONTHLY REPORT row cleared and replaced cleanly without duplicate rows | report.clearContents() cleared old values and wrote updated A2:C2 | pass | — |
| Re-run in front of the trainer | Live re-run on Copy of KIOSK BACK OFFICE during SGL defence | November 2026, 10460, 18 in MONTHLY REPORT A2:C2 | Verified ready for live SGL defence | pending SGL | — |
