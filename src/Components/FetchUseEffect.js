import React,{useEffect,useState} from 'react'

function FetchUseEffect() {

    const [Question, setQuestion] = useState([])

    const fetchData = async() => {
        const response = await fetch("https://opentdb.com/api.php?amount=5");
        const data = await response.json();
        const result = data.results
        console.log(result)
        setQuestion(result)
    }

    useEffect(()=>{
        fetchData()
    },[]);

    return (
        <div>
            <h1>Questions</h1>
            {
                Question.map((obj,ind)=>{
                return <li key={ind}>{obj.question}</li>
                })
            }
        </div>
    )
}

export default FetchUseEffect;