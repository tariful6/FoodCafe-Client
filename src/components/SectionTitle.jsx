
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=" w-1/3 mx-auto text-center py-6">
           <p className=" text-yellow-500">---{subHeading}----</p>
           <h3 className="text-3xl font-bold uppercase py-2">{heading}</h3> 
        </div>
    );
};

export default SectionTitle;