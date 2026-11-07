# Test Cases: Katie L

**Team number:** 11
**My area:** Log in

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

**Test ID:**
TC-KL-01
**From Part 6:** 
New
**Written by:**
Katie Le
**Title:**
Log in with valid username and password
**Traces to:**
REQ-KL-01, G-KL-01
**Test type:** 
Acceptance
**Preconditions:**
registered user, login page acccessible
**Test data:**
username: roommate1
password: Password123
**Steps:**
1. Open the Roommate Chore Manager login page
2. Enter registered username and password
3. Click log in button

**Expected result:**
The user successfully logs in and can access their household and chore information
**Actual result:**
NOTHING, CODE DOES NOT EXIST / FEATURE IS NOT COMPLETED
**Status:** 
Fail
**Severity:** 
Major
**V or V:** 
Verification 
**GitHub Issue:**
#97

---

**Test ID:**
TC-KL-02
**From Part 6:** 
New
**Written by:**
Katie Le
**Title:**
Reject login with incorrect password
**Traces to:**
REQ-KL-02
**Test type:** 
Negative
**Preconditions:**
registered user, login page acccessible
**Test data:**
username: roommate1
password: wrongpassword
**Steps:**
1. Open Roommate Chore Manager login page
2. Enter registered username and incorrect password
3. Click log in button

**Expected result:**
The system should reject the login attempt and display error message that states username or password is incorrect
**Actual result:**
NOTHING, CODE DOES NOT EXIST / FEATURE IS NOT COMPLETED
**Status:**
Fail
**Severity:**
Major
**V or V:** 
Verification
**GitHub Issue:** 
#98

---

**Test ID:**
TC-KL-03
**From Part 6:** 
New
**Written by:**
Katie Le
**Title:**
Reject login when username or password is empty
**Traces to:**
REQ-KL-03
**Test type:** Boundary Value
**Preconditions:**
Login page is accessible
**Test data:**
Test 1: username is empty, password: Password123
Test 2: username: roommate1, password is empty
Test 3: both fields are empty
**Steps:**
1. Open login page
2. Leave one or both login fields blank
3. Click log in button

**Expected result:**
The system should reject the login attempt and display error message that states username and password is required
**Actual result:**
NOTHING, CODE DOES NOT EXIST / FEATURE IS NOT COMPLETED
**Status:** 
Fail
**Severity:** 
Major
**V or V:** 
Verification
**GitHub Issue:** (#number, Fail only)
#99
---

**Test ID:**
TC-KL-04
**From Part 6:** 
New
**Written by:**
Katie Le
**Title:**
Verify login response time should be 5 seconds or less
**Traces to:**
NFR-KL-01
**Test type:** System
**Preconditions:**
login page accessible, registered user
**Test data:**
username: roommate1
password: Password123
max response time: 5 seconds
**Steps:**
1. Open login page
2. Enter user information
3. Click log in and measure the time until system allows or rejects log in

**Expected result:**
The system should allow or reject log in within 5 seconds
**Actual result:**
NOTHING, CODE DOES NOT EXIST / FEATURE IS NOT COMPLETED
**Status:** 
Fail
**Severity:** 
Minor
**V or V:** 
Verification
**GitHub Issue:**
#100

---
