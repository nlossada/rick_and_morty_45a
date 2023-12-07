import style from "./About.module.css"

function About(props) {

    return (
        <div className={style.container}>

            <img src="../img/cv.jpg" alt="My personal photo" />

            <div>
                <h1>About Me</h1>
                <p>Hello everyone! My name is Natalia Lossada,I am 32 years old, and I am just exploring this whole
                    new world that is full stack programming. Programming has always caught my attention and this year, after a great trip around the world and specifically Australia, I decided to make a profound professional change and start this new career.</p>
                <button> <a href="https://www.linkedin.com/in/natalia-lossada/" target="_blank">Go to My LinkedIn</a></button>
                <button> <a href="https://github.com/nlossada" target="_blank">Go to My GitHub</a></button>
            </div>
        </div>
    )
}
export default About;