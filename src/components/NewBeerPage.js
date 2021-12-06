import React, { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import * as faker from 'faker'

export default function NewBeerPage() {
	const formRef = useRef()
	const navigate = useNavigate()

	const setFormValuesFakeData = () => {
		const fakeData = getFakeData()
		for (let i = 0, element; (element = formRef.current.elements[i++]); ) {
			if (element.name) {
				element.value = fakeData[element.name]
			}
		}
	}

	const clearForm = () => {
		formRef.current.reset()
	}

	const isFormValid = () => {
		for (let i = 0, element; (element = formRef.current.elements[i++]); ) {
			if (element.name && !element.value) {
				return false
			}
		}
		return true
	}

	const addNewBeer = async (event) => {
		event.preventDefault()
		if (!isFormValid()) {
			return
		}

		const url = 'https://ih-beers-api2.herokuapp.com/beers/new'
		const beer = {}
		for (let i = 0, element; (element = formRef.current.elements[i++]); ) {
			if (element.name) {
				beer[element.name] = element.value
			}
		}
		console.log(beer)

		await axios.post(url, beer)
		clearForm()
		navigate('/beers')
	}

	return (
		<div className="new-beer">
			<h1>New Beer</h1>
			<form onSubmit={addNewBeer} ref={formRef}>
				<input id="image" name="image_url" type="hidden" />

				<div className="field">
					<label className="label" htmlFor="name">
						Name:
					</label>
					<div className="control">
						<input
							id="name"
							name="name"
							className="input"
							type="text"
						/>
					</div>
				</div>

				<div className="field">
					<label className="label" htmlFor="tagline">
						Tagline:
					</label>
					<div className="control">
						<input
							id="tagline"
							name="tagline"
							className="input"
							type="text"
						/>
					</div>
				</div>

				<div className="field">
					<label htmlFor="description" className="label">
						Description
					</label>
					<div className="control">
						<textarea
							id="description"
							name="description"
							className="textarea"
						></textarea>
					</div>
				</div>

				<div className="field">
					<label className="label" htmlFor="first-brewed">
						First brewed:
					</label>
					<div className="control">
						<input
							id="first-brewed"
							name="first_brewed"
							className="input"
							type="date"
						/>
					</div>
				</div>

				<div className="field">
					<label className="label" htmlFor="brewers-tips">
						Brewers tips:
					</label>
					<div className="control">
						<input
							id="brewers-tips"
							name="brewers_tips"
							className="input"
							type="text"
						/>
					</div>
				</div>

				<div className="field">
					<label className="label" htmlFor="attenuation-level">
						Attenuation level:
					</label>
					<div className="control">
						<input
							id="attenuation-level"
							name="attenuation_level"
							className="input"
							type="number"
						/>
					</div>
				</div>

				<div className="field">
					<label className="label" htmlFor="contributed-by">
						Contributed by:
					</label>
					<div className="control">
						<input
							id="contributed-by"
							name="contributed_by"
							className="input"
							type="text"
						/>
					</div>
				</div>

				<div className="field is-grouped">
					<div className="control">
						<button type="submit" className="button is-link">
							Add new beer
						</button>
					</div>
					<div className="control">
						<button
							type="button"
							className="button is-link is-light"
							onClick={() => clearForm()}
						>
							Clear form
						</button>
					</div>
					<div className="control">
						<button
							type="button"
							className="button is-link is-light"
							onClick={() => setFormValuesFakeData()}
						>
							Fake Data
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}

function getFakeData() {
	const imageUrls = [
		'https://produits.bienmanger.com/34491-0w600h600_Corona_Extra_Mexican_Blonde_Beer.jpg',
		'https://www.heineken.com/media-us/01pfxdqq/heineken-original-bottle.png?quality=85',
		'https://images-na.ssl-images-amazon.com/images/I/71+mFs97-8L.jpg',
		'https://produits.bienmanger.com/33435-0w470h470_San_Miguel_Especial_Spanish_Beer.jpg',
		'https://products1.imgix.drizly.com/ci-bud-light-980728905e40c8af.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&dpr=2&fm=jpg&h=240&q=20',
	]
	const beerType = faker.random.arrayElement(['Ale', 'Craft', 'Beer'])
	const day = faker.datatype.number({
		min: 10,
		max: 28,
	})
	const month = faker.datatype.number({
		min: 1,
		max: 9,
	})
	const year = faker.datatype.number({
		min: 1677,
		max: 2020,
	})
	const attenuationLevel = faker.datatype.number({
		min: 70,
		max: 90,
	})
	return {
		name: `${faker.animal.dog()} ${beerType}`,
		tagline: faker.company.catchPhrase(),
		description: faker.lorem.paragraph(),
		brewers_tips: faker.lorem.sentence(),
		first_brewed: `${year}-0${month}-${day}`,
		contributed_by: `${faker.name.findName()} <${faker.internet.email()}>`,
		image_url: faker.random.arrayElement(imageUrls),
		attenuation_level: attenuationLevel,
	}
}
