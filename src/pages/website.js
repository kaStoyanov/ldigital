import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import web1 from '../assets/images/web1.png'
import web2 from '../assets/images/web2.png'
import web3 from '../assets/images/web3.png'
import web4 from '../assets/images/web4.png'
import web5 from '../assets/images/web5.png'
import web6 from '../assets/images/web6.png'
import web7 from '../assets/images/web7.png'
import web8 from '../assets/images/web8.png'

const Website = (props) => (
    <Layout>
        <Helmet>
            <title>Website Building</title>
            <meta name="description" content="Elements Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Building your Website</h1>
                    </header>

                    <h2 id="content">Powerful designs that capture attention and drive conversion</h2>
                    <div className="grid-wrapper">
                        
                    <p className="col-8">Website design plays a vital role in building a strong online presence for any business. In today’s digital landscape, your business website must be responsive, easy-to-navigate, and unquestionably appealing with thematic visuals that attract potential prospects.<br/>But we know Time is money and That`s why we work fast,after finishing the conversion with you ,we start working on your project.And we deliver fast,how fast?Within 2-3 business days.

</p>
</div>
<div className="grid-wrapper">
                    <div className="col-3"><span className="image fit"><img src={web1} alt="" /></span></div>
                    <div className="col-3"><span className="image fit"><img src={web2} alt="" /></span></div>
                    <div className="col-3"><span className="image fit"><img src={web3} alt="" /></span></div>
                    <div className="col-3"><span className="image fit"><img src={web4} alt="" /></span></div>
                    
</div>
                    <div className="grid-wrapper">
        
                        <div className="col-10">
                            <h3>Conversion based designs</h3>
                            <p>
So, you've got big dreams, how much time have you put into planning? Into executing? Dreams are great, but you won't get far with them until you've converted them into goals.We are here to help you achieve those goals.We will help you turn all the effort,late hours and investments into something remarkable.
</p>


                        
                        

                        
                            
                            <h3>
Easy and Clear Design</h3>
                            <p>User understanding of the content of a website often depends on user understanding of how the website works. This is part of the user experience design. User experience is related to layout, clear instructions and labeling on a website. How well a user understands how they can interact on a site may also depend on the interactive design of the site. If a user perceives the usefulness of the website, they are more likely to continue using it.</p>
                        </div>
                        

                    </div>

                    <hr className="major" />
                    <div className="grid-wrapper">
                    <div className="col-3"><span className="image fit"><img src={web5} alt="" /></span></div>
                    <div className="col-3"><span className="image fit"><img src={web6} alt="" /></span></div>
                    <div className="col-3"><span className="image fit"><img src={web7} alt="" /></span></div>
                    <div className="col-3"><span className="image fit"><img src={web8} alt="" /></span></div>
                    
</div>

                  
                            

                                

                    

                 

                        

                </div>
            </section>

        </div>

    </Layout>
)

export default Website