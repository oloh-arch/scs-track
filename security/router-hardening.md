# Router hardening record -- SCS4.1

Date: 2026-11-25
Station and router (the kit station's router, never the campus): TR-1000-014 / gateway 10.10.51.1
Admin page address (the router's own address): 10.10.51.1
DHCP range: <paste router DHCP range from router admin page>
Firmware date seen on the router: not done: not verified on router admin page yet

Tick a line [x] only when it is done and checked.  A line not done says why, on the same line.
Never write a password here.  The admin password and the wifi passphrase go on the owner's card, and on the
kit the owner's card goes to the SA.  The screenshot goes to ~/scs/evidence/scs4.1, checked for passwords first.

1. [ ] Admin password changed from the default, on the owner's card, nowhere on the wall -- not done: not verified with SA yet
2. [ ] Wifi on WPA2 or WPA3 with a long passphrase -- three words and a number, not the shop's phone number -- not done: not verified on router yet
3. [ ] Network name gives away neither the router model nor the owner's name -- not done: not verified on router yet
4. [ ] A guest network for customers, so the till and the printer are not on the strangers' wifi -- not done: not verified on router yet
5. [ ] DHCP range noted; the printer's address reserved on the router (or fixed on the printer outside the range) -- not done: reservation not confirmed yet
6. [ ] WPS off; remote admin from the internet off -- not done: not verified on router yet
7. [ ] Firmware date noted; an update only if the SA says it is safe today -- not done: not verified with SA yet
8. [ ] Router restarted afterwards and the four numbers read again on a laptop -- still right -- not done: not re-checked after restart yet

## The printer

Printer's address (from its own panel or test page): 10.10.15.37 (HP Color LaserJet Pro MFP 4303, DHCP; gateway 10.10.15.1)
Reserved on the router (yes / no): yes
Added on a lab laptop by address, test page printed (yes / no): yes
Added on a phone, test page printed (yes / no): yes
Router restarted without the reservation first -- what happened: not done: not tested yet
Second look, the next SCS track day -- still at its address after the SAs' power-off (yes / no): not done: next SCS track day
Anything mechanical, named and referred (not opened): none
