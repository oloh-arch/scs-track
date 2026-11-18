# Restore test log -- the practice business (2026-11-18)

A backup nobody has restored from is a hope.  'It worked' is not an entry: say what did not come back,
or what you checked to be sure nothing is missing.

| # | Restore | What I deleted or suspended | How I restored it | How long | What came back | What did not come back |
|---|---|---|---|---|---|---|
| 1 | The suspended user, restored whole | Suspended practice leaver account (`amina.otieno`) in `/Trainees/messina` | Admin console > Directory > Users > selected user > Reactivate | < 1 minute | User sign-in access, Gmail inbox, and un-transferred My Drive files came back intact | Files already transferred to the manager remained owned by the manager; revoked sign-in cookies required a fresh login |
| 2 | A file from the shared drive's trash | Moved a test document in the practice Shared Drive to Trash | Opened Shared Drive > Trash > right-clicked the file > Restore | < 1 minute | File returned to its original Shared Drive folder with content, version history, and member permissions intact | Verified folder path, file content, and Share permissions on screen—nothing was missing |
| 3 | A user's deleted file, restored by the admin | Permanently deleted a test file from `amina.otieno` My Drive Trash | Admin console > Directory > Users > amina.otieno > Restore data (selected today's date range and Drive) | 2 minutes | Deleted file reappeared in the user's My Drive with full document contents intact | Previous external share link did not come back; checked Share settings on screen to confirm file was private |
| 4 | One file from the export | Extracted a single document from the Takeout / owner backup drill `.zip` archive (restored at 15:10) | Extracted the `.zip` locally, opened Drive, and uploaded the single file back into the test folder | 3 minutes | File text, tables, and formatting came back readable in Google Drive | Original Google Drive sharing permissions, comments, and native Google Doc ID/URL did not come back (exported as `.docx`) |
