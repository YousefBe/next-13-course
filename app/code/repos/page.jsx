// use this to tell next that this is a client side component
// 'use client'

import SingleRepo from "@/app/components/Repos/SingleRepo";

const fetchRepos = async () => {
  const data = await fetch("https://api.github.com/users/YousefBe/repos");
  const repos = await data.json();

  await new Promise((resolve , reject) => setTimeout(resolve, 1000));
  console.log(repos);
  return repos;
};

const ReposPage = async () => {
  const repos = await fetchRepos();
  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo) => (
          <SingleRepo repo={repo} />
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
