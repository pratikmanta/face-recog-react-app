import React from 'react';
import Logo from '../Logo/Logo';

class SignInForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signInEmail:'',
            signInPassword:''
        }
    }

    onEmailChange = (event) =>{
        this.setState({signInEmail:event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword:event.target.value})
    }

    onSubmit = (event) => {
        fetch('https://still-caverns-23428.herokuapp.com/signin',{
            method:'post',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
                email:this.state.signInEmail,
                password:this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.loadUser(user)
                this.props.onRouteChange('home')
            }
        })
    }
    render() {
        return (
        <div>
            <Logo style={{display:'flex', justifyContent:'flex-start'}}/>
            <article className="center mw5 mw6-ns br4 shadow-5 hidden ba b--black-10 mv4">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="signin" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address" 
                            id="email-address"
                            onChange = {this.onEmailChange}    
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password" 
                            id="password"
                            onChange = {this.onPasswordChange}
                            />
                        </div>
                    </fieldset>
                        <div className="mv2">
                            <input onClick={this.onSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                        </div>
                    </div>
                </main>
            </article>
        </div>
        )
    }
}
                    
export default SignInForm;


