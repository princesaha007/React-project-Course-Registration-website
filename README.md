Here are the three features of this project :

(1) User can add course to the cart, if the course is already been added to the cart before they can not add it.
(2) User can manage adding courses to the cart according to the credit hour, if the credit hour is exceeded the courses can not be added anymore.
(3) User can see the course name in the cart which they have added.

-----------------------------------------------
State for the project:
I have managed the component's state using the useState hook for multiple variables such as courses, selectedCourse, readingHr, remainingHr, and totalCost.

i have initialized many state variables using the useState hook:

the variables are:::::
courses: An empty array to hold the course data.
selectedCourse: An empty array to hold the selected courses.
readingHr: Initialized to 0, representing the total credit hours for selected courses.
remainingHr: Initialized to 20, representing the remaining credit hours.
totalCost: Initialized to 0, representing the total cost of selected courses.

Overall, the Home component manages the state related to course selection, credit hours, and costs, and it displays a list of courses and add them to a cart component.