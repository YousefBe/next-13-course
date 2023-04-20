import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(
    "https://api.github.com/repos/YousefBe/" + name,
    // el option da by2ol l fetch t cache el data l modet 60 second bas , law el data btt8yar kter est5dmo  otherwise skip it
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const repo = response.json();
  return repo;
}

const RepoDetails = async ({ name }) => {
  const repo = await fetchRepo(name);
  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default RepoDetails;
