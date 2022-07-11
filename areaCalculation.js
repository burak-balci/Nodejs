function area(r) {
  console.log(`Yarıçapı (${r}) olan dairenin alanı: ${Math.PI * r * r}`);
}

area(Number(process.argv.slice(2)));
