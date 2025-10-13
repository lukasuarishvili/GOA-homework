import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Task6() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(0);

  useEffect(
    () => {
      if (temperature > 35 && city.length >= 3) {
        console.log("Heat Alert in", city)
      } else if (temperature < 5) {
        console.log("Cold Alert in", city)
      } else {
        console.log("Weather normal")
      }
    },
    [city, temperature]
  )


  return (

    <div>
      <h1>{city}</h1>
      <h1>{temperature}</h1>
      <form >
        <input
          type="text"
          name='city'
          onChange={(Event) => { setCity(Event.target.value) }} />
        <input
          type='number'
          name='temperature'
          onChange={(Event) => { setTemperature(Event.target.value) }} />
      </form>
    </div>
  )
}

// 6) შექმენით ორი state: temperature (რიცხვი), city (სტრინგი)
// შექმენით ორი input -> ერთში ტემპერატურას შევიყვანთ მეორეში ქალაქის სახელს
// შექმენით useEffect, რომელიც ორიცე state ს თვალს ადევნებს
// თუ temperature > 35 და city.length >= 3 -> console.log("Heat Alert in", city)
// თუ temperature < 5 -> console.log("Cold Alert in", city)
// სხვა შემთხვევაში -> console.log("Weather normal")
