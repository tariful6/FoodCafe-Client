import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";


const MenuCategory = ({items,  title, img}) => {
    console.log(items);
    
    return (
        <div className="py-8">
            { title && <Cover img={img} title={title}></Cover>}
                <div className=" grid grid-cols-2 gap-9 py-8">
                    {
                        items?.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                    }
                </div>
                <Link to={`/order/${title}`}>
                    <div className=" text-center">
                    <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
                    </div>
                </Link>


        </div>

    );
};

export default MenuCategory;