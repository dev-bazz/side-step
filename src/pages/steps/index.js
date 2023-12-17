import { useState } from "react";
import style from "./style.module.css";
const Steps = () => {
	const [testState, setTestState] = useState(true);

	return (
		<aside className={style.aside}>
			<nav className={style.sideBar}>
				<h2 className={style.title}>
					You are just a few click away from your next project
				</h2>
				<ul className={style.menu}>
					<li
						onClick={() => setTestState(!testState)}
						data-number="1"
						className={`${testState && style.complete}`}
					>
						<div className={style.menu_wrapper}>
							<label htmlFor="item">Item 1</label>
							<ul>
								<li>1</li>
								<li>2</li>
								<li>3</li>
							</ul>
						</div>
					</li>
					<li
						data-number="2"
						className={style.complete}
					>
						<div className={style.menu_wrapper}>
							<label htmlFor="item">Item 2</label>
							<ul>
								<li>1</li>
								<li>2</li>
								<li>3</li>
							</ul>
						</div>
					</li>
					<li data-number="3">
						<div className={style.menu_wrapper}>
							<label htmlFor="item">Item 3</label>
							<ul>
								<li>1</li>
								<li>2</li>
								<li>3</li>
								<li>4</li>
								<li>5</li>
							</ul>
						</div>
					</li>
					<li data-number="4">
						<div className={style.menu_wrapper}>
							<label htmlFor="item">Item 4</label>
							<ul>
								<li>1</li>
								<li>2</li>
								<li>3</li>
							</ul>
						</div>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default Steps;
