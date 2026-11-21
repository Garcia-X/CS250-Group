# Test Cases: Oliver B

**Team number:** 11
**My area:** User Interface

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

**Test ID:** OB-01\
**From Part 6:** TC-1\
**Written by:** Oliver\
**Title:** Submit empty household name\
**Traces to:** REQ-OB-01\
**Test type:** Negative Boundary Value\
**Preconditions:** Uninteracted system\
**Test data:** { householdName: "", userName: "SkibidiSigma6767" }

**Steps:**
1. Run the program
2. Type into username box "SkibidiSigma6767"
3. Leave household name blank
4. Press create household

**Expected result:** Household not created and system displays that household name cannot be empty\
**Actual result:** Pop-up appears pointing to the household field\
**Status:** Pass\

---

**Test ID:** OB-02\
**From Part 6:** New\
**Written by:** Oliver\
**Title:** Test 249 characters\
**Traces to:** REQ-OB-01\
**Test type:** Boundary Value\
**Preconditions:** Some string name consists of 249 'p's.\
**Test data:** { householdName: name, userName: "sigma67" }

**Steps:**
1. Run the program
2. Type into username box "sigma67"
3. Type name into the household name field
4. Press create household

**Expected result:** Status 201 and stored in database\
**Actual result:** The front end recieves a Household created! affirmative message and the database stores the data\
**Status:** Pass

---

**Test ID:** OB-03\
**From Part 6:** New\
**Written by:** Oliver\
**Title:** Test 250 characters\
**Traces to:** REQ-OB-01\
**Test type:** Boundary Value\
**Preconditions:** Some string name consists of 249 'p's and a '4'.\
**Test data:** { householdName: (name + "4"), userName: "skibidi" }

**Steps:**
1. Run the program
2. Type into username box "skibidi"
3. Type (name + '4') into the household name field
4. Press create household

**Expected result:** Household created and a saved to database\
**Actual result:** The front end recieves a Household created! affirmative message. Upon checking, it is also stored in the database.\
**Status:** Pass

---

**Test ID:** OB-04\
**From Part 6:** New\
**Written by:** Oliver\
**Title:** Test 251 characters\
**Traces to:** REQ-OB-01\
**Test type:** Negative Boundary Value\
**Preconditions:** Some string name consists of 249 'p's.\
**Test data:** { householdName: (name + "67"), userName: "amongUs" }

**Steps:**
1. Run the program
2. Type into username box "amongUs"
3. Type (name + '6' + '7') into the household name field
4. Press create household

**Expected result:** Household not created and a relevant error message populates the screen\
**Actual result:** The front end receives a Household created! affirmative message\
**Status:** Fail\
**Severity:** Minor\
**V or V:** Verification\
**GitHub Issue:** #106

---
**Test ID:** OB-05\
**From Part 6:** New\
**Written by:** Oliver\
**Title:** Test Ease of Use\
**Traces to:** G-OB-01\
**Test type:** Acceptance\
**Preconditions:** The system is open to the create household page and no input is typed in any fields. The user is instructed to create a household.\
**Test data:** { householdName: "Vault 111", userName: "The Lone Survivor"}

**Steps:**
1. Open the system
2. Give the computer to user unfamiliar with the system
3. She types household name in the correct field
4. She types usernmae in the correct field
5. She submits the data

**Expected result:** The user is able to create household within 1 minute.\
**Actual result:** The user created household in 55 seconds\
**Status:** Pass

---
**Test ID:** OB-06\
**From Part 6:** New\
**Written by:** Oliver\
**Title:** Displays messages\
**Traces to:** REQ-OB-04\
**Test type:** Unit\
**Preconditions:** The system is open to the create household page and no input is typed in any fields\
**Test data:** { textContent: "Test message", className: "message success" }

**Steps:**
1. run npm test

**Expected result:** Pass\
**Actual result:** Pass\
**Status:** Pass

---
