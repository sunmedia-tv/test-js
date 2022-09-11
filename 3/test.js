const NETWORK_ERROR_PROBABILITY = 0.1;

function fakeFetch(ad, cb) {
  const fakeResponses = [
    { ad: 1, title: "The first ad" },
    { ad: 2, title: "The second ad" },
    { ad: 3, title: "The third ad" },
    { ad: 4, title: "The forth ad" },
    { ad: 5, title: "The last ad" },
  ];
  const randomDelay = (Math.round(Math.random() * 1e4) % 40) + 1000;

  setTimeout(() => {
    const networkError = Math.random() <= NETWORK_ERROR_PROBABILITY;
    const currentAd = fakeResponses.find((resp) => resp.ad === ad);

    if (networkError) {
      cb("Network error");
    } else {
      cb(null, currentAd);
    }
  }, randomDelay);
}

//* Petición 1 ad as
const getAd = async (id) => {
  return await new Promise((resolve, reject) => {
    fakeFetch(id, (error, response) => {
      if (error || !response) reject(`Add with ${id} not found`);
      else resolve(response);
    });
  });
};

//* Petición todos los adds
const getAds = async () => {
  try {
    //* Agregamos de manera asíncrona los ads al array
    for (let i = 1; i <= 6; i++) {
      //* Recuperamos el ad
      const res = await getAd(i);
      //* Mostramos el resultado
      console.log(res);
    }

    //* Finalizamos la ejecucución
    console.log("Done!");
  } catch (error) {
    console.log(error);
  }
};

getAds();
