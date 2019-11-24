import React from 'react'
import classes from "./Title.module.css"

const Title =({name,title})  =>{
    return (
        <div className="row mx-4">
      <div className="col-10 mx-auto my-4 text-center">
        <h1 className="text-capitalize font-weight-bold">
          <span className={classes.Container} >{name}</span> <strong >{title}</strong>
        </h1>
      </div>
    </div>
    )
}

export default Title
