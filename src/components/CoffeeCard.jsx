import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
    const { _id, name, category, details, photoUrl, quantity, supplire } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photoUrl} alt="Movie" /></figure>
            <div className=" flex justify-between w-full p-5">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p><span className="font-bold">Details:</span> {details}</p>
                </div>
                <div className="btn-group btn-group-vertical space-y-3">
                    <button className="btn btn-primary">View</button>
                    <Link to={`updatecoffee/${_id}`}>
                        <button className="btn btn-warning">Edit</button></Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-error"
                    >Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;