export const Form = () => {
    return (
        <div className="formBody">
               <div className="formHeader">
                    <h2>Register</h2>
                  
                </div>
                <div className="formLoginSection"><p> Already a member ? <a href="#">login</a> </p></div>
            <form method="POST" >
             

                <div className="form-elements">
                    <label for="fname"> Name :</label>
                    <div className="column"><input type="text" className="form-input-field" name="first_name" placeholder="First Name" required="required" /></div>
              
                    <div className="column"><input type="text" className="form-input-field" name="first_name" placeholder="Last Name" required="required" /></div>

                </div>
                <div className="form-elements">
                   
                </div>
                <div className="form-elements">
                    <label for="email">Email :</label>
                    <div className="column"><input type="email" className="form-input-field" name="email" placeholder="Email" required="required" /></div>
                </div>
                <div class="form-elements">
                    <label for="password">Password:</label>
                    <div className="column"><input type="password" className="form-input-field" name="password" placeholder="Password" required="required" /></div>
                </div>
                <div class="form-elements">
                    <label for="re-enter password">Re-enter Password:</label>
                    <div className="column"><input type="password" className="form-input-field" name="confirm_password" placeholder="Confirm Password" required="required" /></div>

                </div>
                <div className="form-elements">
                    <label for="fname">D.O.B.</label>
                    <div className="column"><input type="date" className="form-input-field" name="first_name" placeholder="date of  birth" required="required" /></div>

                </div>
                <div className="form-elements">
                    <label for="fname">Phone No.</label>
                    <div className="column"><input type="text" className="form-input-field" name="phoneNumber" placeholder="+91" required="required" /></div>

                </div>
                <div className="form-elements">
                    <label for="fname">Address:</label>
                    <div className="column"><input type="text" className="state" name="state" placeholder="state" required="required" /></div>
                    <div className="column"><input type="text" className="city" name="city" placeholder="city" required="required" /></div>
                    <div className="column"><input type="text" className="pincode" name="pincode" placeholder="pincode" required="required" /></div>
                </div>
                <div className="form-elements">
                    <label for="fname">college</label>
                    <div className="column"><input type="text" className="form-input-field" name="college" placeholder="First Name" required="required" /></div>

                </div>
                <div className="termCondition">
                    <div className="termcondition">
                    <input type="checkbox" required="required" />
                    <p>I have agreed to the <a href="3"> Terms & Conditions</a>  & have read & understood the Privacy Policy.</p>
                    </div>
                   
                    <button type="submit">Register</button>
                </div>
                
            </form>
        </div>
    )
}