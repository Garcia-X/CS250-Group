Team number and all names at the top. These sections in order:
1. Bug Triage Table: one row per failing test with these columns: Test name, Bucket, Issue link, Severity, Priority, Owner, Status
2. Regression Log: every time a fix broke an old test, list the fix, the test that broke, and how it was resolved. If nothing broke, write "No regressions found" and list the dates you ran the full suite.
3. Final Test Run: embed final_test_run.png from main after freeze. List any test still failing with a one-line reason.
4. Feature Decision: feature name, one user story ("As a ___, I want ___, so that ___"), why your team chose it, who owns which part, and 2 test cases you will use to know it works
5. Board Snapshot: embed board.png showing bug Issues in Done
![board.png](board.png)
6. Sprint Summary: one paragraph on what is fixed, what is still broken, and what to look at first next sprint
Household names have been restreicted to between 1 (exclusive) and 250 (inclusive) characters. automated.test.js no longer clogs the database. Redundancy of teo server.js files has been removed. Household names must be disctinct from other household names and usernames. Double-clicking submit no longer creates two households. Users can now delete household from the dashboard. There is now a membership check for joining households. There still is no dashboard nor account making.