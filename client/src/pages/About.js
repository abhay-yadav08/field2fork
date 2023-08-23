import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
    return (

        <Layout>
            <div className="row contactus ">
                {/* <div className="col-md-6 ">
                    <img
                        src="/images/about.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div> */}
                <div className="col-md-4">
                    <h4 className='p-2 con text-white text-center'>Welcome to field2fork!</h4>

                    <h5>At field2fork, we're passionate about connecting farmers and consumers in a way that benefits everyone. Our platform serves as a bridge between hardworking farmers and consumers .</h5>

                    <p className="text-justify mt-2">
                        <h6>what we offer :- </h6>
                        <ul>
                            <li>A diverse range of fresh produce, dairy products, meats, and more directly from local farms</li>
                            <li>A user-friendly experience that makes it easy for you to find and purchase the best products</li>
                        </ul>
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default About

