import React, { useState} from "react";
import Form from "./form";
import List from "./list";

//create your first component
const Home = () => {
	const [task, setTask] = useState([]);

	//ADD TODO
	let handlesubmit = (e) => {
		if (e.key === "Enter") {
			let auxarr = [...task];
			auxarr.push(e.target.value);
			setTask(auxarr);
			e.target.value = "";
		}
	};

	//DELETE TODO
	let deletetodo = (index) => {
		let auxarr = [...task];
		auxarr[index] = null;
		let filtered = auxarr.filter((e) => e !== null);
		setTask(filtered);
	};

	return (
		<div className="container-fluid">
			<div className="row justify-content-center">
				<div className="col-md-6">
					<h1 className="mt-4 text-center text-muted">Todos</h1>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-6 mt-2">
					<ul className="list-group">
						<li className="list-group-item">
							<input className="form-control" type="text" placeholder="What needs to be done?" onKeyDown={(e) => handlesubmit(e)} />
						</li>
						<Form task={task} deletetodo={deletetodo} />
						<List task={task} />
					</ul>
				</div>
			</div>
			<div class="fixed-bottom text-center p-2 mb-2">
          Made with ❤️ by
          <a href="https://github.com/Zagarsix"> Zagarsix</a>
        </div>
		</div>
	);
};

export default Home;
