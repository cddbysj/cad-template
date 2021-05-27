const log = console.log.bind(console);
const MODEL = {
  hqs: "HQS",
  jrg: "JRG",
};
const MATERIAL = {
  carbonSteel: "G",
  hybrid: "H",
  stainlessSteel: "C",
};
let para = {
  model: "HQS",
  modelList: ["HQS", "JRG"],
  dn: 65,
  dnWater: 65,
  dnSteam: 65,
  dnList: [40, 65, 125, 250],
  dnWaterList: [40, 50, 65, 80, 100, 125, 150, 200, 250],
  dnSteamList: [40, 50, 65, 80, 100, 125, 150, 200, 250],
  steamP: 0.5,
  steamT: 160,
  tGap: 60,
  waterQ: 12,
  waterDetail: "",
  material: "304",
  materialList: [
    "304",
    "碳钢",
    "外壳碳钢，芯体304",
    "外壳碳钢，芯体316",
    "外壳碳钢，芯体316L",
    "316",
    "316L",
    "321",
    "317LMN",
    "2205双相钢",
    "",
  ],
  pLevel: 16,
  pLevelList: [16, 25, 10, 6],
  flangeStd: "HG/T 20592-2009",
  flangeStdList: [
    "GB/T 9119-2000",
    "GB/T 9119-2010",
    "HG/T 20592-2009",
    "HG/T 20592-2009 A系列",
    "HG/T 20592-2009 B系列",
    "HG/T 20615-2009",
    "JB/T 81-1994",
  ],
};

const vm = new Vue({
  el: "#container",
  data: para,
  computed: {
    imgSrc: function () {
      return `images/dn${this.dn}.png`;
    },
    modelName: function () {
      let prefix = this.model;
      let suffix = MATERIAL.stainlessSteel;
      if (this.material === this.materialList[1]) {
        suffix = MATERIAL.carbonSteel;
      }
      if (
        this.material === this.materialList[2] ||
        this.material === this.materialList[3]
      ) {
        suffix = MATERIAL.hybrid;
      }
      return `${prefix}-${this.dn}-${this.waterQ}${suffix}`;
    },
  },
  methods: {},
});
