## Stack
- Node.js (v22.22.1) and CommonJS scripts in workspace/stock-tools/
- Git repository at ~/scs/projects/scs-track

## Tests
- Run `node --test workspace/stock-tools/reorder.test.js` before committing changes to reorder logic
- Run `node workspace/stock-tools/reorder.js workspace/stock-tools/stock-export.csv` to verify output

## Never
- Never commit API keys, secrets, or unencrypted `http://` gateway URLs (found in send-sms.js during today's audit)
- Never use `Object.groupBy` without checking Node version compatibility (found in reorder.js vs README.md)
- Never import unverified functions like `fetchWithRetry` from `node:http` (found in send-sms.js)
- Never leave edge-case bugs (`<` vs `<=`, empty stock cells, quoted commas, apostrophes) uninspected
