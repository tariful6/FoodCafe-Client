import Cover from '../Shared/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import orderBg from '../../assets/shop/banner2.jpg'
import { useState } from 'react';
import useMenu from '../../hooks/useMenu';
import FoodCard from '../../components/FoodCard';
import { useParams } from 'react-router-dom';
const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
    
    

    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')


    return (
        <div className=''>
            <Cover img={orderBg} title={"order food"}></Cover>
            <div className='container mx-auto'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <div className=' grid grid-cols-3 gap-6'>
                            {
                            salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)  
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=' grid grid-cols-3 gap-6'>
                            {
                            pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)  
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=' grid grid-cols-3 gap-6'>
                            {
                            soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)  
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=' grid grid-cols-3 gap-6'>
                            {
                            desserts.map(item => <FoodCard key={item._id} item={item}></FoodCard>)  
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=' grid grid-cols-3 gap-6'>
                            {
                            drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)  
                            }
                        </div>
                    </TabPanel>
               
                </Tabs>

            </div>
        </div>
    );
};

export default Order;