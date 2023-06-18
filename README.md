This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

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

