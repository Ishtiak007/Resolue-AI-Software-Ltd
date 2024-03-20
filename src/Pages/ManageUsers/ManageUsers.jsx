import { useQuery } from "@tanstack/react-query";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/axiosPublic";


const ManageUsers = () => {
    const axiosPublic = useAxiosPublic()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users');
            return res.data;
        }
    })
    const handleDeleteUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        });
    }
    const handleMakeAdmin = (user) => {
        axiosPublic.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);

                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is an Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <div className="flex justify-evenly">
            </div>
            <div className="overflow-x-auto mt-20 h-screen">
                <table className="table table-zebra my-5">
                    {/* head */}
                    <thead className="bg-gray-600">
                        <tr>
                            <th className="text-white font-bold">Index</th>
                            <th className="text-white font-bold">Name</th>
                            <th className="text-white font-bold">Email</th>
                            <th className="text-white font-bold">Role</th>
                            <th className="text-white font-bold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th className="font-bold">{index + 1} .</th>
                                <td className="font-bold">{user.name}</td>
                                <td className="font-bold">{user.email}</td>
                                <td className="font-bold">
                                    {user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn bg-red-400 hover:bg-red-400 text-white">Update to Admin</button>}
                                </td>
                                <td><button onClick={() => handleDeleteUser(user)} className="btn"><FaTrash className="text-base text-red-400"></FaTrash>Delete User</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;