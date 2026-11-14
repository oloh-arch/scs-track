# SCS2.3 Method Note -- Ship a Multi-Page Site
- Framed a three-page site (index.html, services.html, contact.html) in its own Git repo with one shared nav and stylesheet.
- Kept every file and folder lowercase without spaces and used relative paths so both nginx and GitHub Pages resolve assets cleanly.
- Verified every internal link, image alt text, and placeholder removal locally with check-scs2.3 before pushing.
- Rehearsed server deployment onto scs-server using deploy-scs2.3 from the last committed HEAD.
- Published live to GitHub Pages and audited every live route with check-scs2.3 --url.
