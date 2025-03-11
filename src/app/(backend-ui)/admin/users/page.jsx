"use client";
import Link from "next/link";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";

const AllUsers = () => {
  const {
    data: usersData,
    usersError,
    isUsersLoading,
    mutate,
  } = useSWR("/api/auth/users", fetcher);

  console.log('users: ', usersData)

  // handle user delete
  const handleUserDelete = async (id) => {
    alert("Do you want to delete?");
    const res = await fetch(`/api/auth/users/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      mutate(); // re-fetch the data after deletion
    } else {
      console.error("Failed to delete the user");
    }
  };

  if (usersError) return <div>Failed to load users</div>;

  return (
    <>
    <header className="bg-[#555] text-white p-5">
            <ul className="flex space-x-3">
                <li><Link href="/">Back to Homepage</Link></li>
                <li><Link href="/admin/users/create">Create User</Link></li>
                <li><Link href="/admin/users">All Users</Link></li>
            </ul>
        </header>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      No.
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Full Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {usersData?.map((user, index) => (
                    <tr
                      key={user?._id}
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {index + 1}.
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.firstName} {user.lastName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.email}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.status || "N/A"}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.image ? <img class="w-[60px] h-[60px] object-cover rounded-md" src={user?.image} /> :  <img class="w-[60px] h-[60px] object-contain rounded-md" src="/images/avatar.png" alt="Avatar" />}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Link
                          href={`/admin/users/update/${user._id}`}
                          className="mr-2"
                        >
                          <svg
                            className="inline-block cursor-pointer"
                            width="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                                stroke="#000000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>{" "}
                              <path
                                d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                                stroke="#000000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>{" "}
                            </g>
                          </svg>
                        </Link>
                        <button
                          disabled={user.role === "admin"}
                          onClick={() => handleUserDelete(user._id)}
                        >
                          <svg
                            className={`inline-block ${
                              user.role === "admin" &&
                              "opacity-50 cursor-not-allowed"
                            }`}
                            width="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M10 11V17"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>{" "}
                              <path
                                d="M14 11V17"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>{" "}
                              <path
                                d="M4 7H20"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>{" "}
                              <path
                                d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>{" "}
                              <path
                                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>{" "}
                            </g>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
