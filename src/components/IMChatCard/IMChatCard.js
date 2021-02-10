import React from 'react';
import PropTypes from 'prop-types';
import IMCard from '../IMCard/IMCard';
import IMCardBody from '../IMCardBody/IMCardBody';
import IMCardMedia from '../IMCardMedia/IMCardMedia';

function IMChatCard({title, desc, width, height, titleFontSize, titleFontWeight, titleFontFamily,  titleColor, titleAlignment, descFontSize, descFontWeight, descFontFamily, descColor, descAlignment, mediaPath, ...props}) {
    return (
        <div>
            <IMCard width={width} height={height}>
            {mediaPath  ? <IMCardMedia path={mediaPath} /> : ""}                
                <IMCardBody padding="12px">
                    <p style={{color:titleColor, fontSize:titleFontSize, fontWeight:titleFontWeight , textAlign:titleAlignment, fontFamily: titleFontFamily,}}>{title}</p>
                    <p  style={{color:descColor, fontSize:descFontSize, fontWeight:descFontWeight , textAlign:descAlignment, fontFamily: descFontFamily,}}>{desc}</p>
                </IMCardBody>
            </IMCard>            
        </div>
    )
}
IMChatCard.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    titleFontSize: PropTypes.string,
    titleFontWeight: PropTypes.string,
    titleFontFamily: PropTypes.string,
    titleColor: PropTypes.string,
    titleAlignment: PropTypes.string,    
    descFontSize: PropTypes.string,
    descFontWeight: PropTypes.string,
    descFontFamily: PropTypes.string,
    descColor: PropTypes.string,
    descAlignment: PropTypes.string,
    mediaPath: PropTypes.string,
}
IMChatCard.defaultProps = {
    width:'350px',
    titleFontSize:'16px',
    titleFontWeight:'600',
    titleColor:'#304669',
    titleAlignment:'left',
    descFontSize:'13px',
    descColor:'#7c8d9d', 
    descAlignment: 'left',

};

export default IMChatCard;
