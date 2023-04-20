import RepoDetails from "@/app/components/Repos/RepoDetails";
import RepoDirs from "@/app/components/Repos/RepoDirs";
import Link from "next/link";
import { Suspense } from "react";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link className="btn btn-back" href={"/code/repos"}>
        Go Back
      </Link>
      {/* el component da hy5od wa2t fl loading bta3o fa hanst5dm el suspense  */}
      {/* mmkn tpass ll suspense loading component l7d ma el component y render  */}
      <Suspense fallback={<div>Loading...</div>}>
        <RepoDetails name={name} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
