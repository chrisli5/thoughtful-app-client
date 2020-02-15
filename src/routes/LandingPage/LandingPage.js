import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import mindful from '../../images/mindful.png';
import learn from '../../images/learn.png';
import time from '../../images/time.png';
import visual from '../../images/visual.png';
import './LandingPage.css';

class LandingPage extends Component {
    render() {
        return (
            <section className='landing-page'>
                <div className='hero'>
                    <img className='hero__image' src={mindful} alt='img-mindful' />
                    <div className='hero__container'>
                        <h1 className='hero__title'>Your mindfulness journey begins here.</h1>
                        <p className='hero__content'>Meditation has been scientifically proven to rewire your brain for happiness, peace, and success. Though the practice provides immense benefits to our health, it is very difficult to stay motivated to meditate consistently. Thoughtful attempts to address this issue by allowing users to track their progress and reflect on the improvements they've made.</p>
                    </div>
                </div>
                <div className='features'>
                    <h2 className='features__title'>App Features</h2>
                    <p className='features__content'>Thoughtful currently has these features implemented</p>
                    <div className='features__container'>
                        <div className='features-card'>
                            <img className='features-card__image' src={learn} alt='img-learn' />
                            <h3 className='features-card__title'>Record your thoughts</h3>
                            <p className='features-card__content'>Jot down your thoughts during meditation sessions to see how it affected your mood.</p>
                        </div>
                        <div className='features-card'>
                            <img className='features-card__image' src={time} alt='img-time' />
                            <h3 className='features-card__title'>Track session lengths</h3>
                            <p className='features-card__content'>Record the length of each meditation session to track progression.</p>
                        </div>
                        <div className='features-card'>
                            <img className='features-card__image' src={visual} alt='img-visual' />
                            <h3 className='features-card__title'>Track your progress</h3>
                            <p className='features-card__content'>Track your progress over time to stay motivated with the practice.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        )
    }
}

export default LandingPage;