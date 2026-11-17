# Access map -- the reference shop (an invented business) -- SCS3.1

Who should have which access, and why?  One row per person, or per identical job.
Groups are people; units are settings; every person is in one unit and many groups.
Why: the three questions in one line -- what the job needs, what goes wrong with more, who decided.
This map is of an invented business and may be committed.  Your client's map never comes here:
it lives in the client folder (Clients, in your Windows SCS folder).

| Person (job) | What the job needs | OU | Groups | Admin role | Why (one line) |
|---|---|---|---|---|---|
| The owner | Full company oversight, billing control, and ultimate account recovery | /Shop/Management | all-staff@shop.example, management@shop.example | Super Admin | The job needs full tenant control and recovery, giving this to others risks total business takeover, the owner decided |
| The accountant (a sandbox user, ticket 4) | Email, Drive, and staff password resets without touching billing or deletions | /Shop/Staff | all-staff@shop.example, finance@shop.example | Password Reset Admin | The job needs finance tools and staff password resets, full admin risks unauthorized data deletion or billing changes, the owner decided |
| The shop manager | Day-to-day floor supervision, schedules, and shared shop communications | /Shop/Management | all-staff@shop.example, management@shop.example, counter@shop.example | none | The job needs team scheduling and floor oversight, admin console access risks accidental policy changes, the owner decided |
| Counter staff (four) | Customer bookings, shared counter inbox, and basic Drive without internal chat | /Shop/Staff/Front Desk | all-staff@shop.example, counter@shop.example | none | The job needs customer email and shift rotas, wider staff access exposes financial records and unmonitored chat, the shop manager decided |
| The new starter (a sandbox user, ticket 1) | Counter email, shared calendar, and rota access from day one without chat | /Shop/Staff/Front Desk | all-staff@shop.example, counter@shop.example | none | The job needs counter email and rota visibility, broader access risks exposing confidential finance or HR files, the shop manager decided |
| Welders (three) | Workshop job sheets, safety notices, and basic email without office tools | /Shop/Workshop | all-staff@shop.example, workshop@shop.example | none | The job needs workshop schedules and safety updates, office and admin access risks accidental file edits, the shop manager decided |
| Drivers (two) | Delivery manifests, dispatch alerts, and mobile email on the road | /Shop/Workshop | all-staff@shop.example, drivers@shop.example | none | The job needs route manifests and dispatch updates, broader internal access risks data leaks if a phone is lost, the shop manager decided |
| Me (the admin) | Scoped setup and troubleshooting of users, groups, and OUs during rollout | /Shop/IT | all-staff@shop.example, it-admin@shop.example | User Management Admin | The job needs user and group administration during setup, permanent Super Admin creates an unnecessary takeover target, the owner decided |

## The partner's cold read

Partner: Anyieth Mary.  One person with more than the job needs, or "none" and why: none -- every row limits admin roles to the minimum needed and separates settings by OU from mailing lists by group.
