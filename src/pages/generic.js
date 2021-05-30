import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'
import PPC1 from '../assets/images/PPC1.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Pay per click</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Pay per click</h1>
                    </header>
                    <span className="image main"><img src={PPC1} alt="" /></span>
                    <p>Our pay-per-click team members are experts in their field,Google Adwords certified. They deliver high-value traffic sculpting within Google Ads all the while focusing on precise intent-targeting to make sure that each ad is being placed in front of our clients' target audiences. Coincided with our traffic and targeting tactics within our paid media strategies, We have in-house content writers who create conversion-driven, custom copy to drive home results.</p>
                    <h2>Our PPC company optimizes your bids for the best ROI</h2>
                    <p>When you partner with us, we provide strategic bid management. Based on your industry, as well as your products and services,We make data-backed decisions when it comes to managing and determining your bid, per your monthly ad spend.</p>
                    <p>Whether you’re looking to earn a new lead, sale, or sign-up from your ads, our advertising agency keeps check on your goals and progress with the marketing strategy planed for you</p>
                    <p> The best PPC agencies use data to your advantage. That’s why our pay-per-click advertising firm analyzes your ads and landing pages to determine how they’re performing and how users interact with them.

Based on testing like A/B tests, our PPC ad agency can make suggestions on how to improve your ads to ensure that they’re driving the most results possible. We also provide transparent reporting for our website conversion analysis assessment and results. </p>
                    <h2>Remarketing</h2>
                    <p>If you're interested in remarketing campaigns, our PPC team is probably already looking into the best campaign for your needs! Pay-per-click remarketing management is able to strategize and reach high-intent audiences with precise audience segmentation for gaining back or following up with new or existing users. We truly keep your brand at the forefront of it all.</p>
                    <p>Our display strategies include creating custom, attention-grabbing visuals paired with high-quality placements. Our in-house designers work hand-in-hand with our pay-per-click team to make each ad unique and conversion-driven. Ignite's paid media values the importance of each step in the PPC process and tailors it per deliverable.</p>
                   
                   
                    <h3>Schedule a call with us to get yout tailored marketing strategy made just for you.</h3>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic