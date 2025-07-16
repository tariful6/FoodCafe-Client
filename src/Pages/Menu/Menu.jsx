import Cover from "../Shared/Cover/Cover";
import cover from '../../assets/menu/banner3.jpg'
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

import desertBg from '../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../assets/menu/pizza-bg.jpg'
import saladBg from '../../assets/menu/salad-bg.jpg'
import soupBg from '../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu();
     const desserts = menu.filter(item => item.category === 'dessert')
     const soup = menu.filter(item => item.category === 'soup')
     const salad = menu.filter(item => item.category === 'salad')
     const pizza = menu.filter(item => item.category === 'pizza')
     const offered = menu.filter(item => item.category === 'offered')


     
    return (
        <div>
            <Cover img={cover} title={"our menu"}></Cover>
            <SectionTitle subHeading={"Do't miss todays offer"} heading={"today's offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            
            <MenuCategory items={desserts} title={'dessert'} img={desertBg}></MenuCategory>
            <MenuCategory items={pizza} title={'pizza'} img={pizzaBg}></MenuCategory>
            <MenuCategory items={salad} title={'salad'} img={saladBg}></MenuCategory>
            <MenuCategory items={soup} title={'soup'} img={soupBg}></MenuCategory>


        </div>
    );
};

export default Menu;