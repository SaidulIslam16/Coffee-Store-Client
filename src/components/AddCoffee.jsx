const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplire = form.supplire.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;

        const newCoffee = { name, quantity, supplire, test, category, details, photoUrl }

        console.log(newCoffee);
    }

    return (
        <div className="bg-slate-200 py-24">
            <h1 className="text-4xl text-center">Add a Coffee</h1>
            <form onSubmit={handleAddCoffee} className="w-3/5 mx-auto">
                {/* Name and Quantity */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
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
                            <input type="text" name="supplire" placeholder="Supplire Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Test</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="test" placeholder="Test" className="input input-bordered w-full" />
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
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
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
                            <input type="text" name="photoUrl" placeholder="Photo Url" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-block bg-orange-800 hover:bg-orange-700" type="submit" value="Add a Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;