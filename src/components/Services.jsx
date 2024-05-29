import modularKitchen from '../assets/images/card-1.png'
import bedroom from "../assets/images/card-2.png";
import livingRoom from "../assets/images/card-3.png";
import homeOffice from '../assets/images/card-4.png'

const Services = () => {
    const cardData = [
      {
        title: "Modular Kitchen",
        image:  modularKitchen ,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Bedroom",
        image:  bedroom ,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Living room",
        image: livingRoom ,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Home office",
        image:  homeOffice ,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ];
  return (
    <div className="services">
      <h2 className='text-center p-3'>What we do?</h2>
      <div className="card-container row">
        {cardData.map((card, index) => (
          <div key={index} className="cards  col-xl-3 col-lg-6  col-sm-6 col-xs-6">
            <div className="cardImg-container">
              <img src={card.image} alt={card.title} />
            </div>
            <h3 className='text-card'>{card.title}</h3>
      
          </div>
        ))}
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo, vel
        fringilla est ullamcorper eget nulla
      </p>
    </div>
  );
}

export default Services