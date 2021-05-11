import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from  './SocialMedia/social-media';

const Container = ({ title, content, time, description, image, url }) => {
    return (
        <>
            <div className="bg-white pa2 ma4 grow">
                <aside style={{ float: 'left', marginRight: '30px' }}>
                    <img
                        alt='...'
                        src={image}
                        width='390px'
                        height='auto'
                    />
                </aside>


                <div>
                    <h2>{title}</h2>
                    <p style={{ fontSize: '15px' }}> {description}</p>
                    <p> {content}</p>
                    <p> Date published: {time}</p>
                    <span>
                        <a href={url} style={{ textDecoration: 'none' }}> Click to read more</a>
                    </span>
                    
                    <SocialMedia url={url} title={title}/>
                </div>

            </div>
        </>
    )

}

export default Container;