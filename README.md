### Getting Started

```
> git clone git@github.com:illeandrei/form-router-react-app.git
> cd form-router-react-app
> npm install
> npm start
```

#### BrowserRouter
- the router parent component. It houses all the other subcomponents
of the router.

#### Route
- A component that makes sure to render a specific component based on the url
- It takes to params, the 'path' and the 'component' to render.

#### Switch
- if no 'Switch' is used, then the router interprets the URL in a very loose/fuzzy
way, the '/posts' could be the same as '/posts/new'.
- The keynote here is to nest all the routes inside a 'Switch' component
and order them by specificity (most specific top), i.e. '/posts/new', '/posts',
'/'

#### life cycle methods
[docs](https://reactjs.org/docs/react-component.html)
- Each component has several “lifecycle methods” that you can override
to run code at particular times in the process. Methods prefixed with 'will'
are called right before something happens, and methods prefixed with 'did'
are called right after something happens.
- componentDidMount - is called by React right after the component has rendered

#### navigation with react router
- traditional websites use the <a> tag to navigate
from one page to another. Not the case for react apps, that use react-router.
All the html has loaded, so there is no need to make another request
to fetch another html document from the server, just display a new set
of react components instead.
- in practice, to do navigation, just use a component provided by
react-router itself.

#### Link
- basically an <a> tag, something that the user clicks to navigate inside
a react-router application.
- the difference from an <a> tag, is that Link prevents a couple of
events that <a> has by default.

#### Redux form
[docs](https://redux-form.com/7.3.0/)
- is saving us from manually wiring up a bunch of action creators

