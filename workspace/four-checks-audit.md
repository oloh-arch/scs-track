# Four-Checks Audit

Run all four on every AI-built piece before a client sees it.  Write what you found, not what you hoped.
'Clean' is allowed only with the evidence beside it: the command you ran and what it printed, or the
page you read and the date you read it.  One section per piece; add a new piece at the bottom each time.

## Piece 1: the stock tool (workspace/stock-tools)

### Auth
Looked for: Hardcoded API keys/secrets and insecure transport endpoints in send-sms.js
Found: Hardcoded SMS_API_KEY in send-sms.js (now moved to process.env.SMS_API_KEY in HEAD) and unencrypted http:// gateway URL on line 10
Evidence: grep -nE "SMS_API_KEY|GATEWAY" workspace/stock-tools/send-sms.js -> 9:const SMS_API_KEY = process.env.SMS_API_KEY; 10:const GATEWAY = "http://sms-gateway.example.invalid/send";

### Edge cases
Ugly inputs, written before trying them: Quoted commas ("Nails, 3 inch"), equal reorder threshold (20 vs 20), empty stock cell (""), apostrophes (ng'ombe salt lick)
Found: parseCsv splits on "," instead of CSV quoting; reorderList uses "<" instead of "<=" and hits NaN on empty stock; tidyName capitalizes after apostrophe in ng'ombe salt lick
Evidence: node -e 'const r=require("./workspace/stock-tools/reorder.js"); console.log(r.reorderList(r.parseCsv(require("fs").readFileSync("./workspace/stock-tools/stock-export.csv","utf8"))).map(x=>[x.Item,x.Supplier,x["In stock"]])); console.log(r.tidyName("ng\x27ombe salt lick"))' -> [ [ "Welding rods 2.5 mm", "Gas and welding supplier", "3" ], [ "\"Nails", " 3 inch\"", "Hardware wholesaler" ], [ "Nuts & bolts M10", "Hardware wholesaler", "40" ], [ "Oxygen refill", "Gas and welding supplier", "0" ] ] and Ng\x27Ombe Salt Lick

### Wrong versions
Looked for: Runtime version assumptions vs README claim ("Works on any Node")
Found: Object.groupBy in reorder.js requires Node 21+, even though README.md states "Works on any Node"
Evidence: node --version -> v22.22.1 (code uses Object.groupBy on reorder.js:28 which requires Node 21+, whereas README.md line 7 claims "Works on any Node")

### Invented libraries
Looked for: Non-existent exports or hallucinated modules in require/import statements
Found: send-sms.js imports fetchWithRetry from node:http, which does not exist on node:http
Evidence: node -e 'const h=require("node:http"); console.log(typeof h.fetchWithRetry)' -> undefined

The one to fix first, and why: Edge cases in reorder.js (specifically parseCsv and reorderList), because stock-export.csv already loses and misparses real inventory rows before any message is even formatted.

## Piece 2: my own SCS3.5 script

### Auth
Looked for: Hardcoded credentials, tokens, or external auth calls in /home/messina/payments.js
Found: No credentials or auth logic present in /home/messina/payments.js
Evidence: grep -nE "key|token|secret|auth|password" /home/messina/payments.js || echo "none" -> none

### Edge cases
Ugly inputs, written before trying them: Zero, negative, empty array, or non-numeric amounts
Found: Input array is hardcoded in /home/messina/payments.js with no validation for negative, zero, empty, or non-numeric values
Evidence: node /home/messina/payments.js -> Total charges: 43

### Wrong versions
Looked for: Node/JS syntax or APIs incompatible with Node v22.22.1
Found: Uses standard const/let, for...of, and console.log with no version mismatch on Node v22.22.1
Evidence: node -v && cat /home/messina/payments.js -> v22.22.1 and valid ES2015+ script

### Invented libraries
Looked for: Third-party or non-existent built-in modules in /home/messina/payments.js
Found: No require or import statements in /home/messina/payments.js
Evidence: grep -nE "require\(|import " /home/messina/payments.js || echo "none" -> none

What I will do about what I found (a fix on the sheet copy, SCS3.5's test log, or 'clean'): Keep /home/messina/payments.js's charge-tier logic on the reference copy and add input validation checks (rejecting negative or non-numeric amounts) in a test/script update before reusing it with live inputs.
