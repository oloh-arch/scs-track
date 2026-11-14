# Deploy Log -- SCS2b.2

Site address: https://oloh-arch.github.io/duka-site/

1. **Enable GitHub Pages on `duka-site`**
   - **Clicked or typed:** Opened `github.com/oloh-arch/duka-site` -> Settings -> Pages -> Source: Deploy from a branch -> Branch: `main` `/ (root)` -> Save.
   - **Expected:** GitHub Pages builds from `main` and publishes the site at `https://oloh-arch.github.io/duka-site/`.
   - **Seen:** GitHub Pages displayed the live site URL `https://oloh-arch.github.io/duka-site/`.

2. **Verify HTTPS Redirect and Browser Padlock**
   - **Clicked or typed:** Requested `http://oloh-arch.github.io/duka-site/` over HTTP.
   - **Expected:** HTTP redirects automatically to HTTPS (`https://oloh-arch.github.io/duka-site/`) with a valid TLS certificate.
   - **Seen:** Redirected cleanly to `https://oloh-arch.github.io/duka-site/` with the padlock active.

3. **Add Custom `404.html` and Verify Missing Route**
   - **Clicked or typed:** Created `404.html` with relative links in `duka-site`, committed, pushed, and opened a non-existent path under `https://oloh-arch.github.io/duka-site/`.
   - **Expected:** GitHub Pages serves my custom `404.html` with HTTP status 404 instead of GitHub's default 404 page.
   - **Seen:** The missing URL returned HTTP 404 and rendered my custom `404.html`.
