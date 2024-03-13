import React,{useState, useEffect} from "react";
//post must be latest to oldest. for that we need to save date that post was created....maybe later

const Home = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('/allpost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            /* console.log(result) */
            setData(result.posts)
        })
    },[])
  return (
    <div className="home">
        {
            data.map(item=>{
                return(
                    <div className="card home-card" key={item._id}>
                        <h5>{item.postedBy.name}</h5>
                        <div className="card-image">
                            <img src={item.photo}
                                alt="friend"/>
                        </div>
                        <div className="card-content">
                            <i className="material-icons" style={{ color: "black"}}>
                            favorite_border
                            </i>
                            <i className="material-icons" style={{ color: "red" , display:"none"}}>
                            favorite
                            </i>
                            <h6>{item.like.length} Like</h6>
                            <p>{item.body}</p>
                            <input type="text" placeholder="add a comment" />
                        </div>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default Home
