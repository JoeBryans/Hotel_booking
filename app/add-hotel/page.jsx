import HotelForm from "@/components/Forms/HotelForm";
import Add from "@/components/Forms/add";

const AddHotel = () => {
  return (
    <>
      <div className=" w-full lg:px-28  px-10 mt-10 min-h-[120vh] max-h-max mb-10">
        <div className="w-full lg:w-max flex flex-wrap gap-4  mx-auto ">
          <h4 className="text-center text-xl font-bold ">Add hotel</h4>
          {/* <HotelForm /> */}
          <Add />
        </div>
      </div>
    </>
  );
};
export default AddHotel;
