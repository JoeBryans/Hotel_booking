"use client";
// import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GetCountries, GetState, GetCity } from "react-country-state-city";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "../ui/select";
import axios from "axios";
const formSchema = {
  name: "",
  rating: "",
  location: "",
  reviews: "",
  country: "",
  state: "",
  city: "",
  image: [],
  roomAmenities: [],
  food: [],
  traveling: [],
  services: [],
  facilities: [],
  accessebility: [],
  parking_transport: [],
  resturant: [],
};

const HotelForm = () => {
  //   const { data: session, status } = useSession();
  const [formData, setFormData] = useState(formSchema);
  const [country, setCountry] = useState(null);
  const [currentState, setcurrentState] = useState(null);
  const [city, setCity] = useState(null);
  const [countriesList, setCountriesList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [citiesList, setCitiesList] = useState([]);
  const router = useRouter();

  // Amenities Button
  const handleRoomAmenities = () => {
    setFormData({
      ...formData,
      roomAmenities: [...formData.roomAmenities, ""],
    });
  };
  const handlefood = () => {
    setFormData({
      ...formData,
      food: [...formData.food, ""],
    });
  };
  const handletraveling = () => {
    setFormData({
      ...formData,
      traveling: [...formData.traveling, ""],
    });
  };
  const handleservices = () => {
    setFormData({
      ...formData,
      services: [...formData.services, ""],
    });
  };
  const handlefacilities = () => {
    setFormData({
      ...formData,
      facilities: [...formData.facilities, ""],
    });
  };
  const handleaccessebility = () => {
    setFormData({
      ...formData,
      accessebility: [...formData.accessebility, ""],
    });
  };
  const handleparkingTransport = () => {
    setFormData({
      ...formData,
      parking_transport: [...formData.parking_transport, ""],
    });
  };
  const handleresturant = () => {
    setFormData({
      ...formData,
      resturant: [...formData.resturant, ""],
    });
  };

  console.log(formData.roomAmenities);
  // Amenities Input
  const handleRoomAmenity = (e, i) => {
    const { value } = e.target;
    const room_amenities = [...formData.roomAmenities];
    room_amenities[i] = value;
    setFormData({
      ...formData,
      roomAmenities: room_amenities,
    });
  };

  const handleFoodAmenity = (e, i) => {
    const { value } = e.target;
    const food_amenities = [...formData.food];
    food_amenities[i] = value;
    setFormData({
      ...formData,
      food: food_amenities,
    });
  };
  const handleTravelingAmenity = (e, i) => {
    const { value } = e.target;
    const traveling_amenities = [...formData.traveling];
    traveling_amenities[i] = value;
    setFormData({
      ...formData,
      traveling: traveling_amenities,
    });
  };
  const handleParkingTransportAmenity = (e, i) => {
    const { value } = e.target;
    const parkingTransport_amenities = [...formData.parking_transport];
    parkingTransport_amenities[i] = value;
    setFormData({
      ...formData,
      parking_transport: parkingTransport_amenities,
    });
  };
  const handleAccessebilityAmenity = (e, i) => {
    const { value } = e.target;
    const accessebility_amenities = [...formData.accessebility];
    accessebility_amenities[i] = value;
    setFormData({
      ...formData,
      accessebility: accessebility_amenities,
    });
  };
  const handleServicesAmenity = (e, i) => {
    const { value } = e.target;
    const services_amenities = [...formData.services];
    services_amenities[i] = value;
    setFormData({
      ...formData,
      services: services_amenities,
    });
  };
  const handleFacilitiesAmenity = (e, i) => {
    const { value } = e.target;
    const facilities_amenities = [...formData.facilities];
    facilities_amenities[i] = value;
    setFormData({
      ...formData,
      facilities: facilities_amenities,
    });
  };
  const handleResturantAmenity = (e, i) => {
    const { value } = e.target;
    const resturant_amenities = [...formData.resturant];
    resturant_amenities[i] = value;
    setFormData({
      ...formData,
      resturant: resturant_amenities,
    });
  };
  // Handle  all input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);
  //

  // Country State City

  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);
  useEffect(() => {
    if (country)
      GetState(parseInt(country)).then((result) => {
        setStateList(result);
      });
  }, [country]);

  useEffect(() => {
    if (currentState)
      GetCity(parseInt(country), parseInt(currentState)).then((result) => {
        setCitiesList(result);
      });
  }, [currentState]);

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/hotel",
        formData,
        { headers: { "Content-Type": "application/json" } }
        //   country,
        //   state,
        //   city,
      );
      console.log(res);
    } catch (error) {}
  }

  return (
    <Card className="mx-auto p-3 h-max  w-full">
      {/* <CardTitle className="text-center ">Sign in</CardTitle> */}
      <div className="flex flex-col gap-4 items-center"></div>
      <form className="space-y-2">
        <div className="flex flex-col gap-4 w-full ">
          <div className="flex flex-wrap gap-4 w-full ">
            <div className="flex flex-col gap-3 w-96 mx-auto">
              <div className="flex flex-col gap-3 ">
                <label htmlFor="name">Hotel Name</label>
                <Input
                  name="name"
                  className="bg-slate-300  "
                  placeholder="hotel name"
                  onChange={(e) => handleChange(e)}
                />
                {/* <span>Provide the name of your hotel</span> */}
              </div>

              <div className="felx flex-col gap-3 ">
                <label htmlFor="">Description</label>
                <Textarea
                  name=""
                  className="bg-slate-300  "
                  placeholder="write descrition about your hotel"
                  onChange={(e) => handleChange(e)}
                />
                {/* <span>Provide the name of your hotel</span> */}
              </div>
              <div className="flex flex-col gap-3 ">
                <label htmlFor="name">
                  Shot description about your location
                </label>
                <Textarea
                  name="location"
                  id="location"
                  className="bg-slate-300  "
                  placeholder="hotel name"
                  onChange={(e) => handleChange(e)}
                />
                {/* <span>Provide the name of your hotel</span> */}
              </div>
            </div>
            {/* second div */}
            <div className="flex flex-col gap-3 w-96 mx-auto">
              <div className="flex flex-col gap-3 w-full ">
                <label htmlFor="country">Country</label>
                <select
                  onChange={(e) => setCountry(e.target.value)}
                  name="country"
                  id="country"
                  value={country}
                  className="bg-slate-300  rounded-lg p-2 text-slate-600"
                >
                  <option value={""}>Select Country </option>
                  {countriesList.map((_country) => (
                    <option key={_country.id} value={_country.id}>
                      {_country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-3 ">
                <label htmlFor="state">State</label>
                <select
                  name="state"
                  id="state"
                  onChange={(e) => setcurrentState(e.target.value)}
                  value={currentState}
                  className="bg-slate-300  rounded-lg p-2 text-slate-600"
                >
                  <option value={""}>Select state </option>
                  {stateList.map((_state) => (
                    <option key={_state.id} value={_state.id}>
                      {_state.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-3 ">
                <label htmlFor="name">City</label>
                <select
                  className="bg-slate-300  rounded-lg p-2 text-slate-600"
                  name="city"
                  id="city"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                >
                  <option value={""}>Select City </option>
                  {citiesList.map((_city) => (
                    <option key={_city.id} value={_city.id}>
                      {_city.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 w-full ">
            <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
              <label htmlFor="image">Choose your Image</label>
              <Input id="image" name="image" type="file" />
            </div>
          </div>

          {/*All Amenities */}
          <h4 className="text-center text-xl  ">Hotel Amenitiec</h4>

          <div className="flex flex-wrap gap-4 w-full ">
            <div className="flex flex-col gap-3 w-96 mx-auto">
              {" "}
              <div className="w-full flex flex-col gap-3 ">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleRoomAmenities}
                >
                  Room Amenities
                </Button>
                {formData.roomAmenities.map((room_amenities, i) => (
                  <div className="w-96">
                    <Input
                      key={i}
                      value={room_amenities}
                      onChange={(e) => handleRoomAmenity(e, i)}
                      name="roomAmenities"
                      className="bg-slate-300 w-full  "
                      placeholder="room amenities"
                    />
                  </div>
                ))}
              </div>
              <div className="w-full flex flex-col gap-3 ">
                <Button type="button" variant="outline" onClick={handlefood}>
                  Food Amenities
                </Button>
                {formData.food.map((food, i) => (
                  <div className="w-96">
                    <Input
                      key={i}
                      value={food}
                      onChange={(e) => handleFoodAmenity(e, i)}
                      name="food"
                      className="bg-slate-300 w-full  "
                      placeholder="food amenities"
                    />
                  </div>
                ))}
              </div>
              <div className="w-full flex flex-col gap-3 ">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handletraveling}
                >
                  Travel Amenities
                </Button>
                {formData.traveling.map((travel, i) => (
                  <div className="w-96">
                    <Input
                      key={i}
                      value={travel}
                      onChange={(e) => handleTravelingAmenity(e, i)}
                      name="traveling"
                      className="bg-slate-300 w-full  "
                      placeholder="traveling amenities"
                    />
                  </div>
                ))}
              </div>
              <div className="w-full flex flex-col gap-3 ">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleservices}
                >
                  Services{" "}
                </Button>
                {formData.services.map((service, i) => (
                  <div className="w-96">
                    <Input
                      key={i}
                      value={service}
                      onChange={(e) => handleServicesAmenity(e, i)}
                      name="services"
                      className="bg-slate-300 w-full  "
                      placeholder="services amenities"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* next Amenities */}
            <div className="flex flex-col gap-3 w-96 mx-auto">
              <div className="w-full flex flex-col gap-3 ">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlefacilities}
                >
                  Facilities
                </Button>
                {formData.facilities.map((facility, i) => (
                  <div className="w-96">
                    <Input
                      key={i}
                      value={facility}
                      onChange={(e) => handleFacilitiesAmenity(e, i)}
                      name="facilities"
                      className="bg-slate-300 w-full  "
                      placeholder="facilities amenities"
                    />
                  </div>
                ))}
              </div>

              <div className="w-full flex flex-col gap-3 ">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleparkingTransport}
                >
                  Parking And Transport
                </Button>
                {formData.parking_transport.map((parking, i) => (
                  <div className="w-96">
                    <Input
                      key={i}
                      value={parking}
                      onChange={(e) => handleParkingTransportAmenity(e, i)}
                      name="parking_transport"
                      className="bg-slate-300 w-full  "
                      placeholder="parking and transport amenities"
                    />
                  </div>
                ))}
              </div>

              <div className="w-full flex flex-col gap-3 ">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleaccessebility}
                >
                  Accessebility
                </Button>
                {formData.accessebility.map((accessebility, i) => (
                  <div className="w-96">
                    <Input
                      key={i}
                      value={accessebility}
                      onChange={(e) => handleAccessebilityAmenity(e, i)}
                      name="accessebility"
                      className="bg-slate-300 w-full  "
                      placeholder="accessebility amenities"
                    />
                  </div>
                ))}
              </div>

              <div className="w-full flex flex-col gap-3 ">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleresturant}
                >
                  Resturant
                </Button>
                {formData.resturant.map((resturant, i) => (
                  <div className="w-96">
                    <Input
                      key={i}
                      value={resturant}
                      onChange={(e) => handleResturantAmenity(e, i)}
                      name="resturant"
                      className="bg-slate-300 w-full  "
                      placeholder="resturant amenities"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-600 font-semibold hover:bg-white hover:text-blue-600 hover:border-blue-600 border-2 mt-2"
          onClick={onSubmit}
        >
          Create{" "}
        </Button>{" "}
      </form>
    </Card>
  );
};

export default HotelForm;
