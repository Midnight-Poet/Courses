import { LoginComponent } from "../components/signupComponents/login";
import { LoginDetails } from "../arrays/loginDetails";
import { LoginDecor } from "../components/signupComponents/loginDecor";

export let SIgnInPage = () => {
    return (
        <section className="flex items-center justify-between">
            <LoginComponent 
                title = {'Courses'}
                detail = {'Let’s sign in to your account'}
                option = {'or  sign in with Email'}
                arr = {LoginDetails}
                login = {'Sign In'}
                switch = {'don’t have an account?'}
                link = {'Sign Up'}
                forget = {'Forgot password?'}
                ref = {'/signUp'}
            />
            <LoginDecor />
        </section>
    )
}