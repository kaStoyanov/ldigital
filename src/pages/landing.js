import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/mark.png'
import pic09 from '../assets/images/mark2.jpeg'
import pic10 from '../assets/images/mark3.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Social Media Marketing </title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>FACEBOOK ADVERTISING</h2>
                    </header>
                    <p>Our management will also take care of your Facebook advertising. With our Facebook ad campaigns, you can expect your brand to boost its visibility due to our exact interest and demographic targeting. We will reach audiences you didn't know you had!</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/landing" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>INTERACTIVE CAMPAIGNS</h3>
                            </header>
                            <p>Interactive campaigns typically include contests, quizzes, and chats. We might initiate a photo contest that calls on people in your target market to share a creative picture of your product.  Along those lines, we might also run a video contest that highlights your product or service.

Quizzes are another great way to build engagement. We’ll set up quizzes that will appeal to people in your target market and give each one of them a clickbait title that brings visitors flocking to your website.</p>
                            
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/landing" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>SOCIAL MEDIA MANAGEMENT</h3>
                            </header>
                            <p>There are two parts to social media management. First, we’ll determine which social media channels are suited to your brand. Then, we’ll help you use various social media sites to manage your brand online.For example, if your company is in the B2B space, you’ll want to promote your brand on LinkedIn. On the other hand, if your company is in the fashion industry, you’ll likely find more success on image-focused social media sites like Pinterest and Instagram.

                            We’ll work with you to set goals about social media updates. We’ll offer pointers about the type of content you should include in your updates and how often you should post to social media.</p>
                            
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/landing" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>SOCIAL MEDIA ADVERTISING</h3>
                            </header>
                            <p>Many sites allow you to direct your advertising efforts to people based on demographics and interests. That means you can get the best bang for your buck by showing your ads only to social media users who are likely to be a part of your target market.

In some cases, you might want to optimize your ad for maximum clicks and pay per click. For other campaigns, you might prefer to pay per impression. We will work with you to determine the social media advertising strategy that will give you the best return on investment. We’ll make sure that your ad runs on the right social media channels and that it’s targeted to just the right audience.</p>
                            
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing