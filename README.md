
## Architecture

- ### File Naming:
  - File naming convention follows Vue's best practices which is why it sorta builds on top of each other
  - Helps you know that AboutMeFormEssay is a child of AboutMeForm

- ### State Management: 
  - Used immer to help use "mutable" state
  - Makes it a lot less of a chore to not have to copy state every time
  - Tried using what was already there, but I'm sure there could be improvements to reducers etc.

- ### File Locations:
  - Followed the container approach that was initially included
  - Not my preference, but I tried to make it more realistic in jumping into an exisiting codebase rather than starting a new one

- ### Styling (SCSS):
  - Made a separate file for each component that used it
  - Created a generalized app.scss that imports all components and variables to allow for everything to have access to reusable util classes and global variables
  - Would have personally preferred something like TailwindCSS to really force reuse of classes
  - Not my cup of tea to have separate SCSS for each component
    - Use TailwindCSS
    - Or use StyledComponents for inline CSS in the component (keep everything in one place)

## Challenges / Thoughts
- Had a difficult time trying to figure out how to bold items within the sentence
  - Could have a more elegant solution, but with time request, it was best to just be simple and use dangerouslySetInnerHTML

- I didn't finish this in the expected 4 hours, but I have mostly been working in Vue and VueX which is a slightly different approach to redux (a lot less verbose imo)

## Improvements
- Use inline css to allow for single location
- Remove the "containers" folder since it makes it MORE confusing and again, put everything in central location for a component
