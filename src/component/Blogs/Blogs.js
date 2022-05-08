import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='h-screen'>
            <div className='container'>
                <Accordion className='my-10 md:my-20'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>#1. Difference between javascript and nodejs ?</Accordion.Header>
                        <Accordion.Body>
                            <div className='grid grid-cols-2'>
                                <ul>
                                    <li className='border-2 border-gray-500 p-1 text-center font-bold text-lg'>Javascript</li>
                                    <li className='border-2 border-gray-500 p-1'>Javascript is a programming language that is used for writing scripts on the website. </li>
                                    <li className='border-2 border-gray-500 p-1'>Javascript can only be run in the browsers.</li>
                                    <li className='border-2 border-gray-500 p-1'>It is basically used on the client-side.</li>
                                    <li className='border-2 border-gray-500 p-1'>Javascript is capable enough to add HTML and play with the DOM. </li>
                                    <li className='border-2 border-gray-500 p-1'>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </li>
                                    <li className='border-2 border-gray-500 p-1'>Javascript is used in frontend development.</li>
                                </ul>
                                <ul>
                                    <li className='border-2 border-gray-500 p-1 text-center font-bold text-lg'>Node JS</li>
                                    <li className='border-2 border-gray-500 p-1'>NodeJS is a Javascript runtime environment.This is a part of javascript</li>
                                    <li className='border-2 border-gray-500 p-1'>We can run Javascript outside the browser with the help of NodeJS.</li>
                                    <li className='border-2 border-gray-500 p-1'>It is mostly used on the server-side.</li>
                                    <li className='border-2 border-gray-500 p-1'>Nodejs does not have capability to add HTML tags.</li>
                                    <li className='border-2 border-gray-500 p-1'>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </li>
                                    <li className='border-2 border-gray-500 p-1'>Nodejs is used in server-side development.</li>
                                </ul>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>#2. When should you use nodejs and when should you use mongodb ?</Accordion.Header>
                        <Accordion.Body>
                            <div className='grid grid-cols-2'>
                                <p><strong>Node js:</strong></p>
                                <p><strong>Mongo db:</strong></p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>#3. Differences between sql and no-sql databases.</Accordion.Header>
                        <Accordion.Body>
                            <div className='grid grid-cols-2'>
                                <ul>
                                    <li className='border-2 border-gray-500 p-1 text-center font-bold text-lg'>SQL</li>
                                    <li className='border-2 border-gray-500 p-1'>SQL databases are relational </li>
                                    <li className='border-2 border-gray-500 p-1'>SQL databases use structured query language and have a predefined schema</li>
                                    <li className='border-2 border-gray-500 p-1'>SQL databases are vertically scalable</li>
                                    <li className='border-2 border-gray-500 p-1'>SQL databases are table-based,</li>
                                    <li className='border-2 border-gray-500 p-1'>SQL databases are better for multi-row transactions</li>
                                </ul>
                                <ul>
                                    <li className='border-2 border-gray-500 p-1  text-center font-bold text-lg'>NoSQL</li>
                                    <li className='border-2 border-gray-500 p-1'>NoSQL databases are non-relational.</li>
                                    <li className='border-2 border-gray-500 p-1'>NoSQL databases have dynamic schemas for unstructured data.</li>
                                    <li className='border-2 border-gray-500 p-1'>NoSQL databases are horizontally scalable.</li>
                                    <li className='border-2 border-gray-500 p-1'>NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                                    <li className='border-2 border-gray-500 p-1'>NoSQL is better for unstructured data like documents or JSON.</li>
                                </ul>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>#4. What is the purpose of jwt and how does it work ?</Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <p><strong>JWT, or JSON Web Token</strong>, is an open standard used to share security information between two parties — a client and a server.</p>
                                <p><strong>JWT 's</strong>are distinct from conventional web tokens in that they include a list of claims. Climes are used to send and receive data between two parties. These Climes differ depending on the use scenario.</p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;