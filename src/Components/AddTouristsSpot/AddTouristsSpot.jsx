import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
const AddTouristsSpot = () => {
  const handleButton = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const Country = form.Country.value;
    const spotLocation = form.spotLocation.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const tavelTime = form.tavelTime.value;
    const UserName = form.UserName.value;
    const UserEmail = form.UserEmail.value;
    const photo = form.photo.value;
    const totalVisitors = form.totalVisitors.value;
    const description = form.description.value;
    const newDestination = {
      name,
      Country,
      spotLocation,
      averageCost,
      seasonality,
      tavelTime,
      UserName,
      UserEmail,
      photo,
      totalVisitors,
      description,
    };
    console.log(newDestination);

    // Send data to the server
    fetch("http://localhost:5000/destination", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newDestination),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "User Added a Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        form.reset();
      });
  };
  return (
    <div>
      <Helmet>
        <title>Destination | AddTouristsSpot Page</title>
      </Helmet>
      <div className="bg-[#F4F3F0] px-24 py-5 container mx-auto mt-5 rounded-xl">
        <h2 className="text-4xl text-gray-400 font-extrabold text-center mb-5">
          Add Tourists Spot
        </h2>
        <form onSubmit={handleButton}>
          {/* form country and spot name */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text"> Tourists Spot Name </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Tourists Spot Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text"> Country Name </span>
              </label>

              <label className="input-group relative">
                <input
                  type="text"
                  name="Country"
                  placeholder="Country Name"
                  className="input input-bordered w-full"
                />
                <ul className="menu menu-horizontal px-1 absolute -ml-12 top-2">
                  <li>
                    <details>
                      <summary></summary>
                      <ul className="p-2 bg-base-100 rounded-t-none">
                        <li>
                          <a>Bangladesh</a>
                        </li>
                        <li>
                          <a>Thailand</a>
                        </li>
                        <li>
                          <a>Indonesia</a>
                        </li>
                        <li>
                          <a>Malaysia</a>
                        </li>
                        <li>
                          <a>Vietnam</a>
                        </li>
                        <li>
                          <a>Cambodia</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </label>
            </div>
          </div>
          {/* form location and costing */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">location</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="spotLocation"
                  placeholder="location"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text"> Average Cost</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="averageCost"
                  placeholder=" Average Cost"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* summer or winter and travel time */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">
                  {" "}
                  seasonality-like summer or winter
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="seasonality"
                  placeholder=" summer or winter "
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text"> Travel Time like-7days </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="tavelTime"
                  placeholder="Travel Time"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form userName & Email */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text"> User Name </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="UserName"
                  placeholder=" User Name "
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="UserEmail"
                  placeholder="User Email"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Photo url row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* short Descriptions */}
          <div className="md:flex-col mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">
                  total Visitors Per sYear like-10000
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="totalVisitors"
                  placeholder=" total_visitors  "
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="text-left mb-5 w-full">
              <label className="label ">
                <span className="label-text">Short Description </span>
              </label>
              <textarea
                placeholder="Short Description"
                name="description"
                className="textarea textarea-bordered textarea-md w-full max-w-xs"
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            value="Add Button"
            className="btn btn-block bg-teal-900 text-gray-400 text-base"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTouristsSpot;
