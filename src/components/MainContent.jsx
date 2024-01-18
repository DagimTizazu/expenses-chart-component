import React from 'react'
import WeekDays from './WeekDays'
import data from '../assets/data.json'

function MainContent({ thisMonth, compareLastMonth }) {
  return (
    <main>
        <h1 className='main__title'>Spending - Last 7 days</h1>

        <div className='main__days'>
          {
            data.map((data, i) => (
              <WeekDays key={i} day={data.day} barAmount={data.amount} />
            ))
          }
            
        </div>
        <hr />

        <div className='lower-section'>
          <p className='lower-section__header'>Total this month</p>
        
          <div className='lower-section__flex-container'>
          
              <div>
                <p className='lower-section__amount'>${thisMonth}</p>
              </div>

              <div>
                <p className='lower-section__changed'>{compareLastMonth}</p>
                <p className='lower-section__header'>from last month</p>
              </div>
    
          </div>
        </div>
    </main>
  )
}

export default MainContent
