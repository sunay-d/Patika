import React, { useEffect, useState } from "react";

export default function List(props) {
	const {todoList, setTodoList} = props.props
	const [allMarked, setAllMarked] = useState(false)

	const listHtml = todoList.map(el => {
		if (el.display) {
			return (
			<li key={el.id} mv-multiple="todo" className={el.type === 'completed' ? 'completed' : ''}>
				<div className="view">
					<input property="done" className="toggle" type="checkbox" onChange={completeItem} data-id={el.id} checked={el.type === 'completed' ? true : false}/>
					<label property="text">{el.value}</label>
					<button className="destroy" mv-action="delete(todo)" onClick={deleteItem} data-id={el.id}></button>
				</div>
			</li> )
		}else {
			return ''
		}
	})


    function deleteItem(e){
		let list = [...todoList]
		let index = list.indexOf(list.find(el => el.id === e.target.dataset.id))
		list.splice(index,1)
		setTodoList(list)
    }

	function completeItem(e){
		let list = [...todoList]
		let index = list.indexOf(list.find(el => el.id === e.target.dataset.id))
		if(list[index].type != 'completed'){
			list[index].type = 'completed'
		}else {
			list[index].type = 'incomplete'
		}
		setTodoList(list)
	}


	function markAllDone() {
		let list = [...todoList]
		if(!allMarked){
			for (let el of list){
				el.type = 'completed'
			}
		}else {
			for (let el of list){
				el.type = 'incomplete'
			}
		}
		setAllMarked(prev => !prev)
	}


    return(
        <section className="main">
		<input property="toggleAll" id="toggle-all"
				 className="toggle-all" type="checkbox"
				 onChange={() => {markAllDone()}} />
		<label htmlFor="toggle-all" >
			Mark all as complete
		</label>

		<ul className="todo-list">
			{listHtml}
		</ul>
	</section>
    )
}