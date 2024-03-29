## Basic questions
- export default function ... v/s export function ...
The difference is that when importing a function, if that function has export default then you need to import without the curly braces
`import abc from xyz` however if you are not using the default keyword then you need to add the curly braces `import {abc}     from xyz`.

Difference between npm and npx
- npm is node package manager which let's you download packages and letting us manage the dependencies, executing custom scripts that are found in package.json file and also pulish packages

- npx is node packages executer which let's us use the package without any need for first intalling it, it also ensures that we can execute commands from a specific version of that package without the need to install it

In summary, npm is primarily used for package management and dependency tracking, while npx is used for executing packages and running command-line tools without the need for explicit installations.

- how to have more than 1 parent tags in next/react js
React and next js only allows 1 parent tag so in order for us to use more than 1 parent tags, we can wrap all the parent tags inside an `JSX fragment`. These are blank tags and they act as parents so that you can have multiple root elements inside as shown below
```
<> 
    <h1> First Page </h1>
    <h5> Section One </h5>
    <p>
        lorem ipsum ....
    </p>
</>
```

- reuseable components?

React and next js allows us to reuse code instead of rewritting them all the time. Let's say you have a form input on 2 pages, now you can opt to copy and paste the same code on both the forms or you can choose to write once and use everywhere

let me show you a basic input component
```
const User = () => {
    return (
        <div>
            <h2>User name is Areeb</h2>
        </div>
    );
}
export default Input;
```

- First of all, the function name must always start with a capital letter as shown

- Now we can use this component anywhere in the code by typing the name of this function

```
<div>
...

<User />

...
</div>
```

- Remember that all starting tags need a closing tag as well either by typing the closing tag or by making it a self closing tag
`<User />` or `<User></User>`

Here is a basic coding implementation of the above feature as well as being able to pass data

```
export default function Home() {
  return (
    <div className="m-8">
      <h1 className="text-3xl">Home page</h1>
      <br />
      <Sample name="This is a sample"/>  
    </div>
  )
}

const Sample = (props) => {
  return (
    <>
      <div>
        <h1>
          This is a test or you can say {props.name}
        </h1>
      </div>
    </>
  )
}
```

- To pass data from 1 component to another we can use props. Props are useful if you want to pass statis data or data that doesn't change very often.

- So what we can do is that we first define a variable inside out custom components `<Sample name="" />` and inside this we can pass data. 

- Now when we want to access this data, we first need to define an parameter for that custom component, most commanly we say `props`. Now to access that variable, open the curly brace `{}` and then type `{props.name}`. First comes the parameter name then a dot and then the name of the variable.

- You can reuse this multiple times and pass in different data and you will see the results.


- what is client side rendering?

Client side rendering means that it will be viewed by the user and the users can also interact with it. By default next js (v13.4 and above) have set all the pages that we render in browser as server side pages so that means there are no client side activities. To make a page client side, you need to type `'use client'` at the top of that page. Remember it must be at the top and here is an example

```
"use client"

import Button from "@/components/Button";
import { useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0);

  const upCount = () => {
    setCount(count + 1);
  }

  const downCount = () => {
    setCount(count - 1);
  }

  return (
    <>
      <div className="m-8">
        <h1 className="text-3xl">Random click event</h1>
        <br />
        <Button
          value='Click to add'
          customClass="bg-gray-500 p-2 rounded-lg text-white"
          onClick={upCount}
        />

        <br />
        <br />

        <Button
          value='Click to subtract'
          customClass="bg-gray-500 p-2 rounded-lg text-white"
          onClick={downCount}
        />
      </div>

      <div className="m-8 text-3xl">
        {count}
      </div>
    </>
  )
}
```

- As you can see the 'use client' is at the top which makes this page a client rendered page rather than server side rendered page.

- Any child page or component of this page does not need the 'use client' at the top as it is already being passed by this parent page.

- function parmeters?

You can pass in parameters in the functions that we make as shown below

```
const info = (myData) => {
    return setData (myData);
}
```

- Now we can pass some data into it as shown below

```
<Button
    value='Click for my data!'
    customClass="bg-gray-500 p-2 rounded-lg text-white"
    onClick={() => info ('This is my data!')}
/>
```

- In the on click event we are passing in some data into that function and then that function will receive the value in its parameter and then it will pass it to where ever that parameter is being called 

`onClick={() => info ('This is my data!')}` --> data is now passed

`const info = (myData)` --> data is now received here

`return setData (myData);` --> any where this parameter is being called will contain the data.

- state vs variable

