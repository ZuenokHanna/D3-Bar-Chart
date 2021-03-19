import React from 'react'
import BarChart from './components/BarChart/BarChart'
import './App.css'

const data: any = [
  ['2020-04-01', 120, 123],
  ['2020-04-02', 22, 44],
  ['2020-04-03', 100, 55],
  ['2020-04-04', 130, 122],
  ['2020-04-05', 40, 124],
  ['2020-04-06', 55, 55],
  ['2020-04-07', 120, 55],
  ['2020-04-08', 43, 34],
  ['2020-04-09', 55, 66],
  ['2020-04-10', 52, 56],
  ['2020-04-11', 100, 78],
  ['2020-04-12', 123, 88],
  ['2020-04-13', 66, 90],
  ['2020-04-14', 66, 56],
  ['2020-04-15', 60, 44],
  ['2020-04-16', 58, 78],
  ['2020-04-17', 90, 88],
  ['2020-04-18', 120, 99],
  ['2020-04-19', 21, 55],
  ['2020-04-20', 36, 33],
  ['2020-04-21', 123, 78],
  ['2020-04-22', 125, 90],
  ['2020-04-23', 156, 79],
  ['2020-04-24', 57, 77],
  ['2020-04-25', 33, 66],
  ['2020-04-26', 28, 57],
  ['2020-04-27', 67, 90],
  ['2020-04-28', 47, 57],
  ['2020-04-29', 44, 122],
  ['2020-04-30', 89, 57],
  ['2020-05-01', 190, 78],
  ['2020-05-02', 22, 33],
  ['2020-05-03', 100, 122],
  ['2020-05-04', 130, 57],
  ['2020-05-05', 40, 90],
  ['2020-05-06', 55, 33],
  ['2020-05-07', 180, 122],
  ['2020-05-08', 43, 57],
  ['2020-05-09', 55, 33],
  ['2020-05-10', 52, 90],
  ['2020-05-11', 100, 57],
  ['2020-05-12', 123, 122],
  ['2020-05-13', 66, 78],
  ['2020-05-14', 66, 57],
  ['2020-05-15', 60, 122],
  ['2020-05-16', 58, 57],
  ['2020-05-17', 90, 33],
  ['2020-05-18', 120, 110],
  ['2020-05-19', 100, 90],
  ['2020-05-20', 36, 59],
  ['2020-05-21', 123, 78],
  ['2020-05-22', 125, 100],
  ['2020-05-23', 156, 78],
  ['2020-05-24', 57, 33],
  ['2020-05-25', 33, 33],
  ['2020-05-26', 100, 90],
  ['2020-05-27', 67, 78],
  ['2020-05-28', 47, 57],
  ['2020-05-29', 44, 33],
  ['2020-05-30', 89, 122],
]

function App() {
  return (
    <div className="App">
      <BarChart data={data} />
    </div>
  )
}

export default App
