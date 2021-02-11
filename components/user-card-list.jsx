import React from "react";
import Link from "next/link";
import UserCard from "./user-card";

function UserCardList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.login}`}>
            <a>
              <UserCard name={user.login} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default UserCardList;
