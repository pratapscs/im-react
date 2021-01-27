import React from 'react'
import PropTypes from 'prop-types';
import styles from './layout.module.css'; 

function Layout({bgColor, color, width, height, fontFamily, ...props}) {
    return (
        <div className={styles.layout} style={{background:bgColor, color:color, width:width, height:height, fontFamily:fontFamily}}>
           {props.children}     
        </div>
    );
}
Layout.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    fontFamily: PropTypes.string,
};
 
Layout.defaultProps = {
    bgColor: '#fff',
    color: '#333',
    width: '100%',
    height: '100%',
    fontFamily: 'Roboto',
  };

export default Layout;
