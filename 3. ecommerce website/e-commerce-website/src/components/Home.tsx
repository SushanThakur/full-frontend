const items = [
  {
    id: 1,
    img: 'https://img.drz.lazcdn.com/static/np/p/e823bb979285cffde09200af76e12a8d.jpg_200x200q80.jpg_.webp',
    desc: 'Zeblaze Btalk Plus Smart Watch | Bluetooth Smart Watch',
    price: 2990,
    rating: 4,
    ratingNum: 71,
  }
]


const Home = () => {
  return (
    <div className="w-screen flex justify-center">
      <section className="w-screen md:w-[80vw] max-w-[1400px] p-8">
        <h1 className="font-bold text-2xl">Welcome to NeXon Online Shopping Platform.</h1>
        <div className="gridContainer bg-green-500">
          {
            items.map(item => (
              <Itm {...item} />
            ))
          }
        </div>
      </section>
    </div>
  )
}

const Itm = (props: { id: number, img: string, desc: string, price: number, rating: number, ratingNum: number }) => {
  return (
    <div className="w-[340px] flex flex-col bg-gray-200">
      <img src={props.img} alt="" />
      <h2>{props.desc}</h2>
      <p>{props.price}</p>
      <p>Rating: {props.rating} ({props.ratingNum}) </p>
    </div>
  )
}

export default Home
