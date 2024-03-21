import img1 from '../../assets/scott.jpg'
import img2 from '../../assets/question.jpg'

const FAQ = () => {
    return (
        <div className="p-5">
            <div className="hero min-h-screen bg-gray-100">

                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 space-y-5 p-4'>
                        <h2 className="text-2xl font-bold text-black text-center">
                            Frequently Asked Questions
                        </h2>
                        <div className="join join-vertical w-full my-20">
                            <div className="collapse collapse-arrow join-item border border-[#ececec]">
                                <input type="radio" name="my-accordion-4" checked="checked" />
                                <div className="collapse-title font-bold text[#333]">
                                    How to Create a user?
                                </div>
                                <div className="collapse-content">
                                    <p className="text-sm">

                                        <span className='text-lg font-bold'>Create User:</span>
                                        <br />
                                        Form: Provide a form for administrators to input new user details.
                                        <br />
                                        Validation: Ensure input fields are validated for data integrity (unique username, correct email format).
                                        <br />
                                        Password Security: Enforce strong password requirements and secure storage.
                                        Database: Insert new user data into the database.
                                        <br />
                                        Feedback: Provide confirmation to the administrator upon successful creation.
                                        Error Handling: Handle any errors gracefully and provide informative messages for resolution.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-[#ececec]">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title font-bold text[#333]">
                                    Read users form the Manage Users route
                                </div>
                                <div className="collapse-content">
                                    <p className="text-sm">
                                        <span className='text-lg font-bold'>Read User:</span>
                                        <br />
                                        Access User List:
                                        <br />
                                        Within the Manage User route, provide a dedicated endpoint or page for administrators to view a list of all registered users.
                                        <br />

                                        Customization:
                                        <br />
                                        Provide options within the Manage User route for administrators to customize the user list view according to their preferences.
                                        Allow sorting or filtering based on different user attributes.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-[#ececec]">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title font-bold text[#333]">
                                    How to Delete user?
                                </div>
                                <div className="collapse-content">
                                    <p className="text-sm">
                                        <span className='text-lg font-bold'>Delete User:</span>
                                        <br />
                                        Access Deletion Functionality:
                                        <br />
                                        Provide a dedicated interface in the Manage User route for administrators to delete user accounts.
                                        <br />
                                        Select User:
                                        <br />
                                        Allow administrators to choose the user they wish to delete from the user list.
                                        <br />
                                        Confirmation Prompt:
                                        <br />
                                        Display a confirmation prompt to confirm deletion, highlighting associated data implications.
                                        <br />
                                        Delete User:
                                        <br />
                                        Upon confirmation, delete the selected user account from the database.
                                        Ensure associated data, if any, is handled appropriately.
                                    </p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-[#ececec]">
                                <input type="radio" name="my-accordion-4" />
                                <div className="collapse-title font-bold text[#333]">
                                    User Update to Admin.
                                </div>
                                <div className="collapse-content">
                                    <p className="text-sm">

                                        <span className='text-lg font-bold'>Update User:</span>
                                        <br />
                                        Access Update Functionality:
                                        <br />
                                        Provide an interface in the Manage User route for administrators to update user details.

                                        Select User:

                                        Allow administrators to choose the user they wish to update from the user list.

                                        Edit Details:

                                        Display user details in an editable form.
                                        Allow administrators to modify username, email, and other relevant information.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2 relative'>
                        <img src={img1} className="w-3/4 rounded-lg shadow-2xl border-8  border-white " />
                        <img src={img2} className='w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl' alt="" />
                    </div>
                </div>
            </div>





        </div>
    );
};

export default FAQ;