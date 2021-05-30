import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic03 from '../assets/images/pic03.jpg'
import pic08 from '../assets/images/pic8.png'
import pic09 from '../assets/images/pic09.png'
import pic10 from '../assets/images/pic10.jpg'

const Elements = (props) => (
    <Layout>
        <Helmet>
            <title>Email Sales</title>
            <meta name="description" content="Elements Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Email</h1>
                    </header>

                    <h2 id="content">You want to be running at full steam but don’t have the hours in the day to do it all yourself.</h2>
                    <p>We get it — you’ve got a lot on your plate. You want to hire experts who’ll take time to understand your business and tell you how to supercharge your online store email marketing.

</p>

                    <div className="grid-wrapper">
                                                <div className="col-4"><span className="image fit"><img src={pic08} alt="" /></span></div>

                        <div className="col-8">
                            <h3>Research</h3>
                            <p>We start by learning about your
company, clients, products, as
well as the language and
designs you prefer to use. We
will get a complete picture of
how your brand looks and
sounds.</p>


                        </div>
                        

                        <div className="col-6">
                            <h3>Create a Strategy
& Content Plan</h3>
                            <p>Once we understand where
you stand right now, we can
suggest where you can go. Ultimately, we’ll create a
sound and sustainable email
marketing strategy as well
as an extensive content plan
for the ongoing campaigns.</p>
                        </div>

                        <div className="col-4">
                            <h3>Implement</h3>
                            <p>We get work done. You’ll need as little  as 15-30 minutes per week to review,  answers some questions and approve.  We lead and manage the entire process  – you’ll never need to wait for us.</p>
                        </div>
                        
                        <div className="col-4">
                            
                            <h3>
Evaluate
and Optimize</h3>
                            <p>When it comes to email marketing, there can’t be a cookie-cutter approach. We continuously measure results, conduct split tests, and come up with new
solutions. You’ll also receive a monthly
report with our insights.</p>
                        </div>
                        <div className="col-4">
                            
                            <h3>Play the long game together
</h3>
                            <p>We believe email marketing is more than
a revenue channel. It’s a way to increase customer engagement that will benefit you in the long run. We help you build trust with your customers and personalize their experiences with your brand.</p>
                        </div>

                    </div>

                    <hr className="major" />

                    <h2 id="elements">We play for the long run results.</h2>
                    <div className="grid-wrapper">
                        
                        <div className="col-8">
                        <div className="col-4"><span className="image fit"><img src={pic09} alt="" /></span></div>


                                <h3>We mean it when we say we’re a full-service email marketing agency.
We take care of everything and we deliver results</h3>

                                <p>We’re always there to help you. We’ll keep you informed every step of the way, provide consistent and timely updates, and explain everything. When needed, we’ll record detailed videos for you to know the what,
the how, and the why of every update.</p>
                                <hr />
                                
                            

                                

                    

                 

                        </div>
                    </div>

                </div>
            </section>

        </div>

    </Layout>
)

export default Elements