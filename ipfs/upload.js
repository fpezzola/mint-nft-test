async function run() {
  const { create } = await import("ipfs-http-client");
  const ipfs = await create();

  // we added three attributes, add as many as you want!
  const metadata = {
    path: "/",
    content: JSON.stringify({
      name: "JRR10 + LM10",
      attributes: [
        {
          trait_type: "Futbol",
          value: "100",
        },
        {
          trait_type: "Beauty",
          value: "100",
        },
        {
          trait_type: "Boca",
          value: "100",
        },
      ],
      // update the IPFS CID to be your image CID
      image:
        "https://ipfs.io/ipfs/QmY7Xx2gFQG2CbwMYU2zNkta8VjGuZbcvj8tzQw1mxCUzm",
      description: "Roman y Messi - Bombonera - 25/06/2023",
    }),
  };

  const result = await ipfs.add(metadata);
  console.log(result);

  process.exit(0);
}

run();
