
function shortenNumber(number: number) {
  const abbreviations = [
    { value: 1e9, symbol: "B" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "K" },
  ];

  for (const abbreviation of abbreviations) {
    if (number >= abbreviation.value) {
      const shortenedNumber = number / abbreviation.value;
      // Round to one decimal place
      const roundedNumber = Math.round(shortenedNumber * 10) / 10;
      return `${roundedNumber}${abbreviation.symbol}`;
    }
  }

  return number.toString(); // Return the number as is if it's not large enough.
}

function formatPrice(price: string) {
  const formattedPrice: any = parseFloat(price).toFixed(2);
  const isEven = formattedPrice % 1 === 0;
  return isEven ? parseInt(formattedPrice) : formattedPrice;
}




  // function getImageSize(imageUrl) {
  //   const img = new Image();
  //   img.src = imageUrl;

  //   img.onload = () => {
  //     const width = img.width;
  //     const height = img.height;

  //     console.log(`Image dimensions: ${width} x ${height}`);
  //     return { width, height };
  //   };
  // }


  async function getImageSize(imageUrl: string) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = imageUrl;

      img.onload = () => {
        const width = img.width;
        const height = img.height;

        console.log(`Image dimensions: ${width} x ${height}`);
        resolve({ width, height });
      };

      img.onerror = (error) => {
        reject(error);
      };
    });
  }
  
export { shortenNumber, formatPrice, getImageSize };
