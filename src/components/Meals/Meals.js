import React from 'react'
import MealsSummary from './MealsSummary'
import AvailableMeal from './AvailableMeal'
const Meals = () => {
  return (
    <React.Fragment>
        <MealsSummary/>
        <AvailableMeal/>
    </React.Fragment>
  )
}

export default Meals
