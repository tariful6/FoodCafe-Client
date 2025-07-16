import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    // const [menu, setMenu] = useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res => res.json())
    //     .then(data =>  {
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // },[])

    const [menu, loading] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
     const desserts = menu.filter(item => item.category === 'dessert')
     const soup = menu.filter(item => item.category === 'soup')
     const salad = menu.filter(item => item.category === 'salad')
     const pizza = menu.filter(item => item.category === 'pizza')
     const offered = menu.filter(item => item.category === 'offered')


    
    return (
        <div className=" container mx-auto py-16">
            <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"}></SectionTitle>
            <div className=" grid grid-cols-2 gap-9">
                {
                    popular.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <div className=" text-center">
              <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </div>


        </div>
    );
};

export default PopularMenu;