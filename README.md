# DeltatreAppSuitestAPIProject

## Execution
### Manual Run
#### Suitest:
Step 1. Open Suitest Project: https://the.suite.st/app/a1b4f2f4-838d-4ac0-8b2b-59d19ac98962/version/5f97c955-b3cc-4a18-97ed-23efc72da739/tests?testId=09afd9ef-ab01-414f-bdaf-69757665d59f

Step 2. Connect to LG device available in device lab

Step 3. Navigate to DNT Task folder

Step 4. Run the test cases 
   
Step 4.1 Run the test cases individually

_Note: All the testcases from CHD1 and EPG1 which start with Verify word should be executable_

 <img width="236" alt="image" src="https://github.com/user-attachments/assets/928e047b-37b5-4bd3-aafc-c3aecc7209a1">


Step 4.2: Run the test pack manually or by schedule

_Note: Click on Launch test pack now to run immediately. Test pack_

<img width="325" alt="image" src="https://github.com/user-attachments/assets/1ea5daf7-08eb-4711-a98c-7554ae5dffc7">

 
### Automated Run
#### Github:
Step 1: Open the repo: https://github.com/sumit-dhanawade-deltatre/DeltatreAppSuitestAPIProject

Step 2: Navigate to Actions 

Steps: Run the workflows

Step 3.1: Run Manual run work using Suitest Javascript API

•	Select Branch: main

•	Test files (Rows: CHD1, EPG1) -> This we can be improved later 

•	Select the device id: The device should be online 

•	Run workflow

 <img width="488" alt="image" src="https://github.com/user-attachments/assets/5ec7baca-5ccd-4b5b-9452-065ef974acbd">

Step 3.2: Run test pack using Suitest Network API

•	Select branch: main

•	Select test pack ID

•	Run workflow

<img width="488" alt="image" src="https://github.com/user-attachments/assets/cadf9ff0-9546-4ba5-b9e0-1af2851f15d6">

Step 3.3: Run test locally

•	Clone the repo 

•	Add few keys in. suitestrc file 

o	Token key id
o	Token key password
o	Device id
o	App id

•	Navigate to project from terminal

•	Run command: npx suitest-js-api run node ./TestCases/RowTypes/LinearRows/CHD1Rows.js


