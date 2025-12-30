import { LoginComponent } from "../components/signupComponents/login";
import { SignupDetails } from "../arrays/loginDetails";
import { LoginDecor } from "../components/signupComponents/loginDecor";

export let SIgnUpPage = () => {
    return (
        <section className="flex items-center justify-between">
            <LoginComponent 
                title = {'Courses'}
                detail = {'Let’s get started with filling the form below'}
                option = {'or  sign up with Email'}
                arr = {SignupDetails}
                login = {'Sign Up'}
                switch = {'don’t have an account?'}
                link = {'Sign Up'}
                ref = {'/signin'}
            />
            <LoginDecor />
        </section>
    )
}