In the example above we used states which is like a container or an object that holds data, you can update it and perform other actions with it however every time a state is being updated or essentially changed, then it will rerender the whole component. A variable will not rerender the whole component, reredering means execute the code and in this case it means executing the JSX and react component again. A variable also cannot update its value so if you are looking to use variables then remember that it won't change the values unless you use a state.

- states vs props

States are used within the component and cannot be accessed outside the component whereas props can be used to pass in data from one component to another.

- component inside another component?

We can define as many components as we want in a single file. The are defined like an arrow function but the name starts with a capital letter and always return something, it can be a static data or an html template. Below is an example for showing an html template 

```
const InnerComponent = () => {
    return (
        <>
        <h1 className="text-3xl">
            This is an another component!
        </h1>
        </>
    );
}

return (
    <div className="m-8 text-3xl">
        <InnerComponent />
    </div>
)
```

- We can define a component and then call it in the same file or you can define it externally and call is some place else as shown

Button.js
```
const Button = ({ type, onClick, customClass, value }) => {
    return (
        <>
            <button
                type={type}
                onClick={onClick}
                className={`${customClass}`}
            >
                {value}
            </button>
        </>
    );
}
export default Button;
```

- This is an external component defined inside the components folder outside the app folder and we can also use this by first importing its component at the top `import Button from "@/components/Button";` and then you can use this component in your html any where you want as shown

    ```
    <Button
          value='Click to add'
          customClass="bg-gray-500 p-2 rounded-lg text-white"
          onClick={upCount}
    />
    ```

We use these external component to render things like buttons, input types, radios and checkboxes and more.

- components as functions?

We can use components as basic js functions too if we can invoke it as a function as shown `InnerComponent()`. The difference is that we can make components as functions with using rounded brackets instead of carets `<></>`.

Types of components

Functional components
- These are the most common tye of components used in react and next js, they are defined as JavaScript functions and usually return a JSX (JavaScript XML) which describes the components structure or behavior. They don't have states so they are known as stateless or dumb components.

  example
  ```
  // FunctionalComponent.js
  import React from 'react';

  const FunctionalComponent = () => {
    return <div>This is a functional component.</div>;
  };

  export default FunctionalComponent;
  ```

Class Components
- These are traditional class components that extend the base **React.Component** class. They have more features as they can have internal states and lifecycle methods. Class based components are still supported in next js eventhough functional based components are more preferred.

  example
  ```
  // ClassComponent.js
  import React, { Component } from 'react';

  class ClassComponent extends Component {
    render() {
      return <div>This is a class component.</div>;
    }
  }

  export default ClassComponent;
  ```

Higher-order Components (HOC)
- These type of components take in components and return an enhanced version of that component. These are used for reusing component logics like handling authentication and passing props to a component.

  example
  ```
  // withAuthentication.js
  import React from 'react';

  const withAuthentication = (WrappedComponent) => {
    return class extends React.Component {
      render() {
        return (
          <div>
            {/* Additional authentication logic */}
            <WrappedComponent {...this.props} />
          </div>
        );
      }
    };
  };

  export default withAuthentication;
  ```

Next js specific Components
- Next js also has some specific components of its own like the **Link** component which creates client-side navigation between pages. Another one is **Head** component which handles the document's `<head>` section, **Image** is another one which is responsible for optimized image loads.

  examples
  ```
  // LinkComponent.js
  import React from 'react';
  import Link from 'next/link';

  const LinkComponent = () => {
    return (
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    );
  };

  export default LinkComponent; 


  // ImageComponent.js
  import React from 'react';
  import Image from 'next/image';

  const ImageComponent = () => {
    return (
      <div>
        <Image src="/path/to/image.jpg" alt="Description" width={500} height={300} />
      </div>
    );
  };

  export default ImageComponent;
  ```

Page Components
- Pages are components that define the routes in a next app. These are placed in the pages folder and becomes accessible as individual routes. These can be either functional or class based components. 

  example
  ```
  // pages/index.js
  import React from 'react';

  const IndexPage = () => {
    return <div>This is the home page.</div>;
  };

  export default IndexPage;
  ```

