import './loginpage.css';



function LoginModalPage({closeHandler }) {

    return (
        <div className="login_container">

            <div className="login_page_row">
                <div className="login_page_header">
                    <h3>Login</h3>
                    <span onClick={closeHandler }>x</span>
                </div>
                <div className="login_page_col">
                    <form methord="POST" action="#">
                        <div className="login-form-elemnts">
                            <label>Email:</label>
                            <input type="email" placeholder="email" />
                        </div>

                        <div className="login-form-elemnts">
                            <label>Password:</label>
                            <input type="password" placeholder="password" />
                        </div>

                        <div className="login-button-row">
                            <div className="check-box">
                                <input  type="checkbox" required="required"/>
                                <p>Remember me</p>
                            </div>
                            <button type="submit" onClick={closeHandler }>login</button>
                        </div>
                        <a href="#">Forgot password ?</a>
                    </form>
                </div>

            </div>


        </div>
    )
}

export default LoginModalPage
