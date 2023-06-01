export const labelsProducer = (data = []) => {
  const titleArray = [];

  data.forEach((i) => {
    const title = i.airline;
    if (!titleArray.includes(title)) {
      titleArray.push(title);
    }
  });
  return titleArray;
};

export const cardArray = (labels, data) => {
  const final = labels.map((i) => {
    let totalEarnings = 0;
    let logo = "";
    data.map((obj) => {
      if (obj.airline === i) {
        totalEarnings += Number(obj.price);
        logo = obj.logo;
      }
    });
    return { name: i, totalEarnings, logo };
  });

  return final;
};
