import { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";

function App() {
	const [advice, setAdvice] = useState("");

	useEffect(() => {
		fetchAdvice();
	});

	const fetchAdvice = () => {
		axios
			.get("https://api.adviceslip.com/advice")
			.then((response) => {
				const { advice } = response.data.slip;
				setAdvice(advice);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div
			style={{ backgroundImage: `url("/src/assets/city.jpg")` }}
			className='h-full w-full bg-cover bg-center flex justify-center items-center text-center'
		>
			<div className='bg-white w-2/5 h-1/5 flex items-center flex-col rounded-[25px] p-2 shadow-lg'>
				<h1 className='flex items-center h-[582px]'>{advice}</h1>
				<button
					className='relative rounded-[50px] flex justify-center items-center cursor-pointer uppercase h-[200px] w-[210px] opacity-100 bg-white border border-blue-500 border-opacity-60 hover:bg-blue-500 text-blue-500 text-xs font-medium tracking-wide hover:text-white hover:duration-300 transition ease-in-out'
					onClick={fetchAdvice}
				>
					GIVE ME ADVICE!
				</button>
			</div>
		</div>
	);
}

export default App;
