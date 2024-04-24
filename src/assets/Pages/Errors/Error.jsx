import './css/errors.css';

let Error = (props) => {
    
    let {errorCode,message}=props
    errorCode = `${errorCode}`
    
    console.log(props);

    return(
        <>
            <div class="error">
                <div class="container-fluid">
                    <div class="col-xs-12 ground-color text-center">
                        <div class="errorPage">
                            <div class="clip"><div class="shadow"><span class="digit numberThree">{errorCode[0]}</span></div></div>
                            <div class="clip"><div class="shadow"><span class="digit numberTwo">{errorCode[1]}</span></div></div>
                            <div class="clip"><div class="shadow"><span class="digit numberOne">{errorCode[2]}</span></div></div>
                        </div>
                        <h2>{message}<br/>That's an error</h2>
                    </div>
                </div>
            </div>
        </>   
    )
}

export default Error