import React from "react"
import './about.css'
import ME from '../../assets/about-me.png'
import {GrProjects} from 'react-icons/gr'
import {ImBlog} from 'react-icons/im'
import {GiBurningPassion} from 'react-icons/gi'

function About(){
    return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="About" />
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <GrProjects className="about__icon" />
                        <h5>Projects</h5>
                        <small>10+ completed projects</small>
                    </article>

                    <article className="about__card">
                        <ImBlog className="about__icon" />
                        <h5>Blogs</h5>
                        <small>I write about everything</small>
                    </article>

                    <article className="about__card">
                        <GiBurningPassion className="about__icon" />
                        <h5>Interests</h5>
                        <small>
                            <ul>
                                <li>Building Communities</li>
                                <li>Growth Hacking</li>
                                <li>Front-End Dev</li>
                            </ul>
                        </small>
                    </article>

                </div>
                <p>
                    Lorem ipsum, s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                </p>
                <a href="#contact" className="btn btn-primary">Send Location</a>
            </div>
        </div>
    </section>
    )
}

export default About;