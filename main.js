
let keys = { "1": { "name": "ali-nisi-dovoljno-lukav-i-namazan.mp3", "duration": 3070 }, "2": { "name": "baletan.mp3", "duration": 2652 }, "3": { "name": "covek-pojma-nema.mp3", "duration": 2182 }, "4": { "name": "da-je-baba-deda.mp3", "duration": 3410 }, "5": { "name": "dokle-bre-vise.mp3", "duration": 2809 }, "6": { "name": "duhovito.mp3", "duration": 4272 }, "7": { "name": "gledaju-se-kao-ljubavnici.mp3", "duration": 1425 }, "8": { "name": "glupo-je-samo-1.mp3", "duration": 4847 }, "9": { "name": "gvardiola.mp3", "duration": 2966 }, "0": { "name": "hvala-ti-iskreno-od-srca.mp3", "duration": 3854 }, "q": { "name": "hvata-me-panika.mp3", "duration": 1425 }, "w": { "name": "izvolite-kolega.mp3", "duration": 1216 }, "e": { "name": "ja-njega-potpuno-razumem.mp3", "duration": 2287 }, "r": { "name": "kad-je-zivot-samo-jedan.mp3", "duration": 1712 }, "t": { "name": "kako-vas-nije-sramota.mp3", "duration": 2835 }, "y": { "name": "kao-da-sam-pekar.mp3", "duration": 2182 }, "u": { "name": "kompleksna-tema.mp3", "duration": 3514 }, "i": { "name": "kukavicki.mp3", "duration": 798 }, "o": { "name": "matematika.mp3", "duration": 12997 }, "p": { "name": "mene-zabole-stikla.mp3", "duration": 3671 }, "a": { "name": "na-mene-ne-moze-da-utice.mp3", "duration": 4638 }, "s": { "name": "ne-mozete-da-zabranite.mp3", "duration": 5578 }, "d": { "name": "niko-ne-sme-a-da-kaze.mp3", "duration": 2104 }, "f": { "name": "ovaj-ne-zna-nista.mp3", "duration": 1529 }, "g": { "name": "pajaci-cirkuzanti.mp3", "duration": 3462 }, "h": { "name": "prestani-da-lazes.mp3", "duration": 1503 }, "j": { "name": "sad-si-me-postideo.mp3", "duration": 2052 }, "k": { "name": "sigurno-ovim-papirima-mahati-necu.mp3", "duration": 3227 }, "l": { "name": "sitauacija-je-beznadezna.mp3", "duration": 1425 }, "z": { "name": "suzio-si-od-srece-i-ponosa.mp3", "duration": 4089 }, "x": { "name": "u-patoloskom-strahu.mp3", "duration": 2287 }, "c": { "name": "ushiceni.mp3", "duration": 4951 }, "v": { "name": "vi-ste-samo-jedna-gomila-prevaranata.mp3", "duration": 2234 }, "b": { "name": "vidimo-se-nikada.mp3", "duration": 1268 }, "n": { "name": "znam-sve.mp3", "duration": 4037 } }

let canPlay = true;




// Event listener function
const keypressHandler = (event) => {
  if (canPlay) {
    let audio = new Audio('./assets/' + keys[event.key]['name']);
    audio.play();
    canPlay = false;

    let el = [...document.querySelectorAll("[data-key='" + event.key + "']")][0]
    console.log(el.textContent)
    el.style.backgroundColor = 'lightblue';

    // Disable event listener while sound is playing
    document.removeEventListener('keypress', keypressHandler);

    setTimeout(() => {
      canPlay = true;
      console.log('sada');
      el.style.backgroundColor = '#f0f0f0';

      // Re-enable event listener after sound has finished playing
      document.addEventListener('keypress', keypressHandler);
    }, keys[event.key]['duration']);
  }
};

// Attach the event listener initially
document.addEventListener('keypress', keypressHandler);