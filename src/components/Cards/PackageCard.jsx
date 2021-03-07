const packages = {
  diamond: {
    name: 'DIAMOND',
    persons: '1-6',
    mins: '50',
    images: '35',
    editing: 'ADVANCED',
    price: '350',
  },
  gold: {
    name: 'GOLD',
    persons: '1-2',
    mins: '25',
    images: '15',
    editing: 'BASIC',
    price: '200',
  },
  platinum: {
    name: 'PLATINUM',
    persons: '1-3',
    mins: '35',
    images: '20',
    editing: 'ADVANCED',
    price: '250',
  },
  silver: {
    name: 'SILVER',
    persons: '1',
    mins: '15',
    images: '10',
    editing: 'No',
    price: '150',
  }
}


export default function PackageCard (props) {

  const hash = window.location.hash

  if (!hash) return null

  const { name, persons, mins, images, editing, price } = packages[hash.slice(1)];

  return (
    <>
    <div className="silver d-none d-lg-block">

      <p>
        <span className="exBold">{name}</span>
      <br />
      -
      <br />
        <span className="exBold">{persons} </span>
         PERSON(S)
        <br />
        <span className="exBold">{mins} </span>
         MINUTE SESSION
        <br />
        <span className="exBold">{images} </span>
         DIGITAL IMAGES
        <br />
        <span className="exBold">{editing} </span>
         DIGITAL EDITING
        <br />
        <span className="exBold">${price} </span>
      </p>
    </div>


    <div className="silver-mobile d-md-block d-lg-none">

    <p>
      <span className="exBold">{name}</span>
    <br />
    -
    <br />
      <span className="exBold">{persons} </span>
       PERSON(S)
      <br />
      <span className="exBold">{mins} </span>
       MINUTE SESSION
      <br />
      <span className="exBold">{images} </span>
       DIGITAL IMAGES
      <br />
      <span className="exBold">{editing} </span>
       DIGITAL EDITING
      <br />
      <span className="exBold">${price} </span>
    </p>
    </div>

    </>
)
}
