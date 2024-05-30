
interface ModalProps {
    isVisible: boolean,
    children: any |undefined
}

const Modal :React.FC<ModalProps> = ({isVisible,children}) => {


    return(
        <>
            {isVisible && children}
        </>
    )
}
export default Modal
