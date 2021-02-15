import React, { useState, useEffect } from 'react'



const FormInput = ({ stanGenres, netMovies }) => {
    // console.log(Math.floor(Math.random() * 2))

    const [formData, setForm] = useState({
        service: "",
        type: "",
        genre: "",
        number: ""
    })


    

    const handleClick = (e) => {
        e.preventDefault()
        const { name, id } = e.target
        if (name === "service"){
            let services = ["Netflix", "Stan"]

            if (id === "surprise") {
                let randomInt = Math.floor(Math.random() * 2)
                let selectedService = services[randomInt]
                setForm({
                    ...formData,
                    service: selectedService
                })


            } else {
                setForm({
                    ...formData,
                    service: id
                })
            }
            
        } else if (name === "type"){
            let types = ["Movie", "TV Show"]

            if (id === "surprise") {
                let randomInt = Math.floor(Math.random() * 2)
                let selectedType = types[randomInt]
                setForm({
                    ...formData,
                    type: selectedType
                })

            } else {
                setForm({
                    ...formData,
                    type: id
                })
            }
            
        } 
    }



    

    const handleGenre = e => {
        e.preventDefault()

        const { service, type } = formData
        const randomIndex = Math.floor(Math.random() * 9)

        if (service === "Stan" || (service === "Netflix" && type === "TV Show")){
            let selectedGenre = stanGenres[randomIndex]
                setForm({
                    ...formData,
                    genre: selectedGenre
                })
        } else if (service === "Netflix"){
            if (type === "Movie"){
                let randomNum = Math.floor(Math.random() * 15)
                let selectedGenre = netMovies[randomNum]
                setForm({
                    ...formData,
                    genre: selectedGenre
                })
            } 
        }
    }

    const handleNumber = e => {
        e.preventDefault()
        const num = Math.floor(Math.random() * 20) + 1
        setForm({
            ...formData,
            number: num
        })
    }


    const reset = e => {
        e.preventDefault()

        setForm({
            service: "",
            type: "",
            genre: "",
            number: ""

        })
    }
    


    return (
        <div className="wrapper">
            {
                formData.service !== "" &&
                <div className="displaySelections">
                    <p>{formData.service}</p>
                    <p>{formData.type}</p>
                    <p>{formData.genre}</p>
                    <p>{formData.number}</p>
                </div>
            }
            

            <div className="formDiv">
                
                <div className="question">
                    Stan or Netflix?
                    <div className="btnGroup">
                        <button onClick={handleClick} name="service" id="Stan" className="button">Stan</button>
                        <button onClick={handleClick} name="service" id="Netflix"  className="button">Netflix</button>
                        <button onClick={handleClick} name="service" id="surprise"  className="button">Surprise</button>
                    </div>
                </div>

                {
                    formData.service !== "" &&
                    <div className="question">
                        Movie or TV Show?
                        <div className="btnGroup">
                            <button onClick={handleClick} name="type" id="Movie"  className="button">Movie</button>
                            <button onClick={handleClick} name="type" id="TV Show" className="button" >TV</button>
                            <button onClick={handleClick} name="type" id="surprise" className="button" >Surprise</button>
                        </div>

                    </div>
                }

                
                {

                    formData.service !== "" && formData.type !== "" && 

                    <div className="question generate">
                        <button onClick={handleGenre} className="button" >Genre</button>
                        {
                            formData.genre !== "" &&
                            <button onClick={handleNumber} className="button">Number</button>
                            
                        }
                        
                    </div>
                }
                
                
                {/* {
                    formData.service !== "" && formData.type !== "" && formData.genre !== "" &&
                    <div className="question">
                        <button onClick={handleNumber} className="button">Generate Number</button>
                    </div>
                } */}
                
                <div className="resetBtn">
                    {
                        formData.service !== "" && 
                        <button onClick={reset} className="button" id="reset">Reset Selection</button>

                    }
                </div>
                


            </div>
        </div>

    )
}


export default FormInput