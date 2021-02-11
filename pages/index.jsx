import React, { useState } from "react";
import { useRouter } from "next/router";
import SearchUser from "../components/search-user";
import moment from "moment";
import useSWR from "swr";
import { githubFetcher } from "../libs/github-fetcher";
import UserCardList from "../components/user-card-list";

function IndexPage({ buildDateTime, initialUsers }) {
  const { data, error } = useSWR("/users", githubFetcher, {
    initialData: initialUsers,
  });
  const isUserListLoading = (!data && !error) || false;
  const [inputValue, setInputValue] = useState("Mi Valor Inicial");
  const router = useRouter();
  return (
    <div>
      <SearchUser
        value={inputValue}
        setValue={setInputValue}
        onSearch={() => router.push("/users/" + inputValue)}
      />
      {isUserListLoading ? (
        <div>Loading...</div>
      ) : (
        <UserCardList users={data} />
      )}

      <div>
        <p>{buildDateTime}</p>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const users = await githubFetcher("/users");
  return {
    props: {
      buildDateTime: moment().format("DD-MM-YYYY hh:mm:ss"),
      initialUsers: users,
    },
    revalidate: 1,
  };
}

export default IndexPage;
