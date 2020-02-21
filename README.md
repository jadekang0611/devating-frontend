# Devating : Front-End

![devating-logo (2)](https://user-images.githubusercontent.com/56938630/75009160-d19a4a80-542e-11ea-9737-c7e3532f36ef.png)

[To our application](https://devating.herokuapp.com/)

## Project Overview

Do you think pair programming can be romantic? YES!! We’re introducing the next generation of pair programming - a new level of connection. Devating is a matching dating app for developers based on their coding preferences, where there are no pair partners left behind. This is the front-end planning and you can view the back-end planning [here](https://github.com/jadekang0611/devating-backend)

## Team Members:

- Scrum Master: Jade Kang (certified)
- Project Manager: Daisy Yau
- UI Designer: Sage Kearney
- QA Engineer: Abdul James

## Table of Contents:

- [User Stories](https://github.com/jadekang0611/devating-frontend#user-stories)
- [Wireframes](https://github.com/jadekang0611/devating-frontend#wireframes)
- [Planning](https://github.com/jadekang0611/devating-frontend#planning)
- [Technologies](https://github.com/jadekang0611/devating-frontend#technologies)
- [Installation](https://github.com/jadekang0611/devating-frontend#installation)
- [Usage](https://github.com/jadekang0611/devating-frontend#usage)
- [Testing](https://github.com/jadekang0611/devating-frontend#testing)
- [UX Modifications/Hurdles/Unsolved problems](https://github.com/jadekang0611/devating-frontend#ux-modificationshurdlesunsolved-problems)
- [Future Add-ons](https://github.com/jadekang0611/devating-frontend#future-add-ons)
- [Contribution Guidelines](https://github.com/jadekang0611/devating-frontend#contribution-guidelines)
- [Credits](https://github.com/jadekang0611/devating-frontend#credits)

## User Stories:

**Our Users:**

- Age: 20 - 50
- Gender neutral
- Flirty & fun, yet mature
- Typically anti-social, keep to themselves

**Why are they using our app?**

- They want to meet people like them, think the same way, have similar experiences
- Want to destress from a long day of coding
- Find a new ‘pair partner’
- Meeting them(our users) where they are- on the computer! -easy access

**How can our app give our users the best experience?**

- They want to feel accepted- don’t feel guilty for being a nerd aka loving coding
- Mainstreamed/efficient/quick set up
- Bug free
- Super user friendly, easy to use
- #Nostrainonthebrain
- Image front and center with name, age, job title
- Mobile: swipe functionality?
- Browser: buttons (see Jade for button idea later)
- Simple, concise summary/profile thingy
- No strings attached coding

**What are they doing in our app? What is their main activity?**

- Meet someone new with same interests
- Browsing, looking for a loving (friendly) pair programmer.
- Reading about other people.

**Ultimate goal**

- Meet somebody & be completely yourself, guilt free, with that person! No need to hide behind your code :) No commiting out! Build a coding relationship.

## Wireframes:

![devating-wireframe](https://user-images.githubusercontent.com/58707118/74559862-53700c80-4f33-11ea-9172-fe1e3ccd1c62.png)

![desktop-mockups](https://user-images.githubusercontent.com/58707118/75002876-f0e7a680-5433-11ea-85bb-e59b4afd206d.png)

![mobile-mock-ups](https://user-images.githubusercontent.com/58707118/75002878-f0e7a680-5433-11ea-9ba1-fb12f4b19f5a.png)

## Planning:

We review our [Trello Board](https://trello.com/b/K0hAl5co/devating) during daily standup. The board includes project tasks for front-end, back-end, and testing.

**Front-end Components**

![Devating - Frontend](https://user-images.githubusercontent.com/58707118/74559819-39362e80-4f33-11ea-9caf-c31dbe68c870.jpg)

**Bronze version**

- [x] CRUD
  - [x] Create new user account : userController
  - [x] Read user matches based on favorite activities and favorite coding language : matchController
  - [x] Update user matches to user set : matchController
  - [x] Update user information : userController
  - [x] Delete match from user set : matchController
  - [x] Delete user : userController
- [x] One Schema
- [x] Testing: Jest & Enzyme
- [x] Testing: Mocha & Chai

**Silver version**

- [x] Styling
- [x] Additional Schema for User Profile page

**Gold version**

- [ ] User Authentication
- [x] User interaction - to be able to see accepted matches on user dashboard
- [ ] Feature to allow user to have calendar access to book a day for a date

## Technologies:

- React
- Bootstrap
- Jest & Enzyme
- AWS

## Installation:

- Clone and download this repo
- In the terminal type npm install
- Browser will open on Devating page

## Usage:

- Click sign in and find your matches in profile
- OR Click on create account
  - Enter name, email, password then next
  - Choose a avatar, then next
  - Add age & gender, then next
  - Choose gender interest, then next
  - Choose all your favorite activities, then next
  - Choose all your favorite coding languages, then next

## Testing:

- Jest & Enzyme - passed
- HTML validator - passed
- CSS validator - passed

## UX Modifications/Hurdles:

**Modifications**

- Removed User profile picture upload feature
- Removed question progress bar
- Removed match card component and placed all inside results component

**Hurdles**

- Locating conflicting files when doing css
- Terminal dependencies installation conflicts
- Fetching backend api from frontend
- Github merge conflicts while working on multiple feature branches

## Future Add-ons:

- User creating new account to be able to upload an image
- Chat capable
- Feature to allow user to have calendar access to book for a date
- Loading page when user submits their information to create matches

## Contribution Guidelines:

In addition to collaboratively engineering Devating app, we each had a dedicated role:

- Jade Kang - applied agile methodology as a scrum master and provided research/resources to spearhead the algorithm creation of the app.

- Daisy Yau - project manager that helped organize and prioritize tasks throughout daily sprint. Acted as liaison between scrum master & engineers.

- Sage Kearney- dedicated and skilled UI developer that brought our ideas to life. Led the user storyboard and user interface development with her perfection.

- Abdul James - QA Engineer that debugged/troubleshoot our development environment and involved in all phases of the app creation.

## Credits:

- Sage Kearney: design svgs & pngs. Thank you Sage!!!!
- Pexels images:
  - Italo Melo
    - https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
    - https://images.pexels.com/photos/2049828/pexels-photo-2049828.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
  - @INSTAGUILHERME
    - https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
  - nappy
    - https://images.pexels.com/photos/936090/pexels-photo-936090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
  - Pixabay
    - https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
  - Vinicius Wiesehofer
    - https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
  - Creation Hill
    - https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
  - Deden Ramdhani
    - https://images.pexels.com/photos/3727078/pexels-photo-3727078.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
    - https://images.pexels.com/photos/3105401/pexels-photo-3105401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
  - Wicliff Thadeu
    - https://images.pexels.com/photos/2813157/pexels-photo-2813157.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260
    - https://images.pexels.com/photos/2811395/pexels-photo-2811395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
