import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();

    const { _id, name, category, test, details, photoUrl, quantity, supplire } = coffee;


    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplire = form.supplire.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;

        const updatedCoffee = { name, quantity, supplire, test, category, details, photoUrl }

        console.log(updatedCoffee);

        // send data to the server.
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Confirm'
                    })
                }
            })
    }
    return (
        <div className="bg-slate-200 py-24">
            <h1 className="text-4xl text-center">Update Coffee</h1>
            <form onSubmit={handleUpdateCoffee} className="w-3/5 mx-auto">
                {/* Name and Quantity */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Supplire and test*/}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Supplire</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplire" defaultValue={supplire} placeholder="Supplire Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Test</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="test" defaultValue={test} placeholder="Test" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Category and Details */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* Photo Url */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photoUrl" defaultValue={photoUrl} placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block bg-orange-800 hover:bg-orange-700" type="submit" value="Add a Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;