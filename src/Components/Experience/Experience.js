import React from 'react'
import './Experience.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import DIEMlife from '../../assets/DIEMlife.png'

class Experience extends React.Component {
    render() {
        return(
            <div>
                <p className="hint">You can read all about this information on my <Link className="experience-link" to="/Resume">resume</Link>, but this page offers a bit more of ✨personality✨</p>
                <div className="experience-timeline">
                    <h1 className="experience-header">Experience</h1>
                    <ExperienceList experiences={experiences}></ExperienceList>
                    <h1>Projects</h1>
                    <ExperienceList experiences={projects}></ExperienceList>
                </div>
            </div>
        )
    }
}

function ExperienceList(props) {
    const experiences = props.experiences;
    const experienceList = experiences.map((experience) =>
        <ExperienceItem
        title={experience.title}
        role={experience.role}
        duration={experience.duration}
        description={experience.description}
        ></ExperienceItem>
    );
    return(
        <div>
            {experienceList}
        </div>
    )
}

function ExperienceItem(props) {
    return(
    <div className="experience-card">
        <div className="experience-card-header">
            <div className="header-left">
                <div className="title">
                    {props.title}
                </div>
                <div className="role">
                    {props.role}
                </div>
            </div>
            <div className="duration">
                {props.duration}
            </div>
        </div>
        <div className="experience-card-body">
            {props.description}
        </div>
    </div>
    )
}

const experiences = [
    {
        title: "Garmin",
        role: "Software Engineer Intern",
        duration: "May 2022 - August 2022",
        description: <div>
            <div>
                <a className="experience-link" href="https://connect.garmin.com/modern/" target="_blank" rel="noreferrer">Garmin Connect Web</a> is the goto application for all Garmin users worldwide, supporting over 10 million customers. I worked on this web application in React and Backbone to resolve bugs,
                improve features, and implement new ones. My primary project was implementing a new workouts feature in collaboration with business and design teams. One of the biggest takeaways
                I had for this project was how important it is to design first, then code later. Working with mobile developers, we
                designed and presented an implementation structure for the feature, and it made the development process run smoothly, allowing us to make sure all platforms were in sync.
                <br></br>
                <br></br>
                I also had the opportunity to work with the Connect API team to develop an internal API endpoint to cache thousands of beta users to enable granular logging, and it was fun to get my hands on both the frontend and backend during my time at Garmin. I also got really good at ping pong :)
            </div>
        </div>
    },

    {
        title: "DIEMlife",
        role: "Software Engineer Intern",
        duration: "May 2021 - July 2021",
        description: <div>
            <img className="experience-img" src={DIEMlife} alt="diemlife"></img>
            <div>
                DIEMlife is a platform focused around the idea of Quests, which can be fundraisers or challenges that groups or even individuals can host. DIEMlife has
                both a web application and mobile apps (iOS and Android). As a software engineer intern, I worked on both web and mobile, in the frontend
                and backend. While I developed in Angular and Java for the webapp, I learned Nativescript as I worked through the mobile app. I was also in charge of deploying the app
                through Jenkins. Apart from bug fixes and feature enhancements, I also created the first version of an activity page which you can see above. Finally, I launched a proof
                of concept for Apple Health/Google Fit automation of user activity logging.
            </div>
        </div>
    },

    {
        title: "METEOR Studio",
        role: "Research Assistant",
        duration: "June 2020 - December 2020",
        description: <div>
            At METEOR I worked within the Augmented Fluidity team, a subgroup focused on creating immersive virtual reality (VR) experiences for chemistry students. Our goal was to recreate
            common labs performed in chemistry classes with a VR headset and 3D printed lab materials. Essentially, students could see the lab scene in the headset and use 3D printed burettes
            that had haptic feedback to emulate the feeling of flowing water. My job was tying the entire experience together, adding pre-lab and post-lab questions that teachers could upload
            to a webpage which would be brought into the project for students to answer, as well as tutorials, lab procedures, and data tables to enter data. 
            <br></br>
            <br></br>
            You can read more about my time
            at METEOR in <a className="experience-link" href="https://drive.google.com/file/d/1eyi0f5QqEMk-WW7uMPdEJLixzzecJIdS/view?usp=sharing" target="_blank" rel="noreferrer">my report</a> and this 
            <a className="experience-link" href="https://drive.google.com/file/d/15QyVUm6HNJ5fgZxixds6TnChWQ41eIfR/view?usp=sharing" target="_blank" rel="noreferrer"> concept video.</a>
        </div>
    },

    {
        title: "UC Berkeley College of Engineering",
        role: "CS61B Academic Intern",
        duration: "August 2020 - December 2020",
        description: <div>
            I had the wonderful opportunity to help teach CS61B, a data structures and algorithms course at Berkeley. Assisting labs of 50+ students, 
            I got to spread my knowledge of runtime analysis, linked lists, trees, hashing, and searching/sorting algorithms among other things.
        </div>
    }
    
]

const projects = [
    {
        title: "Illumine",
        description: <div>
            From PillaRx to PillarU, this startup had as many names as it had pivots. As the project manager for <a className="experience-link" href="https://onepager.vc/illumine" target="_blank" rel="noreferrer">Illumine</a>, 
            I worked day in and day out with a team of four UC Berkeley students, their majors ranging from CS to Economics to Mechanical Engineering. 
            This was an amazing experience being able to lead a team in ideating, drafting, and ultimately pitching a minimum viable product aimed at giving high school students
            an opportunity to see campus culture through university students.
        </div>,
        link: "https://onepager.vc/illumine"
    },
    {
        title: "bQuarky (HackMIT)",
        description: <div>
            <a className="experience-link" href="https://ucb-dha.web.app/" target="_blank" rel="noreferrer">bQuarky</a> was a hackathon project that recommended users activities based on their interests. The catch- I was the only one who knew how to code on my team.
            Overall, this hack, although challenging, was really fun, as I was able to teach not only myself but also my teammates (psst... click on the dogs on the website) about web development, all while
            improving people's quarantined lives (at the time).
        </div>
    }, {
        title: "Gitlet (CS61B)",
        description: <div>
            Possibly the hardest project I've had during my time at Berkeley, Gitlet is a lightweight version of Git.
            Gitlet supports common git commands such as status, add commit, merge, checkout etc. What made this project so challenging
            was the sheer amount of code that had to be written- I had to maintain a large mental model of what was going on. What really helped
            me get through this project was a design document where I could really ask myself which data structures I needed when implementing Gitlet.
            whooooooooooo gitlettttt!
        </div>
    }
]

export default Experience;