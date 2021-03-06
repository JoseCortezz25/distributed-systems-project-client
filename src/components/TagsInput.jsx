import React, { useState, useEffect } from 'react'
import '../assets/styles/TagsInputs.css'

const TagsInput = props => {
	const [tags, setTags] = useState(props.tags)

	useEffect(() => {
		setTags(props.tags)
	}, [props.tags])
	
	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)])
		props.selectedTags([...tags.filter((_, index) => index !== indexToRemove)])
	}

	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value])
			props.selectedTags([...tags, event.target.value])
			event.target.value = ""
		}
	}
	
	return (
		<div className="TagsInput">
			<ul id="tags">
				{tags?.map((tag, index) => (
					<li key={index} className="tag">
						<span className='tag-title'>{tag}</span>
						<span className='tag-close-icon' onClick={() => removeTags(index)}>
							x
						</span>
					</li>
				))}
			</ul>
			<input
				type="text"
				onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
				placeholder="Press Enter to add tags"
			/>
		</div>
	);
};

export { TagsInput }