Client-Side Components
- These are components that are directly rendered or excuted on the client end (user's browser). They are responsible for reflecting any changes made from the server. They make the web page fully dynamic and interactive for the users and especially when apps are made in either react or next js where the changes are reflected without the need for a full page reload or interacting with the server. An example being handling form validations where users are needed to fill in some key details and this will show an error even before the request is sent to the server. We can also show updates dynamically by usin Application Programming Interfaces or API as our client side is connected with the server.

Server

- It is known as the **brain** where the users (me, you, any person) is able to interact with a peice of software by sending in requests from their end known as client side. Client side means the user end and in terms of a web application, it means your browser. A server can handle incomming requests, perform certain programmed actions, interact with the database and return the output back to the client. 

Server-Side Components 
- These are components that are generated on the server instead of the client, in next js all JSX components by default are server side and so you would need to make sure that they do not have client side hooks like useState or useEffect as they are client side. This feature where the components are server side by default makes sure that out app perfroms better, has a better SEO which means that the app you make will be more visible, users get a better experience as there are no delays in loading the web-page and it lets us dynamically show and hide components are only 1 time the full bundle is loaded and after that React/Next takes over the routing and the navigation which means no re-rendering of the web pages after its initial loading. 


*NOTE*:
As per the latested next js version, all components are by default server side and so to use the client cide you must use the 
**'use client'** directive (keyword) on top of your component so that it will become a client side component.

Linking and Navigation

linking is when in basic html we use an anchor tag to jump to other page and navigation is when we use a button to go to a different page.

*NOTE*:
There us an issue when auto importing the useRouter hook when using VS code. The correct statement is `import { useRouter } from 'next/navigation';`

The next js documentation recommends using the `<Link href=''></Link>` tags but if you want to navigate between pages programatically then use the useRouter() hook

example
```
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  // this is made so that you don't have to keep repeating router.push()
  const route = (url) => {
        router.push(url);
    }
  
    const handleLandingPage = () => {
      route('/');
    }

  return (
    <Button
      onClick={handleLandingPage}
      value='Landing Page'
      customClass=''
   />
  )
}
```

Links are used like anchor where you can let the users navigate without, let's say, any condition but you can use the useRouter() to make sure that if the user, for example, needs to be logged in then they cannot manually change the url from their browser and enter in the app so a basic if-else check can ensure that only logged-in users can access the contents.

## Dynamic route
We use dynamic routes to open pages based on a certain unique detail like an id for example. This comes in handy when, let's say, we want to show complete data of a single item or complete data of a person who is using the application. 

### Dynamic route folder structure
Since we are working with nextjs, there is a certain way we make dynamic routes. It is made by using a set of square brackets `[]`. Firstly you need to make a new directory(folder) inside the app directory where all our front-end pages are being made.

- src/app/users/[id]/page.js

- src and app are already made when we install next js app
- users is a directory I made for storing all my pages that are related to users.
- now notice I made another directory by the name of `[id]`. This is how next js can know that this is a dynamic route.
- the page.js is the usual js file that we use to show in the browser.

### Code example

- First step is to actually have an api for working, I am using a free api available on the internet called `https://jsonplaceholder.typicode.com`.

    In my project I made a seperate api folder where only the api urls will be stored as shown below
    ```
    const API_URL = process.env.API_URL;

    const usersApi = {
        users: 'https://jsonplaceholder.typicode.com/users',
        editUsers: (id) => `https://jsonplaceholder.typicode.com/users/${id}`,

        getUsers: API_URL + '/users',
        getUser: (id) => `/api/users/${id}`,
        createUser: '/api/users',
        updateUser: (id) => `/api/users/${id}`,
        deleteUser: (id) => `/api/users/${id}`,
    };

    export default usersApi;
    ```

    Now we can use the usersApi to use any method defined inside this object.

- Next we will the editUsers method and loop it so that it can generate unique query parameters for different users. Fisrt we can use a hook called useEffect to get the data of all the users

    ```
    <!-- Get all users -->
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch(usersApi.users);
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.log(error);
            }
        }
        getUsers();
    }, []);
    ```

- Next we are going to loop it to show it in a tabular form
    ```
    <div className="relative overflow-x-auto shadow-md          sm:rounded-lg ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 text-center">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Username
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-center">
                        <td className='px-6 py-4'>
                            {user.name}
                        </td>
                        <td className='px-6 py-4'>
                            {user.username}
                        </td>
                        <td className='px-6 py-4'>
                            {user.email}
                        </td>
                        <td className='px-6 py-4 flex justify-center space-x-1'>
                            <Button
                                type='submit'
                                value='Delete'
                                customClass='bg-red-500 hover:bg-red-700 text-white mx-4'
                                onClick={deleteUser}
                            />
                            <Link href={`/users/${user.id}`}>
                                Edit
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    ```


- As you can observe that we are using the `${user.id}` as a means to show the edit page of 1 single user. The url will be something like `http://localhost:3000/users/1` where the 1 in the end represents the id of a user. Since ids are always uniquely generated by the database so this is better to use. You can also use strings as well known as a website's slug or whatever you wish.

- Here is the link to dynamic routes **https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes**