# Test Cases: [Raquel R]

**Team number:** [11]
**My area:** [Main Feature (Create Household)]

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

**Test ID:** RR-01
**From Part 6:** New
**Written by:** Raquel Ramos
**Title:** Create household with valid information.
**Traces to:** REQ-RR-01, G-RR-01
**Test type:** Acceptance
**Preconditions:** The application is running and displaying the create a household form.
**Test data:** { householdName: "Acceptance", userName: "Trying" }

**Steps:**
1. Run the Code.
2. Make sure its on "Create Household".
3. Input valid household name and username.

**Expected result:** { "Household created! Name: Acceptance / ID:data.Household.householdID  / Code: data.Household.householdCode  / User: Trying" }
**Actual result:** { "Household created! Name: Acceptance / ID: dde58198-5115-4e7c-ad03-b478709eaa32 / Code: KMG8K7E / User: Trying" }
**Status:** Pass
**Severity:** Major
**V or V:** Validation
**GitHub Issue:**  N/A

---

**Test ID:** RR-02
**From Part 6:** New
**Written by:** Raquel Ramos
**Title:** Household name contains only spaces.
**Traces to:** REQ-RR-02
**Test type:** Negative
**Preconditions:** The application is running and displaying the create a household form.
**Test data:** { householdName: "(Ten spaces)", userName: "Tryingwithspaces" }


**Steps:**
1. Make sure its on "Create Household".
2. Input household name with only spaces and fill out the username. 
3. Click create household,

**Expected result:** The system does not create a household, and displays an error message asking for a valid household name.
**Actual result:**  The system displays a message "Household name must be a non-empty string".
**Status:** Pass
**Severity:** Major
**V or V:** Velidation
**GitHub Issue:** N/A

---

**Test ID:** RR-03
**From Part 6:** New
**Written by:** Raquel Ramos
**Title:** Household name is left empty.
**Traces to:** REQ-RR-02
**Test type:** Negative
**Preconditions:** The application is running and displaying the create a household form.
**Test data:** { householdName: "", userName: "Tryingwithempty" }

**Steps:**
1. Make sure its on "Create Household".
2. Leave houdehold name empty and fill out the username. 
3. Click create household.

**Expected result:** The system does not create a household, and displays an error message asking for a valid household name.
**Actual result:** The system displays "Please fill out this field".
**Status:** Pass
**Severity:** Major
**V or V:** Verification
**GitHub Issue:** N/A

---

**Test ID:** RR-04
**From Part 6:** New
**Written by:** Raquel Ramos
**Title:** Username contains only spaces.
**Traces to:** REQ-RR-03
**Test type:** Negative
**Preconditions:** The application is running and displaying the create a household form.
**Test data:**  { householdName: "Tryingwithspaces", userName: " (Ten spaces" }

**Steps:**
1. Make sure its on "Create Household".
2. Input only spaces on the username empty and fill out the household. 
3. Click create household.

**Expected result:** The system does not create a household, and displays an error message asking for a valid username.
**Actual result:** The system displays a message "Username must be a non-empty string".
**Status:** Pass
**Severity:** Major
**V or V:** Verification
**GitHub Issue:** N/A

---

**Test ID:** RR-05
**From Part 6:** New
**Written by:** Raquel Ramos
**Title:** Username is left empty.
**Traces to:** REQ-RR-03
**Test type:** Usability
**Preconditions:** The application is running and displaying the create a household form.
**Test data:** { householdName: "Tryingwithempty", userName: "" }

**Steps:**
1. Make sure its on "Create Household".
2. Leave username empty and fill out the household. 
3. Click create household.

**Expected result:** The system does not create a household, and displays an error message asking for a valid username.
**Actual result:** The system displays "Please fill out this field".
**Status:** Pass
**Severity:** Major
**V or V:** Verification
**GitHub Issue:** N/A

---

**Test ID:** RR-06
**From Part 6:** New
**Written by:** Raquel Ramos
**Title:** Create household with one-character values
**Traces to:** REQ-RR-01
**Test type:** Boundary
**Preconditions:** The application is running and displaying the create a household form.
**Test data:** { householdName: "R", userName: "onecharacter" }

**Steps:**
1. Make sure its on "Create Household".
2. Input one character for household and fill out username. 
3. Click create household.


**Expected result:** The system does not create a household, and displays an error message asking for a valid username. 
**Actual result:** { Household created! Name: R / ID: b00bd2fd-27e7-48cd-ab3e-32d07538b065 / Code: SXCKIOZ / User: onecharacter }
**Status:** Fail
**Severity:** Major
**V or V:** Validation
**GitHub Issue:** [TC-RR-06] System should reject household names with one-character value: https://github.com/Garcia-X/CS250-Group/issues/102

---

**Test ID:** RR-07
**From Part 6:** New
**Written by:** Raquel Ramos
**Title:** Create household using an existing household name
**Traces to:** REQ-RR-04
**Test type:** Security.
**Preconditions:** The application is running and displaying the create a household form.
**Test data:** 
First input: { householdName: "EnaJuna", userName: "twice" }
Second input: { householdName: "EnaJuna", userName: "twice" }

**Steps:**
1. Fill out the householdname and username.
2. Click create household.
3. Repeat a second time.


**Expected result:** The system does not create a household, and displays an already existing household message. 
**Actual result:** On the second create household: { Household created! Name: EnaJuna / ID: 2a225c7b-6328-4af9-90e2-c29187a74633 / Code: 3ACO46T / User: twice }
**Status:** Fail
**Severity:** Major
**V or V:** Validation
**GitHub Issue:** [TC-RR-07] System should reject household names that already exist: https://github.com/Garcia-X/CS250-Group/issues/103


---

**Test ID:** RR-08
**From Part 6:** New
**Written by:** Raquel Ramos
**Title:** Create household using an existing username
**Traces to:** REQ-RR-05
**Test type:** Security.
**Preconditions:** The application is running and displaying the create a household form.
**Test data:** 
First input: { householdName: "twice", userName: "JunaEna" }
Second input: { householdName: "twice", userName: "JunaEna" }

**Steps:**
1. Fill out the householdname and username.
2. Click create household.
3. Repeat a second time.


**Expected result:** The system does not create a household, and displays an already existing username message. 
**Actual result:** On the second create household: { Household created! Name: twice / ID: 19a68d4e-46fc-4f8b-8d24-7f9690ed2c9f / Code: JCUC457 / User: JunaEna}
**Status:** Fail
**Severity:** Major
**V or V:** Validation
**GitHub Issue:** [TC-RR-08] System should reject usernames that already exist: https://github.com/Garcia-X/CS250-Group/issues/104


