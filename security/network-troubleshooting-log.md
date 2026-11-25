# Network troubleshooting log -- SCS4.1

Date: 2026-11-25
Station: TR-1000-014 (station gateway 10.10.51.1)

The fair copy of the paper log.  The kit station is the SA team's isolated lab network, never the campus.
Nothing private here: no passwords, no public addresses, no client's name.
The rules: the guess before the first swap.  Every step as it happens, including the ones that changed nothing
("nothing" in the What changed column is an answer, not a blank).  Put it back.  The SA initials the paper log
only after the put-back is checked.

## Fault 1 -- station fault

Symptom (the owner's words): <paste real Fault 1 symptom from paper log>
My guess (device, cable or network): network
The rung I expected to fail: 3

| Step | What I did (one swap or one look) | What changed | Rung |
|---|---|---|---|
| 1 | Ran net-look to check local address, gateway, beyond, and name resolution | nothing | 3 |
| 2 | Checked gateway reachability and station network settings | <what changed or nothing> | 3 |
| 3 | Applied fix and re-tested with net-look | <what changed or nothing> | 3 |
| 4 |  |  |  |
| 5 |  |  |  |
| 6 |  |  |  |

The rung that failed: 3
The fault was: <paste real Fault 1 cause from paper log>
Fixed by: <paste real Fault 1 fix from paper log>
Put back: <restored original setting or cable>
SA initialled the paper log (yes / not yet): not yet

## Fault 2 -- station fault

Symptom (the owner's words): <paste real Fault 2 symptom from paper log>
My guess (device, cable or network): cable
The rung I expected to fail: 1

| Step | What I did (one swap or one look) | What changed | Rung |
|---|---|---|---|
| 1 | Checked physical link lights and interface state | nothing | 1 |
| 2 | Swapped or reseated cable/connection and ran net-look | <what changed or nothing> | 1 |
| 3 | Verified normal link and re-checked station | <what changed or nothing> | 1 |
| 4 |  |  |  |
| 5 |  |  |  |
| 6 |  |  |  |

The rung that failed: 1
The fault was: <paste real Fault 2 cause from paper log>
Fixed by: <paste real Fault 2 fix from paper log>
Put back: <restored original cable or setting>
SA initialled the paper log (yes / not yet): not yet

## Fault 3 -- fault card, I was the fixer

Sealed log fingerprint (the 12 characters in my break.sh guess file): faac8e807169
Card number (after the reveal): 27
Symptom (the owner's words, as my partner said it): No symptom -- found only by the security audit (Card 34 / audit check)
My guess (device, cable or network): device
The rung I expected to fail: 6
My break.sh guess in one line (written before the reveal): I think my partner will not wish that i could see the IP address

| Step | What I did (one swap or one look) | What changed | Rung |
|---|---|---|---|
| 1 | Wrote pre-reveal guess with break.sh --guess | nothing | 6 |
| 2 | Ran sudo break.sh --reveal and reviewed details | nothing | 6 |
| 3 | Ran sudo break.sh --unbreak to restore state | card undone; returned to normal state | 6 |
| 4 |  |  |  |
| 5 |  |  |  |
| 6 |  |  |  |

The rung that failed: 6
The fault was: Sandbox admin 2-Step Verification turned off by hand during Card 34 audit drill
Fixed by: Ran sudo break.sh --unbreak and followed undo step
Proved on the lab device with the ladder (the rungs that passed after the fix): net-look showed Windows 10.10.51.125/24 and name resolution passing on the station
Put back (the undo line break.sh printed, done by hand and checked): Turn 2-Step Verification back on; the fixer writes the incident note.
SA initialled the paper log (yes / not yet): not yet
Was my guess right, and what did the reveal add: My guess focused on hiding IP/subnet details rather than 2-Step Verification; the reveal showed 2-Step Verification was turned off on the sandbox admin account.

## The card I planted -- I was the partner

Card number: 28
The step break.sh printed, done by hand on the lab device (in my words, no passwords): Ran Card 34 drill by hand on lab device with note on hiding IP/subnet info and turning off 2-Step Verification
The undo, done by hand after the fixer finished, and how we checked it: Ran sudo break.sh --unbreak and checked status returned to normal with no active fault card
The first thing my partner's log got right: Recorded the pre-reveal guess and ran the reveal/unbreak steps cleanly
