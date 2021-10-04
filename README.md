# React test

To start: `npm start` and open browser to `http://localhost:3000`

Application is missing the following:

- Pagination on lists
- Search by character name 
- Details page fully-populated from other API resources like home world, startships...
- Selection of no-species characters

NOTES: 

This is my first foray into react. I tried to use more-modern features like hooks, but haven't quite gotten to the bottom of using reducers with state.

The API seems to be missing species data on many if not most of the people resources. 
I have made the application put those people in a special category of no-species
but have not made them load on the characters page yet.  Luke Skywalker and Darth Vader apparently defy species categorization.

The API paginates, 10-per on any resource.  So in order to filter by species, we must
pre-load all of the characters and sort them in the UI app. The API does not provide
searching characters by species.

I am not a css master, or visual-designer.  I can often create a very-good rendering of a layout provided by others, up to 85-90%, where a CSS-master must finish off the details.

There are no tests.