import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function VehicleRegister() {
    const [vehicle, setVehicle] = useState({
        make: '',
        model: '',
        year: '',
        vin: '',
        licensePlate: '',
        type: '',
        owner: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVehicle({
            ...vehicle,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { make, model, year, vin, licensePlate, type, owner } = vehicle;

        console.log('Vehicle Information:');
        console.log(`Make: ${make}`);
        console.log(`Model: ${model}`);
        console.log(`Year: ${year}`);
        console.log(`VIN: ${vin}`);
        console.log(`License Plate: ${licensePlate}`);
        console.log(`Vehicle Type: ${type}`);
        console.log(`Owner: ${owner}`);

        toast.success('Form Submitted! Check the console for details.');
    };

    return (
        <div className="flex bg-[#F5F5F5] w-[100vw] h-[110vh] justify-center mt-[3rem]">
            <div className="mt-[2rem] space-y-2">
                <ToastContainer position="top-center" />
                <h1 className="text-center text-[2.5rem] font-semibold">
                    <span className="text-[#DC143C]">Vehicle</span> Registration
                </h1>
                <form onSubmit={handleSubmit} className="bg-white w-[40vw] rounded shadow-md mt-3 px-6 py-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="make">
                            Make:
                        </label>
                        <input
                            type="text"
                            id="make"
                            name="make"
                            value={vehicle.make}
                            onChange={handleChange}
                            required
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="model">
                            Model:
                        </label>
                        <input
                            type="text"
                            id="model"
                            name="model"
                            value={vehicle.model}
                            onChange={handleChange}
                            required
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
                            Year:
                        </label>
                        <input
                            type="text"
                            id="year"
                            name="year"
                            value={vehicle.year}
                            onChange={handleChange}
                            required
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vin">
                            VIN:
                        </label>
                        <input
                            type="text"
                            id="vin"
                            name="vin"
                            value={vehicle.vin}
                            onChange={handleChange}
                            required
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="licensePlate">
                            License Plate:
                        </label>
                        <input
                            type="text"
                            id="licensePlate"
                            name="licensePlate"
                            value={vehicle.licensePlate}
                            onChange={handleChange}
                            required
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
                            Vehicle Type:
                        </label>
                        <select
                            id="type"
                            name="type"
                            value={vehicle.type}
                            onChange={handleChange}
                            required
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select Vehicle Type</option>
                            <option value="Car">Car</option>
                            <option value="Bus">Bus</option>
                            <option value="Truck">Truck</option>
                            <option value="Bicycle">Bicycle</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="owner">
                            Owner:
                        </label>
                        <input
                            type="text"
                            id="owner"
                            name="owner"
                            value={vehicle.owner}
                            onChange={handleChange}
                            required
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-[#DC143C] text-white font-bold py-2 px-[6rem] rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
