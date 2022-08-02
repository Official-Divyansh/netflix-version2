import {useNavigate} from 'react-router-dom'

function MediumCard({img,title,Detail}) {
  const navigate  = useNavigate()

  const goToReceiver = (URL)=>{
    console.log(Detail, title)
    navigate('../Details', {state:{id:1,name:Detail? Detail : img, title:title}});
  }
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">


     <div className="relative w-80">
        <img
        alt="Medium Card"
        src={img}
        layout="fill"
        className="rounded-xl"
     onClick={()=> goToReceiver(img)}
        />
     </div>

    </div>
  )
}

export default MediumCard