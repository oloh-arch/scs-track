# Weekly Stock Reorder Check

## When to use it
Every week when preparing the shop's stock reorder list from the latest CSV export.

## Steps
1. Place the latest CSV export in `workspace/stock-tools/stock-export.csv`.
2. Run `node --test workspace/stock-tools/reorder.test.js` to confirm tests pass.
3. Run `node workspace/stock-tools/reorder.js workspace/stock-tools/stock-export.csv` to generate the grouped reorder list.
4. Review the output for missing items or formatting issues before sharing.

## How you know it worked
The test suite exits with 0 failures and `reorder.js` prints `Reorder list` grouped by supplier.

Ran: 2026-11-24 — Ran `node workspace/stock-tools/reorder.js workspace/stock-tools/stock-export.csv`; printed `Reorder list` with `Gas and welding supplier` and `Hardware wholesaler` entries.
