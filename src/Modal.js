import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Search from './Search';
import Images from './conponents/images';

function Modal({ className, onClose, maskCloseable, closable, visible, children }) {
    const onMaskClick = (e)=>{
        if(e.target === e.currentTarget){
            onClose(e)
        }
    }
    const close = (e)=>{
        if(onClose){
            onClose(e)
        }
    }

    return (
        <>
        <ModalOverlay visible={visible} />
        <ModalWrapper className={className} onClick={maskCloseable ? onMaskClick : null} tabIndex="-1" visible={visible}>
            <ModalInner tabIndex="0" className="modal-inner" onClick={(e)=>e.stopPropagation()}>
                <Search/>
            </ModalInner>
        </ModalWrapper>
        </>
    )
}

Modal.propTypes = {
    visible: PropTypes.bool,
}
// Modal.defaultProps = {
//     closable: true,
//     maskCloseable: true,
//     visible: false
// }


const ModalWrapper = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;
    outline: 0;
`

const ModalOverlay = styled.div`
    box-sizing: border-box;
    display: ${(props) => (props.visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 999;
`

const ModalInner = styled.div`
    box-sizing: border-box;
    position: relative;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
    background-color: #fff;
    border-radius: 10px;
    width: 700px;
    height: 600px;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    padding: 40px 20px;
`

export default Modal