# AI diagnosis receipt -- SCS4.1

One prompt, before the hands touch the kit, inside the five moves.  Nothing private in it: no router password,
no client's name, no public address, no screenshot.  The hands follow the ladder, not the tool.

Tool (and tier): Gemini (browser assistant)
Date: 2026-11-25
The fault it was for (Fault 1, 2 or 3 in the log): Fault 3
The prompt, word for word: 1 to 30 the things on my phone how to find them
Its order of checks (one line): Checked local network/address details first, then gateway and name resolution before higher layers
Where it matched the ladder: Checked local details and gateway reachability before assuming higher-layer or external faults
The rung it skipped or invented: none -- it matched
What my hands did instead, and why: Ran net-look and break.sh directly on the machine and followed the ladder rungs in order so every step had terminal/log evidence
Label: AI-assisted diagnosis, checked against the ladder
