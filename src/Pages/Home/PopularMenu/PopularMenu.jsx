import { useEffect, useState } from "react";
import SectionTitle from "../../../Componenets/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then(data=> {
            const popularitems = data.filter(item => item.category === 'popular')
            setMenu(popularitems)} )
    }, [])

  return (
    <div className="mb-12">
      <section >
        <SectionTitle
          heading="From Our Menu"
          subHeading="Popular Items"
        ></SectionTitle>
      </section>
      <div className="grid md:grid-cols-2 gap-10">
        {
            menu.map(item=> <MenuItem
                key={item._id}
                item={item}
            ></MenuItem>)
        }
      </div>
    </div>
  );
};

export default PopularMenu;
