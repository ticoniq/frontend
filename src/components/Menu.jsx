import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon, UsersIcon, SquaresPlusIcon } from "@heroicons/react/24/outline";

function Menu({user}) {
  return (
    <>
      <article className="flex flex-row gap-4 items-center px-4">
        <img className="h-10 rounded-full" src={user.profilePicture} alt="" />
        <div className="space-y-1">
          <div className="text-base leading-none">{user.firstName} {user.lastName}</div>
          <div className="text-xs leading-none">{user.position}</div>
        </div>
      </article>
      <ul className="menu menu-vertical p-0 m-0 items-stretch">
        <li className="p-0 m-0">
          <Link to="/">
            <HomeIcon className="h-4" /> Home
          </Link>
        </li>
        <li>
          <Link>
            <UsersIcon className="h-4" /> Members
          </Link>
        </li>
        <li>
          <details className="">
            <summary>
              <SquaresPlusIcon className="h-4" /> Organization
            </summary>
            <ul className="p-2 bg-base-200 text-black">
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </>
  );
}

export default Menu;
