// App.js
import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div>

			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button className='btn'
					onClick={() =>
						setCount((count) => count + 1)}>
					count is {count}
				</button>
        <p>love you too</p>
			</div>
		</>
	)
}

export default App
