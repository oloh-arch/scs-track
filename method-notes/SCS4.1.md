# Method note -- SCS4.1

## 1. What I set out to do
Work through the SCS4.1 network troubleshooting, router hardening, printer checks, and documentation requirements on station TR-1000-013 while keeping notes honest and free of private data.

## 2. What I did, in order
Initialized the SCS4.1 workspace with setup-scs4.1, ran net-look on TR-1000-013 to inspect network numbers and gateway reachability, updated router-hardening.md with 'not done:' reasons where checks are pending, and ran check-scs4.1 to track progress.

## 3. How I checked it worked
Reviewed the net-look output (2026-11-25_102207), verified no passwords or secrets were placed in the markdown files, and ran check-scs4.1 to see which automated checks passed or remained NOT YET.

## 4. What went wrong and what I did about it
I did not have a paper fault log to copy from and several router, printer, and fault-card steps were not finished yet; instead of inventing steps or ticking unverified boxes, I recorded 'not done:' with reasons and kept unfinished items honest.

## 5. What I would do differently next time
Keep a paper log right beside the station from the start of every fault and hardening check, note exact values and outcomes as they happen, and only tick items or commit final evidence once each check is actually done.

## 6. What I might be wrong about, and how I would find out
I might be wrong about which specific faults or router/printer issues exist on TR-1000-013 because I have not yet run the fault cards or verified the router and printer directly; I would find out by running the lab checks and fault cards with the ladder, reviewing the results with an SA, and re-running check-scs4.1.
