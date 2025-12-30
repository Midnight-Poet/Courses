import { GiWhiteBook } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { createRef, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router";

// export let Navigation = () => {

//     // })

// }

export let LoginComponent = (props) => {
	let [input, setInput] = useState({});
	let navigate = useNavigate();

	let inputs = (id, value) => {
		setInput((prev) => ({
			...prev,
			[id]: value,
		}));
	};

	let add = (e) => {
		e.preventDefault();
		let email = localStorage.getItem("Email");
		let password = localStorage.getItem("Password");

		if (props.login == "Sign In") {
			if (
				Object.values(input)[0] == email &&
				Object.values(input)[1] == password
			) {
				localStorage.getItem("Full Name")
					? Cookies.set("token", Math.floor(Math.random() * 9999))
					: null;
				navigate("/dashboard");
			} else {
				alert("Incorrect Credentials");
			}
		} else {
			if (email == Object.keys(input)[0]) {
				alert("User already exists");
			} else if (Object.keys(input).length !== 4) {
				alert("Pls fill the form completely");
			} else {
				for (let i = 0; i < Object.keys(input).length; i++) {
					localStorage.setItem(Object.keys(input)[i], Object.values(input)[i]);
				}
				if (localStorage.getItem("Email") && localStorage.getItem("Password")) {
					navigate("/dashboard");
					localStorage.getItem("Full Name")
						? Cookies.set("token", Math.floor(Math.random() * 9999))
						: null;
				}
			}
		}
	};

	return (
		<>
			<div className="text-center  px-12.5 w-full sm:w-2/3 md:w-[40%] mx-auto my-15 dark:text-white">
				<div>
					<h1 className="text-[40px] flex justify-center items-center capitalize font-semibold gap-2">
						<GiWhiteBook className="text-primary-500" /> {props.title}.
					</h1>
					<p className="text-base leading-[200%]">{props.detail}</p>
				</div>
				<div className="my-10">
					<button className="w-full rounded-xl bg-dark-black-100 text-base py-3 px-6 capitalize my-2 flex items-center justify-center gap-5 dark:bg-dark-black-800">
						<FcGoogle className="text-xl" />
						Google
					</button>
					<button className="w-full rounded-xl bg-dark-black-100 text-base py-3 px-6 capitalize my-2 flex items-center justify-center gap-5 dark:bg-dark-black-800">
						<SiFacebook className="text-xl text-blue-600" />
						facebook
					</button>
				</div>
				<p className="w-full text-dark-black-300 px-2 text-base before:absolute before:border-t-dark-black-300 dark:before:border-t-white before:border-t-2 before:w-[100%] before:left-0 before:top-[50%] before:-z-10 relative dark:bg-">
					<span className="dark:bg-black p-2 bg-white">{props.option}</span>
				</p>
				<form onSubmit={(e) => add(e)} className="mt-4">
					{props.arr.map((element) => {
						return (
							<div className="rounded-lg border border-dark-black-400 text-xl text-dark-black-400 dark:bg-dark-black-868 dark:border-dark-black-868 dark:text-dark-black-200 py-3 px-4 my-3 flex items-center justify-self-start gap-2 w-full">
								{element.icons}
								<input
									type={element.type}
									onChange={(e) => {
										inputs(element.title, e.target.value);
									}}
									placeholder={element.title}
									className=" text-black dark:text-white text-base w-[90%] outline-0 "
								/>
							</div>
						);
					})}
					{props.forget ? (
						<p className="text-primary-500 text-xs text-right">
							{props.forget}
						</p>
					) : null}
					<input
						type="submit"
						value={props.login}
						className="w-full rounded-xl bg-primary-500 text-white text-base py-2 px-6 capitalize my-3"
					/>
				</form>
				<p className="text-base text-dark-black-600">
					{props.switch}{" "}
					<a href={props.ref} className="text-primary-500">
						{props.link}
					</a>
				</p>
			</div>
		</>
	);
};
