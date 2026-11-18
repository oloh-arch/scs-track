# Admin change log -- SCS3.1

Date: 2026-11-17
Sandbox admin sign-in: messina@<sandbox domain>
My unit: /Trainees/messina
Naming convention: first.last

One row per admin action, written BEFORE the click.  A ticket may take several rows; add them as you go.
Logged at: the time on the laptop clock when you wrote the row.
Console path: where you expect to click, with ">" between the steps; correct it after if the console differs.
Audit log: filled in SGL/Lab -- the time the console's audit log shows for this change, or "gap:" and why.
Never write a password here.  The first password is handed over by voice.

| # | Ticket | Logged at | What I am about to change (console path) | Who or what it affects | Why (the three questions, one line) | How I checked it | Audit log |
|---|---|---|---|---|---|---|---|
| 1   | 1 New starter    | 10:50     | Admin console > Directory > Users > Add new user                              | amina.otieno, new Front Desk starter                                          | The job needs counter email and calendar, extra access risks financial records, the owner decided             | Verified user appears active in users list and signed in via private window     | 10:50     |
| 2   | 2 Groups         | 10:55     | Admin console > Directory > Groups > Create group                             | counter@<sandbox domain>, counter staff                                       | Staff need one shared address for shift rotas, wider access exposes management mail, the shop manager decided | Verified group page lists all counter members                                   | 10:55     |
| 3   | 3 Units          | 11:00     | Admin console > Directory > Organizational units > Create organizational unit | Front Desk under /Trainees/messina/Staff                                      | Chat must be turned off for counter staff only while other staff keep it, the owner decided                   | Verified Front Desk OU appears in tree and moved new starter into it            | 11:00     |
| 4   | 4 Delegated role | 11:05     | Admin console > Account > Admin roles > Assign users                          | Accountant user in /Trainees/messina/Staff, Password Reset Admin              | The job needs password resets for staff only, full admin risks billing and data deletion, the owner decided   | Signed in as accountant and tested three actions to confirm role limits         | 11:05     |
| 5   | 5 Rollback       | 11:10     | Admin console > Account > Admin roles > Unassign users                        | Accountant user in /Trainees/messina/Staff, remove Password Reset Admin       | The role test is complete and elevated privileges are no longer needed, the trainer decided                   | Confirmed Password Reset Admin role is removed from the accountant user profile | 11:10     |

## Gaps

- 10:51 (Create User `david.kamau` in `/Trainees/messina/Staff`): created the sandbox accountant test user needed for Ticket 4 before logging a separate row; noted here so every event in the audit export is accounted for.

## SCS3.2 -- sharing, security, backups, offboarding (2026-11-18)

Practice OU only.  Every row written before the click; the check column filled after it.

| # | Time | What I am about to change (console path) | Who or what it affects | Why, in one line | How I checked it | Undo |
|---|---|---|---|---|---|---|
| 1 | 09:05 | Admin console > Apps > Google Workspace > Drive and Docs > Sharing settings > Sharing outside of organization | Practice OU (/Trainees/messina) | Restrict external file sharing to allowlisted domains only to prevent accidental data leaks (logged after click) | Tested sharing a file to an external Gmail in a private window and confirmed warning/block appeared | Set sharing outside organization back to ON with warning for Practice OU |
| 2 | 09:12 | Admin console > Apps > Google Workspace > Drive and Docs > Manage shared drives > Create shared drive | Practice business team members in /Trainees/messina | Create a central team-owned shared drive so business files survive staff turnover | Verified new shared drive appears in Drive and members have Content Manager access | Delete shared drive or remove members via Manage shared drives > Manage members |
| 3 | 09:18 | Admin console > Apps > Google Workspace > Drive and Docs > Manage shared drives > Settings | Practice shared drive | Prevent external users and viewers from downloading, printing, or copying shared drive files | Verified non-managers cannot share files outside the shared drive | Re-enable external sharing and viewer download/print in Shared drive settings |
| 4 | 09:24 | Admin console > Security > Authentication > 2-step verification | Practice OU (/Trainees/messina) | Enforce 2-Step Verification to protect accounts against stolen passwords | Checked Users list and signed in as amina.otieno to verify 2SV enrollment prompt | Turn 2-Step Verification enforcement OFF for Practice OU |
| 5 | 09:30 | Admin console > Devices > Mobile and endpoints > Settings > Universal settings > General | Practice OU (/Trainees/messina) | Require screen lock and basic device management so lost phones cannot expose business mail | Verified device policy shows active for Practice OU in Endpoint settings | Set mobile management back to Unmanaged / disable screen lock requirement for Practice OU |
| 6 | 09:36 | Admin console > Directory > Users > amina.otieno > Security > Sign-in cookies | amina.otieno | Revoke active browser and mobile sessions immediately when offboarding begins | Verified user is forced to re-authenticate on active session | N/A -- user signs back in if restored |
| 7 | 09:40 | Admin console > Directory > Users > amina.otieno > Groups | amina.otieno | Remove leaver from all staff groups so they stop receiving team emails and shared access | Verified Groups section on user profile shows 0 memberships | Re-add user to previous groups under Directory > Groups |
| 8 | 09:44 | Admin console > Apps > Google Workspace > Drive and Docs > Transfer ownership | From amina.otieno to david.kamau | Transfer leaver's My Drive files to manager before suspension so business records are preserved | Confirmed transferred folder appears in david.kamau My Drive and Drive audit log shows transfer | Transfer folder ownership back from david.kamau to amina.otieno |
| 9 | 09:48 | Admin console > Apps > Google Workspace > Drive and Docs > Manage shared drives > Manage members | amina.otieno | Remove leaver explicitly from shared drive membership list | Verified amina.otieno no longer appears in shared drive members | Re-add amina.otieno to shared drive via Manage members |
| 10 | 09:52 | Admin console > Directory > Users > amina.otieno > Suspend user | amina.otieno | Block sign-in while preserving mailbox and records during offboarding hold | Attempted sign-in as amina.otieno in private window and confirmed account is blocked | Click Reactivate on user profile in Directory > Users |
| 11 | 10:00 | Admin console > Directory > Users > amina.otieno > Reactivate (Restore drill) | amina.otieno | Verify suspended account can be restored intact during recovery test | Signed in as restored user and checked mail and Drive access | Click Suspend user again on user profile |
