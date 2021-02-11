import React from "react";
import { useRouter } from "next/router";

function EjemploPage() {
  const router = useRouter();
  const query = router.query;
  return (
    <div>
      <span>{JSON.stringify(query)}</span>
    </div>
  );
}

export default EjemploPage;
