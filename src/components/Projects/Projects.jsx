import React, {useState} from 'react';
import './Projects.css';
import projectLists from './projectLists';

function Projects() {
    const [list, setList] = useState(projectLists);
    
    const displayList = list.map(list =>(
            <div className="card border-success col-sm-3" key={list.key}>
            <div className="card-header bg-dark border-success ">{list.title}</div>
                <img src={list.image}  alt={list.title} />
                    <div className="card-text bg-dark">{list.description}</div>
                    <div className='icon bg-dark'>

                        {list.icon.map(icon=>(
                            <i className={icon}></i>
                        ))}

                    </div>
                <div className="links card-footer bg-dark border-success">
                    <div><a href={list.github} className="card-link">Github</a></div>
                    <div><a href={list.deploy} className="card-link">WepPage</a></div>
                </div>
            </div>
    ))

    return (
        <>
        <video src='/videos/1.mp4' autoPlay loop muted />
        <div className='row'>{displayList}</div>
        </>
    )
}

export default Projects
