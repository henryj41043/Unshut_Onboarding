# Onboarding Site

## To-Do
- [ ] Fix BUG on QUIZ component rerendering.
- [ ] Fix BUG on seconds.
- [ ] Question 1 - part 4 > ADD yes/no functionality.
- [ ] Keep the crazy counter. slower at the beggining , faster at the end. AFTER FIXING THE BUG
 
- [ ] Glitching effect
- [ ] Set video looping

## Problems
- [ ] input fields do not CLEAR if an answer is entered in the previous question > WHYYY?
- [ ] timer acts funny when an answered is Clicked.
- [ ] "NotAnswered"  on "timeOverNextQuestion" get consoled-logged 1 extra time WHY?
- [ ] freetext condition gets re-rendered with every change in seconds
- [ ] Score-random-index gets called a bunch of times after installing the input field.

## Questions
- [ ] DO WE WANT THE CONTINUE BUTTON AFTER EACH SCORE,
- [ ] OR DO WE PREFER TO HAVE A TIMER ??
- [ ] HOW SHOULD THE IMAGES LOOK LIKE? SMALL BIG FULLSCREEN . . . . ?
- [ ] FOR HOW LONG SHOULD EVERY IMAGE APPEAR ?

- [x] DO WE WANNA SHOW PARTIAL SCORES AS THE TEST ADVANCES? > Yes.

## Done
### Fri Aug 13
- [x] FLASH of pictures.

### Thur Aug 12
- [x] FREETEXT = input field > BUG needs fix!

### Tue Aug 10
- [x] Add partial scores and final score.

### Thu Aug 05
- [x] Refactored Context.
- [x] Add timer.
- [x] Add timer functionality.
- [x] Automate Next-Question based on timer.
- [x] Capture "Not Answered." if no answer is selected.

### Mon Aug 02
- [x] Populate all Questions and Scores.

### Fri Jul 30
- [x] Create questions API, populate a sample Questions and Answers.
- [x] Add Answer button functionality.
- [x] Capture Answers.

### Thu Jul 29
- [x] Site structure
- [x] Set background video
- [x] Structure components
- [x] CSS
- [x] Investigate how to make a quiz app.
    1. Create a QuestionList.js Array of Dict { Q : q, Answ: [{id: #, Ans: 'asdf', isCorrect: 'true/false' }, {}, {}]}
