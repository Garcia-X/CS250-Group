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
**Test type:** Negative Unit Boundary Value\
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
**Test type:** Unit Boundary Value\
**Preconditions:** Some string name consists of 249 'p's.\
**Test data:** { householdName: name, userName: "sigma67" }

**Steps:**
1. Run the program
2. Type into username box "sigma67"
3. Type name into the household name field
4. Press create household

**Expected result:** Status 201\
**Actual result:** The front end recieves a Household created! affirmative message\
**Status:** Pass\
**Severity:** Fail only\
**V or V:** Fail only\
**GitHub Issue:** Fail only

---

**Test ID:** OB-03\
**From Part 6:** New\
**Written by:** Oliver\
**Title:** Test 250 characters\
**Traces to:** REQ-OB-01\
**Test type:** Negative Unit Boundary Value\
**Preconditions:** Some string name consists of 249 'p's and a '4'.\
**Test data:** { householdName: (name + "4"), userName: "skibidi" }

**Steps:**
1. Run the program
2. Type into username box "skibidi"
3. Type (name + '4') into the household name field
4. Press create household

**Expected result:** Household not created and a relevant error message populates the screen\
**Actual result:** The front end recieves a Household created! affirmative message\
**Status:** Fail\
**Severity:** Minor\
**V or V:** (Verification / Validation, Fail only)\
**GitHub Issue:** (#number, Fail only)

---

**Test ID:** OB-04\
**From Part 6:** New\
**Written by:** Oliver\
**Title:** Test 251 characters\
**Traces to:** REQ-OB-01\
**Test type:** Negative Unit Boundary Value\
**Preconditions:** Some string name consists of 249 'p's.\
**Test data:** { householdName: (name + "67"), userName: "amongUs" }

**Steps:**
1. Run the program
2. Type into username box "amongUs"
3. Type (name + '6' + '7') into the household name field
4. Press create household

**Expected result:** Household not created and a relevant error message populates the screen\
**Actual result:** The front end recieves a Household created! affirmative message\
**Status:** Fail\
**Severity:** Minor\
**V or V:** (Verification / Validation, Fail only)\
**GitHub Issue:** (#number, Fail only)

---
