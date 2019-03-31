# kitchen-towel

Hey there, welcome to our repository of frontend, find the wiki here: [wiki](https://github.com/new-airbnb/wiki/wiki)

### Project architecture

In this project, we build the frame of every page with bootstrap. The main function of each page can be seen as below:

* homepage.html: search a room under some criteria for tenants.

* index.html: sign in for tenants.

* signup.html: sign up for tenants.

* addroom.html: add rooms with some criteria for landlords.

* detail.html: show the detailed information of a room for tenants.

The css img and js files are the corresponding contents improve the function of each pages.

### Testing
we use Pytest to do the unit test. To simulate the user behavior, we use Splinter and headless chrome browser.
