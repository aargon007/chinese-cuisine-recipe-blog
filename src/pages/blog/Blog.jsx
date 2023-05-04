import React, { createRef } from 'react';
import Pdf from "react-to-pdf";

const ref = createRef();

const Blog = () => {
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [8,11]
    };
    return (
        <div>
            <h1 className='bg-purple-100 px-5 md:px-28 text-2xl font-bold text-center py-10'>Interview Question Blog</h1>
            <div className='px-5 md:px-28 py-10' ref={ref}>
                <div className=''>
                    <h1 className='text-xl font-semibold'>1. What is the differences between uncontrolled and controlled components.?</h1>
                    <p className='p-5 tracking-wider leading-8'>In a controlled component, form data is handled by a React component(data pass on every onChange event). Whereas in uncontrolled components, form data is handled by the DOM itself.
                    Usage of Component State is a must for controlled components. Use of state is completely optional for uncontrolled components, but one must use Refs in it.
                    With controlled components, we can validate as the input is being changed but the same is not possible with uncontrolled components.</p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>2. How to validate React props using PropTypes?</h1>
                    <div className='p-5 tracking-wider leading-8'>
                         <p>PropTypes is React’s internal mechanism for adding type checking to component props. React components use a special property called propTypes to set up type checking. You can install it in your project by running the following command in your terminal: </p>
                    <code className='font-semibold'>$ npm install prop-types --save</code> <br />
                    <p>Once it has been installed, you will first have to import it into whichever component you want to use to access its features.</p>
                    <code className='font-semibold'>import PropTypes from 'prop-types';</code> <br />
                    <p>When you import it into your component, you can now attach the component name to the PropTypes method and create an object containing all your prop's validation.</p>
                    
                     When props are passed to a React component, they are checked against the type definitions configured in the propTypes property. When an invalid value is passed for a prop, a warning is displayed on the JavaScript console:</div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>3. Difference between nodejs and express js.?</h1>
                    <p className='p-5 tracking-wider leading-8'>Node.js is a library for execution of JavaScript applications external to the browser. It comes to use when you want to create server-side programs or network a web application. Its elementary modules are inscribed in JavaScript. It is mostly used for server applications in real-time.On the otherhand,  Express.js is a small Node.js framework of web application. It is used to build web-apps using approaches and principles of Node.js like create APIs. Express.js uses many Node.js features to call functions anywhere. Many multifaceted tasks that take numerous lines of code and hours of programming in Node.ja can be written in less number of lines and in a few minutes.  </p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>4. What is a custom hook, and why will you create a custom hook?</h1>
                    <p className='p-5 tracking-wider leading-8'> Custom React hooks are reusable functions that we can use to add special and unique functionality to the React applications.A custom hook allows you to create shared component logic that can be used in many components. These custom hooks will also use the built-in hooks but in one place. They’re like functions, prefixed with “use”  which can accept any number of arguments and expose values and methods that can be used by a component.
                     Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem. But what if there is no such library with hooks that can be used? This problem is solved by using custom React JS hooks.</p>
                </div>
            </div>
            <Pdf targetRef={ref} filename="blog.pdf" options={options} scale={0.7}>
                {({ toPdf }) => <button onClick={toPdf} className='bg-amber-600 text-white p-2 rounded-lg my-5 mx-auto block'>Generate Pdf</button>}
            </Pdf>
        </div>
    );
};

export default Blog;