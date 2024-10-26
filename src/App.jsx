import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css'
import { useState } from 'react';


function App() {
  const[principle,setPrinciple] = useState()
  const[rate,setRate] = useState()
  const[year,setYear] = useState()
  const[intrest,setIntrest] = useState(0)

  const[isPrincipleInputValid,setIsPrincipleInputValid] = useState(false)
  const[isRateInputValid,setRateIputValid] = useState(false)
  const[isYearInputValid,setYearIputValid] = useState(false)

  const handleValidation=(tag)=>{
    const{name,value}=tag
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));

    if(!!value.match(/^\d*.?\d+$/)){
      //valid
      if(name=="principle"){
        setPrinciple(value)
        setIsPrincipleInputValid(false)
      }else if(name=="year"){
        setYear(value)
        setYearIputValid(false)
      }else{
        setRate(value)
        setRateIputValid(false)
      }
      //invalid
    }else{
      if(name=="principle"){
        setPrinciple(value)
        setIsPrincipleInputValid(true)
      }else if(name=="year"){
        setYear(value)
        setYearIputValid(true)
      }else{
        setRate(value)
        setRateIputValid(true)
      }
    }
    //
    if(!!value.match(/^\d*.?\d+$/)){
      //valid
      if(name=="rate"){
        setRate(value)
        setRateIputValid(false)
      }
      //invalid
    }else{
      if(name=="rate"){
        setRate(value)
        setRateIputValid(true)
      }
    }
    //
    if(!!value.match(/^\d*.?\d+$/)){
      //valid
      if(name=="year"){
        setYear(value)
        setYearIputValid(false)
      }
      //invalid
    }else{
      if(name=="year"){
        setYear(value)
        setYearIputValid(true)
      }
    }
    
    
    
  }

  const handleCalculate=(e)=>{
    e.preventDefault()
    setIntrest((principle*rate*year)/100)    
  }

  const handleReset=()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setIntrest("")
    setIsPrincipleInputValid(false)
    setRateIputValid(false)
    setYearIputValid(false)
  }
  console.log(principle);

  return (
    <>
    <div style={{minHeight:"100vh"}} className='d-flex justify-content-center align-items-center bg-muted'>
    <div className="main p-5 rounded">
    <h1 className='h1 fw-bolder ' style={{textDecoration:"underline"}}>Simple Interest Calculator</h1>
    <p className="d-flex justify-content-center align-items-center">Calculate your simple interest with us </p>
    <div className='intrest d-flex justify-content-center align-items-center p-5 rounded'>
      <h1 className='text-light' >&#8377; {intrest}</h1>
    </div>
    <div className="mt-5 d-flex justify-content-center">
    <form className="form-container border rounded p-3 d-flex flex-column">
    <TextField id="Principle" name='principle' label="Principle Amount" value={principle} variant="outlined" onChange={e=>handleValidation(e.target)} />
    {isPrincipleInputValid && <div className="mb-2 text-danger fw-bolder ">* Invalid Input</div>}
    <TextField id="Year" name='year' className='mt-1' label="Year" value={year} variant="filled" onChange={e=>handleValidation(e.target)}/>
    {isYearInputValid && <div className="mb-2 text-danger fw-bolder ">* Invalid Input</div>}
    <TextField id="Rate of Interest" name='rate' label="Rate of Interest" value={rate} variant="standard" onChange={e=>handleValidation(e.target)}/>
    {isRateInputValid && <div className="mb-2 text-danger fw-bolder ">* Invalid Input</div>}
    </form>
    </div>
    <div className="mt-3 d-flex justify-content-center">
    <Button className='me-5' variant="contained" onClick={handleCalculate} >Calculate</Button>
    <Button className='ms-5' variant="outlined" onClick={handleReset}>Reset</Button>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
