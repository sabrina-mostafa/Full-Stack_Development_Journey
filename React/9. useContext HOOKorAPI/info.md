## Prop Drilling: 
            Prop Drilling occurs when you pass data down through multiple nested components — even if only the deepest component actually needs the data.

### Problem with Prop Drilling:
- **Unnecessary Passing:** Parent and Child don’t need username, but they still have to receive and pass it down.
- **Scalability Issue:** The deeper the component tree, the more props you have to pass down.
- **Code Complexity:** It makes the code harder to manage and maintain.

### Steps:
- **step1:** create context using createContext()
  - *const UserContext = createContext();*
- **step2:** wrap all the child inside a context provider
  -  *<UserContext.Provider> </UserContext.Provider>*
- **step3:** in provider, pass value to consumer
  - *<UserContext.Provider value={user}>*
- **step4:** export the Context var
  - *export {UserContext} *
- **step5:** go to the desired child and directly consume the value/context, using useContext hook
  -  *const user = useContext(UserContext);*