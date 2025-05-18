## State Lifting:
            State Lifting is a technique in React where you move the state to a common ancestor(parent) component so that multiple child components can share and synchronize data.

### Why Lift State?
- To share data between sibling components
- To keep the state in one place (single source of truth)
- To avoid prop drilling (passing props through multiple components)

### the parent will:
- Create state
- Manage state
- Change state
- sync withh all children