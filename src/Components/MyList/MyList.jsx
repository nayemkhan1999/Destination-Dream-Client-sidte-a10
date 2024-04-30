import { useEffect } from "react";
import UseAuth from "../UseAuth/UseAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const MyList = () => {
  const { user } = UseAuth() || {};
  console.log(user, "mongoDB data");
  const [userAddEmail, setUserAddEmail] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/destination_email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserAddEmail(data);
      });
  }, [user?.email]);
  console.log(userAddEmail);

  const { _id } = userAddEmail;
  console.log(_id);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/destination/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Destination has been deleted.",
                icon: "success",
              });
              const remaining = userAddEmail.filter(
                (craft) => craft._id !== id
              );
              setUserAddEmail(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      {/* <h2 className="text-4xl text-center">MyList page{userAddEmail.length}</h2> */}

      <div className="overflow-x-auto mt-8  shadow-xl rounded-xl p-4">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th className="font-bold text-sm">Spot Name</th>
              <th className="font-bold text-sm">Country</th>
              <th className="font-bold text-sm">Average Costing</th>
              <th className="font-bold text-sm">location</th>
              <th className="font-bold text-sm">Total Visitor Per Year</th>
              <th className="font-bold text-sm">Travel Time</th>
              <th className="font-bold text-sm text-teal-300 ">Update</th>
              <th className="font-bold text-sm text-rose-600">Delete</th>
            </tr>
          </thead>
          <tbody>
            {userAddEmail.map((tableEmail) => (
              <tr key={tableEmail._id} className="space-y-3">
                <td></td>
                <td>{tableEmail.name}</td>
                <td>{tableEmail.Country}</td>
                <td>{tableEmail.averageCost}K</td>
                <td>{tableEmail.spotLocation}</td>
                <td>{tableEmail.totalVisitors} peoples</td>
                <td>{tableEmail.tavelTime} peoples</td>
                <td>
                  <Link to={`/updatePage/${tableEmail._id}`}>
                    <button className="btn btn-xs btn-info text-yellow-400">
                      Update
                    </button>
                  </Link>
                </td>

                <td>
                  <button
                    onClick={() => handleDelete(tableEmail._id)}
                    className="btn btn-xs btn-error text-teal-300 "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
