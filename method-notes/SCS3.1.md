# Method note -- SCS3.1

## 1. What I set out to do
Configure core Google Workspace directory access for a small shop sandbox—creating a new starter user, grouping staff by communication need, separating settings by organizational unit, testing a scoped delegated admin role, and rolling it back cleanly with a log-before-click audit trail.

## 2. What I did, in order
I wrote each planned change in admin-change-log.md before clicking in the console: created the new Front Desk starter and handed over the initial password by voice, created the counter staff group, created the Front Desk organizational unit to restrict Chat while keeping it on for Staff, assigned and tested Password Reset Admin on the accountant account across three test actions, and unassigned the role afterward.

## 3. What went wrong, and how I fixed it
My delegated sandbox sign-in lacked direct CSV export privileges for the users list and admin audit log, and an initial CSV check pulled the wrong trainee unit. I worked with the SA/trainer to verify the export for /Trainees/messina and updated my change log and reference access map to match the exact unit paths and least-privilege rules.

## 4. How long it took, against the plan
The core directory changes took about 25 minutes as planned, while verifying CSV exports, reconciling unit paths, and completing the reference access map and overtime notes added roughly 45 minutes.

## 5. One lesson for the next person
Never rely on memory or AI menu guesses—write the exact console path and reason into the change log before clicking, keep settings on organizational units rather than groups, and verify every change from both the admin side and a signed-in user window.

## 6. What I might be wrong about, and how I would find out
I might have over-restricted app settings on the Workshop or Front Desk units in the reference access map compared to how staff actually share schedules on the floor; I would find out by shadowing a counter shift and a driver dispatch for one morning and asking the shop manager which tools blocked real work.
