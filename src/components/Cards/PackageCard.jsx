const packages = {
  diamond: {
    name: 'Diamond',
    persons: '1-6',
    mins: '50',
    images: '35',
    editing: 'Advanced',
    price: '350',
    box: 'bdiamond',
    content: 'dcontent',
    number: '04'
  },
  gold: {
    name: 'Gold',
    persons: '1-2',
    mins: '25',
    images: '15',
    editing: 'Basic',
    price: '200',
    box: 'bgold',
    content: 'gcontent',
    number: '02',
  },
  platinum: {
    name: 'Platinum',
    persons: '1-3',
    mins: '35',
    images: '20',
    editing: 'Advanced',
    price: '250',
    box: 'bplat',
    content: 'pcontent',
    number: '03'
  },
  silver: {
    name: 'Silver',
    persons: '1',
    mins: '15',
    images: '10',
    editing: 'No',
    price: '150',
    box: 'bsilver',
    content: 'scontent',
    number: '01'
  }
}


export default function PackageCard (props) {

  const hash = window.location.hash

  if (!hash) return null

  const { name, persons, mins, images, editing, price, box, content, number } = packages[hash.slice(1)];

  return (
    <>
    <div className="silver d-none d-lg-block">

          <div className="bcontainer">
          <div className="bcard">
            <div className={'bbox ' + box}>
              <div className={'bcontent ' + content}>
                <h2>{number}</h2>
                <h3>{name}</h3>
                <p>
                  <span className="exBold">{persons} </span>
                  Person(s)
                  {"\n"}
                  <span className="exBold">{mins} </span>
                  Minute Session
                  {"\n"}
                  <span className="exBold">{images} </span>
                  Digital Images
                  {"\n"}
                  <span className="exBold">{editing} </span>
                  Digital Editing
                  {"\n"}
                  <span className="exBold">${price}</span>
                </p>

              </div>
            </div>
          </div>
        </div>

    </div>


    <div className="silver-mobile d-md-block d-lg-none">

    <div className="bcontainer">
    <div className="bcard">
      <div className={'bbox ' + box}>
        <div className={'bcontent ' + content}>
          <h2>{number}</h2>
          <h3>{name}</h3>
          <p>
            <span className="exBold">{persons} </span>
            Person(s)
            {"\n"}
            <span className="exBold">{mins} </span>
            Minute Session
            {"\n"}
            <span className="exBold">{images} </span>
            Digital Images
            {"\n"}
            <span className="exBold">{editing} </span>
            Digital Editing
            {"\n"}
            <span className="exBold">${price}</span>
          </p>

        </div>
      </div>
    </div>
    </div>
    </div>

    </>
)
}
