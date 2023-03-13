import React, { useEffect, useState } from "react";

export default function ListFooter(props) {

	const {todoList, setTodoList, setDisplayedList} = props.props
	const [incomplete, setIncomplete] = useState(1)

	useEffect(() => {
		let counter = 0;
		for (let item of todoList){
			console.log('here')
			if (item.type === 'incomplete') {
				counter += 1
			}
		}
		setIncomplete(counter)
	}, [todoList])

	function clearCompleted() {
		let list = [...todoList]
		let incompletes = []
		for (let el of list){
			if(el.type === 'incomplete'){
				incompletes.push(el)
			}
		}
		setTodoList(incompletes)
	}

	function filter(category){
		let list = [...todoList]
		for (let el of list) {
			if (category === 'all'){
				el.display = true
			}else if (category === 'completed') {
				if (el.type === 'completed') {
					el.display = true
				}else {
					el.display = false
				}
			}else {
				if (el.type === 'incomplete') {
					el.display = true
				}else {
					el.display = false
				}
			}
		}
		setTodoList(list)
	}

    return(
        <footer className="footer">
		
		<meta property="todoDone" content="[count(todo where done)]"/>
		<meta property="todoLeft" content="[count(todo where !done)]"/>
		
		<span className="todo-count">
			<strong>{`${incomplete} ${incomplete === 1 ? 'item' : 'items'} left`}</strong>
		</span>

		<meta property="activeFilter" content="all" mv-storage="none"/>
		<ul className="filters">
			<li>
				<a className="[if(activeFilter = 'all', 'selected')]"
					onClick={() => filter('all')}>All</a>
			</li>
			<li>
				<a className="[if(activeFilter = 'active', 'selected')]"
					onClick={() => filter('incomplete')}>Active</a>
			</li>
			<li>
				<a className="[if(activeFilter = 'completed', 'selected')]"
					onClick={() => filter('completed')}>Completed</a>
			</li>
		</ul>
		<button className="clear-completed" onClick={clearCompleted}>
			Clear completed
		</button>
	</footer>
    )
}