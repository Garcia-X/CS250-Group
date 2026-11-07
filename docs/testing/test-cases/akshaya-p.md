# Test Cases: [Akshaya P]

**Team number:** [11]
**My area:** [Data Storage]

<!--
HOW TO USE THIS FILE
1. Copy this file. Name the copy with your first name and last initial, like  maria-g.md
2. Leave TEMPLATE.md untouched for your teammates.
3. If a Part 6 test belongs to your area, upgrade it first and put it in the first block.
   Write at least 4 test cases using at least 3 test types. Include 1 Acceptance test that traces to your Stakeholder Goal.
   Run every test on the inherited system. Every Fail gets a GitHub Issue.
4. Copy the block between the lines for each new test case.
5. Test IDs: use your initials plus a number, like  MG-01, MG-02. This keeps IDs unique across your team.
   "Traces to" must name one of YOUR requirement IDs, like REQ-MG-02.
6. See docs/TESTING_FIELD_GUIDE.md for the sample test case TC-00.
-->

---

**Test ID:** TC-AP-01
**From Part 6:** TC-1
**Written by:** Oliver Beutz
**Title:** No houssehold name provided
**Traces to:** REQ-RR-01
**Test type:** Acceptance
**Preconditions:** Running Roommate Chore Manager 
**Test data:** 
householdName: "", userName: "SkibidiSigma6767"

**Steps:**
1. Enter nothing in the household name text box
2. Enter username "SkibidiSigma6767"
3. Press the "Create Household" button closest to the username text box

**Expected result:** Block the user, tell them they cannot make a household with an empty name, then wait until there is a valid, non-empty input for the household name
**Actual result:** A popup telling the user "Please fill out this empty field," blocking users from actually creating a new household
**Status:** Pass
**Severity:** Major
**V or V:** Verification
**GitHub Issue:** N/A

---

**Test ID:** TC-AP-02
**From Part 6:** TC-2
**Written by:** Raquel Ramos-Ramirez
**Title:** Happy path expected inputs
**Traces to:** G-RR-01
**Test type:** System (End-2-End) 
**Preconditions:** Both the username and the household name must be non-empty strings and under 250 characters, running Roommate Chore Manager
**Test data:** householdName: "ourhouse", username: "dorm2306"

**Steps:**
1. Enter household name "ourhouse"
2. Enter username "dorm2306"
3. Press the "Create Household" button closest to the username text box

**Expected result:** Household created! Name: ourhouse | ID: some-rng-id-number | Code: some-rng-code | User: dorm2306
**Actual result:** Household created! Name: ourhouse | ID: 9f231f20-9618-4cf9-b675-691e8e458797 | Code: 5A9L3E2 | User: dorm2306
**Status:** Pass
**Severity:** Major
**V or V:** Verfication
**GitHub Issue:** N/A

---

**Test ID:** TC-AP-03
**From Part 6:** TC-3
**Written by:** Akshaya Pathipati
**Title:** Household name over character limit (250 chars)
**Traces to:** REQ-RR-01
**Test type:** Negative
**Preconditions:** Household name and username are non-empty strings, with household name being over 250 characters, and running Roommate Chore Manager
**Test data:** householdName: "ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp",
userName: "person1"


**Steps:**
1. Enter household name "ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp" (251 ps)
2. Enter username "person1"
3. Press the "Create Household" button closest to the username text box

**Expected result:** Blocking the user from creating a household with an error message akin to "Household name must be 250 characters or less"
**Actual result:** Household created! Name: ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp | ID: fa8c7376-87bb-4f9e-a903-a244ca905775 | Code: I76TM4X | User: person1
**Status:** Fail
**Severity:** Major
**V or V:** Verification
**GitHub Issue:** 

---

**Test ID:** TC-AP-04
**From Part 6:** New
**Written by:** Akshaya Pathipati
**Title:** 
**Traces to:**
**Test type:**
**Preconditions:**
**Test data:**

**Steps:**
1.
2.
3.

**Expected result:**
**Actual result:**
**Status:**
**Severity:**
**V or V:**
**GitHub Issue:**

---
