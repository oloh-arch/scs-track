# Instance Log -- SCS2b.3

## Step 0: SSH Key Verification
- **Typed:** `ls -la ~/.ssh/id_ed25519*` and `stat -c '%a' ~/.ssh/id_ed25519`
- **Expected:** Both `~/.ssh/id_ed25519` (mode `600`) and `~/.ssh/id_ed25519.pub` exist in `~/.ssh`, with no private key inside `~/scs`.
- **Seen:** Confirmed `~/.ssh/id_ed25519` is mode `600`, labeled `oloo.stephan@learninglions.org`, and `~/.ssh/id_ed25519.pub` is ready to pass to cloud-init.
