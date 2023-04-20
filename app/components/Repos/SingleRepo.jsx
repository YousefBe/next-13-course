import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

const SingleRepo = ({repo}) => {
  return (
    <li key={repo.id}>
      <Link href={`/code/repos/${repo.name}`}>
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
        <div className="repo-details">
          <span>
            <FaStar /> {repo.stargazers_count}
          </span>
          <span>
            <FaCodeBranch /> {repo.forks_count}
          </span>
          <span>
            <FaEye /> {repo.watchers_count}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default SingleRepo;
