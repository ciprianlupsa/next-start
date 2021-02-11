import React from "react";

import { useRouter } from "next/router";
const Subname = () => {
  const router = useRouter();
  console.log("Router ", useRouter());

  return (
    <div>
      Subnameee {router.query.name} {router.query.subname}
    </div>
  );
};

export default Subname;
