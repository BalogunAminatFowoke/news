import React from 'react';
import {FacebookShareButton,FacebookIcon, WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon} from 'react-share';

const SocialMedia = ({url, title}) => {
    return(
        <>
            
                <WhatsappShareButton url={url} title={title}>
                    <WhatsappIcon size={28} round={true}/> 
                </WhatsappShareButton>

                <TwitterShareButton url={url} title={title} >
                    <TwitterIcon size={28} round={true}/> 
                </TwitterShareButton>

                <FacebookShareButton url={url} quote={title} >
                    <FacebookIcon size={28} round={true}/> 
                </FacebookShareButton>
            
        </>
    )
}

export default SocialMedia;