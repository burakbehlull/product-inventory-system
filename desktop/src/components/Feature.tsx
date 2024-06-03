import './Feature.scss'
const Feature = () =>{
    function close(){
        window.ipcRenderer.send('close')
    }
    return(
        <ul className='feature'>
            <li></li>
            <li onClick={close}>X</li>
        </ul>
    )
}

export default Feature