import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin";
import useAuth from "../../Hooks/useAuth";


const Login = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = { email, password }
        console.log(user);

        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User Log in Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <div className="hero min-h-[100vh] bg-base-200">

                <div className="flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="px-4 py-2 bg-orange-500 rounded-2xl btn-outline text-white font-bold">Login Now</button>
                            </div>
                            <div>
                                <p className="my-3">New to here? Create an account <Link to='/register' className="text-blue-500 underline">Register</Link></p>
                            </div>
                            <div className="divider">or,</div>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;