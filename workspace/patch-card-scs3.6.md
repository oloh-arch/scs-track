# Patch Card -- SCS3.6

One real bug from the audit.  The fix, not a rewrite.  The spec and the test come before the prompt.

The bug, in one sentence: reorderList uses strict less-than (<) instead of less-than-or-equal (<=), so items whose stock equals their reorder level (such as 20 left with reorder at 20) are left out.
Which check found it (auth, edge case, wrong version, invented library): edge case
The spec for the fix, one thing: Change the stock comparison in reorderList so items with In stock less than or equal to Reorder at are included.
The test that shows the bug (input -> expected): [{ Item: "grinding discs 115 mm", Supplier: "Gas and welding supplier", "In stock": "20", "Reorder at": "20", Unit: "pieces" }] -> included in reorderList output (length 1)
The prompt, word for word: Change the stock comparison in reorderList in workspace/stock-tools/reorder.js from < to <= so items at their reorder level are included.

## The Diff, Read Whole

Every line the patch changed.  A line the spec did not ask for is marked BEYOND in the second column.

| Line | What the patch changed | In the spec? | My adjustment |
|---|---|---|---|
| reorder.js:23 | Changed parseInt(r["In stock"], 10) < parseInt(r["Reorder at"], 10) to <= | yes | Kept as-is; directly implements the spec |

Tests before the patch: 5 pass, 1 fail (includes items at exact reorder level failed with [] vs ["grinding discs 115 mm"])
Tests after the patch: 6 pass, 0 fail (node --test workspace/stock-tools/reorder.test.js)
Tests after my adjustment: 6 pass, 0 fail (no extra BEYOND lines added; diff read whole)
Commits on scs3.6-patch (the test, the patch, the adjustment): ae97f1e (test), ce6efc3 (patch), current adjustment commit (patch card)

## Receipt

1. Label: scs3.6-patch-reorder-lte
2. Tool and tier: Gemini (standard assistant session)
3. Spec and prompt: above, word for word
4. Tests or checks: node --test workspace/stock-tools/reorder.test.js (6 pass, 0 fail)
5. Rights line: not checked
6. Cost: 0
