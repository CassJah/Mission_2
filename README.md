# Mission_2

You will continue to work on the Turners Car Insurance Project
 
You will be working on the backend and apply an Agile practice of Test-Driven Development (TDD).  As part of the project, there are 3 RESTful APIs that are required as part of the insurance purchasing process (here are the specification for the 3 APIs).  You can choose to have your API running on your laptop or on the cloud.  You will perform this Mission in a team of up to 3 developers.  Each member will be responsible for one API and its test cases.  If you are grouped with UX Designers, you will include UX Designers in your Daily Standups with your developer team.

Task 1. Sprint Planning
The team will meet at the beginning of the week to discuss and divide up tasks in this Mission.

Task 2. Use JIRA to Manage Team Tasks
The team will setup a Jira board to share amongst the team to manage all tasks.  The Jira board will be setup with 3 columns: "To-do", "In-progress", "Done".  The team can enter high level tasks and/or sub-tasks into Jira.  Team members will update Jira when they are working on a task or finished a task.

Task 3. Daily Standup
The team will run Daily Scrums for 5 days of the week at a set time agreed by the team.  Each Daily Scrum should be less than 10 minutes in duration – with each team member taking turn to answering 3 Questions.  Everyday after the Scrum meeting, send your trainer a message with a list of “blockers” discussed. 

The following resource may help:

RECOMMENDED How to run daily scrums effectively http://www.base36.com/2013/03/how-to-run-an-effective-scrum-meeting/ (5 mins)
 
Task 4. Learn about Test-Driven Development 
Let's start by understanding the principles of test-driven development.  Watch this video about TDD (12 mins)

Task 5. Create Test Cases
For your chosen API, write test cases to cover all the scenarios.  Remember to write test cases for boundaries and negative cases.  The end result will be a table that looks like the following API 1 example but with more test cases:

Test Case Number	Input (model, year)	Expected Output ($ value)	Test Description
1	"Civic", 2020	6620	Sunny day scenario
2	"911", 2020	2020	Numbers only is ok
3	"Task-Force", -987	error message	Negative year
4	"C200", "twenty twenty"	error message	Wrong data type
 

The following resources may help:

​​​​​​​​​​​​​​REQUIRED Designing Test Cases http://sqa.fyicenter.com/art/Designing_Unit_Test_Cases.html (1 hour)
 
Task 6. Create Unit Tests
Choose at least 5 of the test cases you designed, implement them as a set of automated unit test using one of the unit testing frameworks.

The following resources may help:

RECOMMENDED API Unit testing in JavaScript https://dev.to/ghostaram/testing-express-api-routes-the-easy-way-beginners-guide-1mmi (2 hours)
RECOMMENDED API Unit testing with Python: https://blog.eduonix.com/software-development/go-guide-api-testing-using-pytest/ (2 hours)
RECOMMENDED API Unit testing in .NET https://medium.com/@mourya.vikas/api-automation-using-c-f93c8dc0daaf (2 hours)
 
Task 7. Create API (do this AFTER Tasks 5 & 6)
Now that you created the unit tests, build your chosen API.  Test your API against your unit tests as you go, until your API passes all the tests.

The following resources may help:

RECOMMENDED Building an API in Node.js https://www.youtube.com/watch?v=TcvOgwQPsSo (30 mins)
RECOMMENDED Building an API in Python https://towardsdatascience.com/the-right-way-to-build-an-api-with-python-cd08ab285f8f (30 mins)
RECOMMENDED Building an API in .NET https://learn.microsoft.com/en-us/aspnet/web-api/overview/older-versions/build-restful-apis-with-aspnet-web-api (30mins)
 
Task 8. Code Review and Refactoring
Obtain feedback on your code from at least 1 of your team member by allowing them to review your code. Similarly, review your team member's code by pointing out the code smells and offering a solution.  Perform this activity within GitHub by raising a pull request from your feature branch to main and inviting reviewers. The reviewers are supposed to add comments within GitHub at relevant lines of code.  Here are the steps:

Push your code changes to a feature branch in your GitHub repository

Create a pull request from your feature branch to the main branch.

Invite the other team as reviewers for your pull request.

Ask them to review your code and provide feedback.

Review their code and provide feedback by adding comments within GitHub at relevant lines of code.

Discuss the feedback with the other team members and make any necessary changes to the code.

If needed, update the code to address the feedback.   

Refactor your code - find opportunities to make it more efficient, more readable, more maintainable.

Run your unit tests to ensure the updated code still pass unit test.

Once the updated code is tested, merge the pull request into the main branch.

The following resources may help:

​​​​​​​​​​​​​​RECOMMENDED Code smells https://blog.codinghorror.com/code-smells/

RECOMMENDED Pull request reviews in GitHub https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
 
Task 9. Present at Show and Tell
At the Show and Tell, your team will jointly present the tasks it has completed.  This presentation should be designed to take around 5 minutes for each team member – so, if you are in a 3-people team you have up 15 minutes in total.  The time limit will be strictly enforced.  You can use PowerPoint slides, Sway or Prezi to help with your presentation. You are encouraged to demonstrate the live API and tests.
 
Task 10. Submit your work
Before the Show and Tell session, upload all of your work (screenshots, presentation slides, documents or other files) using the Mission Submission Form.

The Client
Turners Car Auctions is a market leader in the automotive industry in New Zealand, responsible for more than 10% of all used vehicle sales in the country. It has retained its original function as a vehicle auctioneer, operating in 19 branches nationwide, but has become increasingly dependent on a parallel role as a conventional used vehicle dealership. In support of that role, it has established in-house finance and vehicle insurance divisions that allow it to offer buyers a complete “one-stop shop” experience.

The Project Brief
Turners is currently undertaking a major re-design of its motor vehicle insurance systems and processes, including an investigation of ways in which the introduction of new technologies can enhance the buyer experience. Here is some information about motor vehicle insurance at Turners [https://www.turners.co.nz/Cars/finance-insurance/car-insurance/].  You have just been assigned to the project team to help create a new insurance buying experience.

​​​​​​​​​​​​​​

 

 

Congratulations!  You have reached the end of the Advanced Full Stack Developer task list for this Mission!
