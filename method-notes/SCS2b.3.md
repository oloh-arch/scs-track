# Method Note -- SCS2b.3 Your First Instance

1. I verified my ed25519 SSH key permissions (600) and confirmed only the public half is shared with cloud-init.
2. Using key-based SSH authentication eliminates password brute-force risk on port 22.
3. Restricting firewall port 22 to the campus network while opening 80 and 443 to 0.0.0.0/0 separates admin access from public web traffic.
4. Always stopping (rather than leaving running or prematurely terminating) a lab instance preserves state for the next session while halting compute charges.
5. Committing each step in three parts (typed, expected, seen) creates an auditable trail when IP addresses change across restarts.
6. What I might be wrong about: assuming a firewall rule alone guarantees port 443 works—if no service is listening on 443, connections are refused rather than timed out, which I can verify with `nc -zv` or `ss -tlnp`.
