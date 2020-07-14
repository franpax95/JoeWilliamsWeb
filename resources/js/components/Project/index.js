import React from 'react';
import './Project.css';

const nl2br = (str) => str.split("\n").map((item, key) => (
    <React.Fragment key={key}>{item}<br/></React.Fragment>
));

/**
 * Primer elemento de cada proyecto
 */
const FirstElement = ({ description, type }) => (
    <div className="FirstElement">
        <div className="desc" style={{ fontSize: (description.length > 100 && window.innerWidth < 800) ? '11px' : '14px' }}>
            {nl2br(description)}
        </div>
        <div className="type">{nl2br(type)}</div>
    </div>
);

/**
 * Layout de los proyectos
 */
const Project = ({ project, children }) => {
    return (
        <div className="Project" style={{ width: (children.length || window.innerWidth < 800) ? 'auto' : '100%' }}>
            <div className="title">{project.title}</div>
            <FirstElement description={project.description} type={project.type} />
            {children}
        </div>
    );
}

const ImgWrapper = ({ src, alt, size = 'big', background = 'background-none' }) => (
    <div className={`ImgWrapper ${size} ${background}`}  style={{ marginLeft: (alt === "The Dark Elf") ? 'auto' : '' }}>
        <img src={src} alt={alt} />
    </div>
);

const TextWrapper = ({ text = '' }) => (
    <div className="TextWrapper">{nl2br(text)}</div>
);




/**
 * Controller
 */
const ProjectController = ({ project = {} }) => {
    if(Object.values(project).length){
        switch(project.id){

            /** c-word */
            case 1:
                return (
                    <Project project={project}>
                        <ImgWrapper src={project.img.img1} alt={project.title} size="big" />
                        <ImgWrapper src={project.img.img2} alt={project.title} size="big" />
                        <TextWrapper text={project.details} />
                        <ImgWrapper src={project.img.img3} alt={project.title} size="medium" background="c-word" />
                        <ImgWrapper src={project.img.img4} alt={project.title} size="medium" background="c-word" />
                        <ImgWrapper src={project.img.img5} alt={project.title} size="medium" background="c-word" />
                        <ImgWrapper src={project.img.img6} alt={project.title} size="medium" background="c-word" />
                        <ImgWrapper src={project.img.img7} alt={project.title} size="medium" background="c-word" />
                        <ImgWrapper src={project.img.img8} alt={project.title} size="medium" background="c-word" />
                        <ImgWrapper src={project.img.img9} alt={project.title} size="medium" background="c-word" />
                    </Project>
                );

            /** Velvet */
            case 2: //Cambiar seed para ponerlo el 2do
                return (
                    <Project project={project}>
                        <ImgWrapper src={project.img.img1} alt={project.title} size="big" />
                        <ImgWrapper src={project.img.img2} alt={project.title} size="big" />
                        <ImgWrapper src={project.img.img3} alt={project.title} size="big" />
                        <ImgWrapper src={project.img.img4} alt={project.title} size="big" />
                        <ImgWrapper src={project.img.img5} alt={project.title} size="big" />
                        <ImgWrapper src={project.img.img6} alt={project.title} size="big" />
                        <ImgWrapper src={project.img.img7} alt={project.title} size="big" />
                    </Project>
                );

            /** Sync */
            case 3: //Cambiar seed para ponerlo el 3ero
                return (
                    <Project project={project}>
                        <ImgWrapper src={project.img.img1} alt={project.title} />
                    </Project>
                );
            
                /** fluttering flamingo */
            case 4: //Cambiar seed para ponerlo el 4to
                return (
                    <Project project={project}>
                        <ImgWrapper src={project.img.img1} alt={project.title} size="medium" background="fluttering-flamingo" />
                        <ImgWrapper src={project.img.img2} alt={project.title} size="medium" background="fluttering-flamingo" />
                        <ImgWrapper src={project.img.img3} alt={project.title} size="medium" background="fluttering-flamingo" />
                        <ImgWrapper src={project.img.img4} alt={project.title} size="medium" background="fluttering-flamingo" />
                        <TextWrapper text={project.details} />
                        <ImgWrapper src={project.img.img5} alt={project.title} size="medium" background="fluttering-flamingo" />
                        <ImgWrapper src={project.img.img6} alt={project.title} size="medium" background="fluttering-flamingo" />
                    </Project>
                );
            
                /** Synchronicity */
            case 5:
                return (
                    <Project project={project}>
                      <ImgWrapper src={project.img.img1} alt={project.title} />
                    </Project>
                );
            
                /** lara logan case */
            case 6:
                return (
                    <Project project={project}>
                        <ImgWrapper src={project.img.img1} alt={project.title} size="medium" background="lara-logan" />
                        <ImgWrapper src={project.img.img2} alt={project.title} size="medium" background="lara-logan" />
                        <ImgWrapper src={project.img.img3} alt={project.title} size="medium" background="lara-logan" />
                        <ImgWrapper src={project.img.img4} alt={project.title} size="medium" background="lara-logan" />
                        <ImgWrapper src={project.img.img5} alt={project.title} size="medium" background="lara-logan" />
                    </Project>
                );
            
                /** Dark Elf */
            case 7:
                return (
                    <Project project={project}>
                        <ImgWrapper src={project.img.img1} alt={project.title} />
                    </Project>
                );

            /** Human Herd*/
            case 8:
                return (
                    <Project project={project}>
                        <ImgWrapper src={project.img.img1} alt={project.title} />
                        <ImgWrapper src={project.img.img2} alt={project.title} size="small" background="human-herd" />
                        <ImgWrapper src={project.img.img3} alt={project.title} />
                        <ImgWrapper src={project.img.img4} alt={project.title} size="small" background="human-herd" />
                        <ImgWrapper src={project.img.img5} alt={project.title} size="small" background="human-herd" />
                        <ImgWrapper src={project.img.img6} alt={project.title} />
                        <ImgWrapper src={project.img.img7} alt={project.title} />
                    </Project>
                );
        
            default:
                return "";
        }
    }else{
        return "";
    }
}

export default ProjectController;