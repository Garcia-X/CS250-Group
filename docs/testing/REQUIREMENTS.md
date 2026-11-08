# Testable Requirements: [Roommate Chore Manager]

**Team number:** [11]
**Inherited from:** Team [10]

## Who Owns What

| Area of the system | Owner | ID prefix |
|---|---|---|
| Log in | Katie Le | KL |
| Data storage| Akshaya Pathipati| AP |
| Main feature (create household) | Raquel Ramos-Ramirez | RR |
| User interface| Oliver Beutz | OB |

<!--
RULES
- Only edit YOUR OWN section below. This keeps merge conflicts away.
- Categories: G = Stakeholder Goal, REQ = Functional, NFR = Non-Functional.
- "From Part 5": write the original CR ID and its text from SYSTEM_MAP.md. Write "New" if you added it this sprint.
- Status: Confirmed or Suspected bug. No Unconfirmed allowed. Every Suspected bug needs a GitHub Issue.
- The test: could a stranger write a Pass or Fail test without asking you a question?
-->

---

## Section: [Log In] ([Katie Le])

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| G-KL-01 | Registered Users/ Roommates| The system should allow users to securely log in to their accounts so they can access their household and chore information |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| REQ-KL-01 | The system shall allow users to log in using a valid username and password| Suspected bug| New |
| REQ-KL-02 | The system shall reject login attempts when a user enters incorrect username or password and display an error message| Suspected bug| New |
| REQ-KL-03 | The system shall reject login attempts when the username or password field is empty and display an error message | Suspected Bug | New |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| NFR-KL-01 | The system shall display a response or error message within 5 seconds after a user submits their information | Suspected bug | New |

### Example of a Good Rewrite

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| REQ-MG-01 | The system shall reject a profile bio longer than 280 characters with the error "Bio must be 280 characters or fewer." | Suspected bug | CR-3 (Unconfirmed): The system shall limit the bio to 280 characters. |
| NFR-MG-01 | The profile page loads in under 2 seconds with 100 profiles in the database. | Confirmed | New |

---

## Section: [Data Storage] ([Akshaya Pathipati])

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| G-AP-01 | Dev Team/IT Team/Households | The system shall store information such as household name, username of the household creator, a list of all household members, all chores in the houshold, what the chore is called, any special notes for the chore, who the chore is assigned to and when the chore needs to be completed by. |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| REQ-AP-01 | The system shall allow users to create households. | Suspected Bug | CR-1 |
| REQ-AP-02 | The system shall allow users to edit households. | Suspected Bug | CR-2 |
| REQ-AP-03 | The system shall allow users to delete their households. | Suspected Bug | CR-3 |
| REQ-AP-04 | The system shall allow users to view dashboards in households they are a part of. | Suspected Bug | CR-4 |
| REQ-AP-05 | The system shall allow users to add chores to dashboards they can view. | Suspected Bug | CR-5 |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| NFR-AP-01 | The system shall save a newly created housedhold to the database within 3 second.| Suspected Bug | New |

---

## Section: [Create Household] ([Raquel Ramos])

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| G-RR-01 | Household Creator | Create a household with an household name and a username. |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| REQ-RR-01 | The system shall allow users to create a household by providing a valid household name and username. | Confirmed | Yes |
| REQ-RR-02 | The system shall reject household creation requests when the household name is empty or contains only spaces. | Confirmed | New |
| REQ-RR-03 | The system shall reject household creation requests when the username is empty or contains only spaces. | Confirmed | New |
| REQ-RR-04| The system shall reject household creation requests when the household name already exist. | Confirmed | New |
| REQ-RR-05| The system shall reject household creation requests when the username already exist. | Confirmed | New |


### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| NFR-RR-01 | The system shall display a clear response message when a user submits an empty or invalid household name, allowing the user to understand why the household cannot be created. | Confirmed | New |

---

## Section: [Your Area] ([Your Name])

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| | | |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| | | | |
