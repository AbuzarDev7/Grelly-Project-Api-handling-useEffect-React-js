

const Card = (props) => {
  return (
    <div>
           
    <img
      className="w-full h-48 object-cover rounded-lg"
      src={props.item.download_url}
      alt=""
    />
    <h2 className="text-white text-center mt-2">{props.item.author}</h2>
    </div>
  )
}

export default Card