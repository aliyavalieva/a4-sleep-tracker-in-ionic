--Readme document for *author(s)*, *email(s)*, *UCI id(s)*--
Aliya Valieva, avalieva@uci.edu, 23792244
Asad Ellis, asade@uci.edu, 25214489
1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

10/10
- 1/1 The ability to log overnight sleep
- 1/1 The ability to log sleepiness during the day
- 1/1 The ability to view these two categories of logged data
- 2/2 Either using a native device resource or backing up logged data
- 2/2 Following good principles of mobile design
- 2/2 Creating a compelling app
- 1/1 A readme and demo video which explains how these features were implemented and their design rationale

2. How long, in hours, did it take you to complete this assignment?

36 hours

3. What online resources did you consult when completing this assignment? (list specific URLs)

- https://edupala.com/ionic-capacitor-storage/
- https://ionicframework.com/docs/api/datetime
- https://ionicframework.com/docs/api/back-button
- https://ionicframework.com/docs/api/segment
- https://ionic.io/docs/secure-storage?_gl=1*dc9fqo*_ga*MTAzODE3NzEzMi4xNjQ2MTAxNTI1*_ga_REH9TJF6KF*MTY0NjU2MTgwOC4xMC4xLjE2NDY1NjM0ODQuMA..
- https://ionicframework.com/docs/angular/storage#ionic-secure-storage
- https://ionicframework.com/docs/api/datetime


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
We together worked on the project in pairs discussing styling of the overall application with buttons, pages hierarchy and best mobile design principles to follow along on both iOS and Android. 


5. Is there anything special we need to know in order to run your code?

npm install @capacitor/storage  
--Aim for no more than two sentences for each of the following questions.--


6. Did you design your app with a particular type of user in mind? If so, whom?
We aimed for inclusiveness of our application and made sure it is most efficient on user side for any type of user. The domain for our users is vast and would include anyone who is aiming to log and analyze their sleep with sleepiness data. 


7. Did you design your app specifically for iOS or Android, or both?
We aimed to design our app for both iOS and Android. That way we made sure our application is accessible for any type of user, whether they are on iOS or Android device. 


8. How can a person log overnight sleep in your app? Why did you choose to support logging overnight sleep in this way?

User can log their overnight sleep data by navigating to the overnight sleep page from the home page by clicking on appropriate button. Afterwards, they are presented with two entries that they need to fill in - those being the date and time they went to sleep and the second being the time they went to bed. The user would click on appropriate fields, select the time for each dates and save their entry. The entry would then be saved to a capacitor storage and be presented back with all their overnight log history entry.


9. How can a person log sleepiness during the day in your app? Why did you choose to support logging sleepiness in this way?

We decided it would be best to see the log of user’s sleepiness directly on the same page where they log their sleepiness scale. 
We decided to have the date for each sleepiness on the header of each of the log history with the description in the body part - that way we could make our user side as much efficient as possible. 


10. How can a person view the data they logged in your app? Why did you choose to support viewing logged data in this way?

Our users would be able to see the history of all of their logged sleep data right after recording it. We discussed and considered it is the best way for users to maximize their sleep efficiency in order to determine how their sleep affects their lifestyles. 


11. Which feature choose--using a native device resource, backing up logged data, or both?
We decided it would be most efficient and practical to back up all of our logged data using capacitor native storage.  


12. If you used a native device resource, what feature did you add? How does this feature change the app's experience for a user?
-


13. If you backed up logged data, where does it back up to?
We backed up all of our data to capacitor storage and reflected all the changes on the html page. 

14. How does your app implement or follow principles of good mobile design?
We gave a bit of padding to all buttons on the app, this is because the button are much smaller and having them spaced so close together might cause the user to miss-tap some of the buttons.
We kept the fonts sizes relatively the same, and used the same font type for each as it created a standard for the users to go off of when using the app.
We accounted for user errors by both displaying the entered values before the user submitted each of them. As well as always having a back button present on screen to return to a previous option or page.

