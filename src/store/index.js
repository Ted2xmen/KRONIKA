import { createStore } from "vuex";
export default createStore({
  state: {
    searchInput: "",
    reklamOne: "",
    reklamTwo: "",
    reklamThree: "",
    localData: [],
    bookData: [], // from app.vue
    sliderBooks: [
      {
        name: " EL-MENHELÜ'L-FÂİZ ",
        url:
          "http://ekitap.yek.gov.tr/urun/el-menhelu-l-faiz_764.aspx?CatId=279",
        img: "https://library.ircica.org/images/logo.png",
      },
      {
        name: "  TAHRÎRU USÛLİ’L-HENDESE VE’L-HİSÂB  ",
        url:
          "http://ekitap.yek.gov.tr/urun/tahriru-us%C3%BBli%E2%80%99l-hendese-ve%E2%80%99l-hisab_767.aspx?CatId=279",
        img:
          "http://ekitap.yek.gov.tr/uploads/productsimages/358f58d4-f7aa-4213-b1c1-47111ed55a33.jpeg",
      },
      {
        name: "  TAHRÎRU USÛLİ’L-HENDESE VE’L-HİSÂB  ",
        url:
          "http://ekitap.yek.gov.tr/urun/tahriru-us%C3%BBli%E2%80%99l-hendese-ve%E2%80%99l-hisab_767.aspx?CatId=279",
        img:
          "http://ekitap.yek.gov.tr/uploads/productsimages/358f58d4-f7aa-4213-b1c1-47111ed55a33.jpeg",
      },
      {
        name: "  TAHRÎRU USÛLİ’L-HENDESE VE’L-HİSÂB  ",
        url:
          "http://ekitap.yek.gov.tr/urun/tahriru-us%C3%BBli%E2%80%99l-hendese-ve%E2%80%99l-hisab_767.aspx?CatId=279",
        img:
          "http://ekitap.yek.gov.tr/uploads/productsimages/358f58d4-f7aa-4213-b1c1-47111ed55a33.jpeg",
      },
      {
        name: "  TAHRÎRU USÛLİ’L-HENDESE VE’L-HİSÂB  ",
        url:
          "http://ekitap.yek.gov.tr/urun/tahriru-us%C3%BBli%E2%80%99l-hendese-ve%E2%80%99l-hisab_767.aspx?CatId=279",
        img:
          "http://ekitap.yek.gov.tr/uploads/productsimages/358f58d4-f7aa-4213-b1c1-47111ed55a33.jpeg",
      },
    ],
  },

  getters: {
    // from firebase
    justKronik: (state) => {
      return state.bookData.filter((item) => item.category === "Kronik");
    },

    // from firefox bookmarks
    dictionary: (state) => {
      return state.localData[4];
    },
    blogs: (state) => {
      return state.localData[2];
    },
    library: (state) => {
      return state.localData[1];
    },
    literatur: (state) => {
      return state.localData[3];
    },
  },

  mutations: {},
  actions: {},
  modules: {},
});
